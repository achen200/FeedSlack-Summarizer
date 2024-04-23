import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { extractRawText } from 'mammoth';
import * as XLSX from 'xlsx/xlsx.mjs';
import PDFparser from 'pdf2json';
import { AssemblyAI } from 'assemblyai';
import axios from 'axios';

dotenv.config();

const T_DIR = "./transcriptions";
const headers = {
	"authorization": process.env.ASSEMBLY_AI_API_KEY,
}
const client = new AssemblyAI({
	apiKey:headers.authorization,
});

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
		case 'avi':
		case 'mov':
		case 'mp4':
		case 'm4a':
		case 'mp3':
		case 'wav':
		case 'aiff':
			return parseMedia(fileBuffer, fileName);
		default:
			alert("File type is not supported"); //Later problem: do the alerts
	}
}

/** Helper Functions */
function getExtension(filename){
	return filename.split('.').pop();
}

async function parseMedia(buffer, name){
	const filepath = path.join(T_DIR, name);
	const tpath = path.join(T_DIR, name+".txt");

	if(fs.existsSync(tpath)){
		return fs.readFileSync(tpath, {encoding:"utf-8"});
	}
	else{
		try{
			fs.writeFileSync(filepath, buffer);
			const uploadRes = await axios.post('https://api.assemblyai.com/v2/upload', buffer, {headers});
			const uploadUrl = uploadRes.data.upload_url;
			console.log(uploadUrl);
			const params = { 
				audio_url:uploadUrl,
				speaker_labels:true
			}
			const transcript = await client.transcripts.transcribe(params);
			if(transcript.status === "error"){
				throw new Error(transcript.error);
			}
			fs.writeFileSync(tpath, transcript.text);
			return transcript.text;
		}
		catch(e){
			console.log(e);
		}
	}	
}

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

function parseDoc(buffer){
	return new Promise((resolve, reject)=>{
		extractRawText({buffer:buffer})
		.then(text => resolve(text.value))
 		.catch(error => reject(error));
	});
}

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

// else if(type === "mp4" || type === "mp3"){			
// 	const response = await fetch("http://localhost:3080/transcribe", {
// 		method: 'POST',
// 		headers:{
// 			"Content-Type":"multipart/form-data",
// 		},
// 		body: formdata
// 	});

