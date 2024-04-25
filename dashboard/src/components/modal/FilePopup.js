import { useState } from "react";
import "./Popups.css";

/**
 * Component renders when "New File" button is pressed
 * on the Side Menu. Props passed from App.js to Sidemenu.js
 * to this, and contains addNew Function to add new file.
 * 
 * Hierarchy: App -> SideMenu -> FilePopup
 * 
 * Children: None
 * 
 * @param {Object} props
 * @param {Function} props.addNew 
 * @returns Popup that prompts user to upload file
 */
export function FilePopup(props){
	//Component rendering
	const [hide, setHide] = useState(true);
	//"Upload" button rendering
	const [showUpload, setShowUpload] = useState(false);
	
	function togglePopup(){
		setHide(!hide);
		setShowUpload(false);
	}

	async function handleSubmit(e){
		e.preventDefault();
		//Prepare file data to be sent to server
		const file = e.target[0].files[0];
		const formData = new FormData();
		formData.append('file', file);
		formData.append('filename', file.name);

		//POST req to retrieve parsed text
		const response = await fetch("http://localhost:3080/upload", {
			method:"POST",
			body: formData
		})
		const parsedFile = await response.json();
		
		//Add file to FileList
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
