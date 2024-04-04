import { useState } from "react";
import axios from "axios";
import "./Popups.css";


export const FilePopup = (props) => {
	//Send props of adding new file
	const [hide, setHide] = useState(true);

	function showPopup(){
		setHide(false);
	}
	function closePopup(){
		setHide(true);
	}
	function handleSubmit(e){
		e.preventDefault();
		const filename = e.target.elements['fname'].value;
		const originaltext = e.target.elements['original'].value;
		
		//Link handling in here...
		//TODO: Change original text to link of google docs file, then send 
		//HTTP request to retrieve docs data, THEN used retrieved data to 
		//call openAI API

		props.addNew(filename, originaltext);
		closePopup();
	}

	return !hide ? (
		<div className="new-file-form">
			<button onClick={closePopup}> x</button>
			<form onSubmit={handleSubmit}>
				<label htmlFor="fname">FileName</label>
				<input type="text" id="fname" minLength="3" maxLength="20" required/>
				<label htmlFor="original">Original Text</label>
				<input type="text" id="original"/>
				<input type="submit" value="Create"/>
			</form>
		</div>
	) : (
		<div className="newfile-btn" onClick={showPopup}>New File</div>
	);
}
