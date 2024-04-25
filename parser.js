/**
 * Contains functions to parse different files 
 * and extract text content to prepare for summary
 * generation.
 * 
 * @author Anthony Chen <anthonychen2002@gmail.com>
 * Creation Date - 4/20/2024
 */

import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { extractRawText } from 'mammoth';
import * as XLSX from 'xlsx/xlsx.mjs';
import PDFparser from 'pdf2json';
import { AssemblyAI } from 'assemblyai';
import axios from 'axios';

//Configure environment variables
dotenv.config();

//Store video/audio transcripts to minimze duplicate calls
const T_DIR = "./transcriptions";

//Headers used for API
const headers = {
	"authorization": process.env.ASSEMBLY_AI_API_KEY,
}
const client = new AssemblyAI({
	apiKey:headers.authorization,
});

/**
 * Parses file and returns text content. If video
 * or audio, returns text transcripts.
 * @param {Buffer} fileBuffer 
 * Byte buffer of file contents
 * @param {String} fileName 
 * Name of the file including extension
 * @returns {String}
 */
export async function parseFile(fileBuffer, fileName){
	const ext = getExtension(fileName);
	switch(ext){
		case 'log':
		case 'txt':
			const decoder = new TextDecoder("utf-8");
			return decoder.decode(fileBuffer);
		case 'pdf':
			return parsePdf(fileBuffer);
		case 'docx':
			return parseDoc(fileBuffer);
		case 'xlsx':
			return parseXlsx(fileBuffer);
		case 'avi': //Cases fall through"to parseMedia
		case 'mov':
		case 'mp4':
		case 'm4a':
		case 'mp3':
		case 'wav':
		case 'aiff':
			return parseMedia(fileBuffer, fileName);
		default:
			/**@todo Have server push alerts to client */
			alert("File type is not supported"); 
	}
}

/**
 * Extracts file extension from file name
 * @param {String} name filename
 * @returns {String} file extension
 */
function getExtension(name){
	return name.split('.').pop();
}

/**
 * Obtains transcripts from inputted video or
 * audio files. If transcripts don't exist yet,
 * then they're generated using AssemblyAI API
 * and locally stored. 
 * 
 * Dependencies - AssemblyAI, AXIOS
 * @param {Buffer} buffer 
 * @param {String} name 
 * @returns {String} Text transcripts
 */
async function parseMedia(buffer, name){
	//Path of transcripts
	const tpath = path.join(T_DIR, name+".txt"); 

	if(fs.existsSync(tpath)){ //If transcript exists
		return fs.readFileSync(tpath, {encoding:"utf-8"});
	}
	else{
		try{
			//Upload media and audio file 
			const uploadRes = await axios.post(
				'https://api.assemblyai.com/v2/upload', buffer, {headers});
			const uploadUrl = uploadRes.data.upload_url;
			const params = { 
				audio_url:uploadUrl,
				speaker_labels:true
			}
			//Get transcripts
			const transcript = await client.transcripts.transcribe(params);
			if(transcript.status === "error"){
				throw new Error(transcript.error);
			}
			//Locally save transcripts
			fs.writeFileSync(tpath, transcript.text);
			return transcript.text;
		}
		catch(e){
			console.log(e);
		}
	}	
}

/**
 * Extracts and returns raw text content from a PDF.
 * 
 * Dependencies - pdf2json
 * @param {Buffer} buffer 
 * @returns {Promise<String>} PDF raw text
 */
function parsePdf(buffer){
	const parser = new PDFparser(null, 1);
	parser.parseBuffer(buffer);
	return new Promise(function (resolve, reject){
		parser.on("pdfParser_dataReady", pdfData => {
			resolve(parser.getRawTextContent());
		});
		parser.on("pdfParser_dataError", errData => {
			reject(errData.parserError);
		});
	})
}

/**
 * Extracts and returns text content from a
 * MS Word file (.docx)
 * 
 * Dependencies - mammoth
 * @param {Buffer} buffer 
 * @returns {Promise<String>} raw text
 */
function parseDoc(buffer){
	return new Promise((resolve, reject)=>{
		extractRawText({buffer:buffer})
		.then(text => resolve(text.value))
 		.catch(error => reject(error));
	});
}

/**
 * Extracts and returns text content from
 * MS Excel file (.xlsx). This concatenates
 * output from all sheets within the file.
 * 
 * Dependencies - xlsx
 * @param {Buffer} buffer 
 * @returns {Promise<String>} raw text
 */
function parseXlsx(buffer){
	return new Promise((resolve, reject)=>{
		try{
			const workbook = XLSX.read(buffer);
			let text = "";
			workbook.SheetNames.forEach((name) => {
				text += XLSX.utils.sheet_to_txt(workbook.Sheets[name]);
			})
			resolve(text);
		}
		catch(e){
			reject(e);
		}
	});	
}