import { useState } from "react";
import "./Popups.css";
import pdfToText from 'react-pdftotext';
import { extractRawText } from 'mammoth';
import * as XLSX from 'xlsx/xlsx.mjs';

const reader = new FileReader();

export const FilePopup = (props) => {
	const [hide, setHide] = useState(true);
	function togglePopup(){
		setHide(!hide);
	}

	function handleSubmit(e){
		e.preventDefault();
		const file = e.target[0].files[0];
		const filename = file.name;
		parseFile(filename, file, props.addNew);
		togglePopup();
	}

	return !hide ? (
		<div className="new-file-form">
			<form onSubmit={handleSubmit}>
				<input type="file" name="file" required/>
				<button>Upload</button>
			</form>
			<button onClick={togglePopup}>Cancel</button>
		</div>
	) : (
		<div className="newfile-btn" onClick={togglePopup}>New File</div>
	);
}

/** Helper Functions */
function getExtension(filename){
	return filename.split('.').pop();
}

async function parseFile(filename, file, addfile){
	const ext = getExtension(filename);

	switch(ext){
		case 'log':
		case 'txt':
			reader.readAsText(file);
			reader.onloadend = () => addfile({name:filename, text:reader.result, sum:null});
			break;
		case 'pdf': 	
		case 'docx':	
		case 'xlsx':
			let text = await extractText(file, ext);
			addfile({name:filename, text:text, sum:null });
			break;
		default: //Attempt to read as text
			alert("File type is not supported");
	}
}

function extractText(file, type){
	return new Promise((resolve, reject)=>{
		try{
			if(type==="pdf"){
				pdfToText(file).then(text => resolve(text));
				return;
			}

			reader.readAsArrayBuffer(file);
			reader.onloadend = () => {
				const data = reader.result;
				if(type === "docx"){
					extractRawText({arrayBuffer:data})
						.then(text => resolve(text.value))
						.catch(error => alert(error));
				}
				else if (type === "xlsx"){
					const workbook = XLSX.read(data);
					let text = "";
					workbook.SheetNames.forEach((name) => {
						text += XLSX.utils.sheet_to_txt(workbook.Sheets[name]);
					})
					resolve(text);
				}
			}
		}
		catch(e){
			reject(e);
		}
	})
}
