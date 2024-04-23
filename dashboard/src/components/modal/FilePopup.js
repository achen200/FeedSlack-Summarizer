import { useState } from "react";
import "./Popups.css";

export function FilePopup(props){
	const [hide, setHide] = useState(true);
	const [showUpload, setShowUpload] = useState(false);
	function togglePopup(){
		setHide(!hide);
		setShowUpload(false);
	}

	async function handleSubmit(e){
		e.preventDefault();
		const file = e.target[0].files[0];
		const formData = new FormData();
		formData.append('file', file);
		formData.append('filename', file.name);

		const response = await fetch("http://localhost:3080/upload", {
			method:"POST",
			body: formData
		})

		const parsedFile = await response.json();
		props.addNew(parsedFile.data);
		togglePopup();
	}

	function handleChange(){
		setShowUpload(true);
	}

	return !hide ? (
		<div className="new-file-form">
			<form id="fileform" onSubmit={handleSubmit}>
				<input type="file" name="file" onChange={handleChange} encType="multipart/form-data" required/>
			</form>
			<div className="form-buttons">
				{showUpload && <button type="submit" form="fileform" id="upload">Upload</button>}
				<button id="cancel" onClick={togglePopup}>Cancel</button>
			</div>
		</div>
	) : (
		<div className="newfile-btn" onClick={togglePopup}>New File</div>
	);
}
