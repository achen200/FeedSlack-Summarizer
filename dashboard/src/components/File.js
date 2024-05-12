import { useEffect } from "react"; 
import { Default, PDF, Sheets, Word, Media } from "./React-Svg.js";
import { getExtension } from "../utilities.js";

/**
 * File component for list of files displayed
 * under Documents. Props are passed from App.js to
 * set current file, determining which content to 
 * display in MainDisplay.js
 * 
 * Hierarchy: App -> SideMenu -> File
 * 
 * Children: None
 * 
 * @param {Object} props
 * @param {Function} props.setFile
 * @param {Number} props.id 
 * @param {String} props.name
 * @returns 
 */
export function File(props){
	function setFile(){
		props.setFile(props.id);
	}
	
	useEffect(() => {
		setFile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
	<div className="file" onClick={setFile}>
		{	
			renderIcon(getExtension(props.name))
		}
		<div className="file-name">
			<div className="text-wrapper">
			{props.name}
			</div>
		</div>
	</div>
	);
}

function renderIcon(extension){
	switch(extension){
		case 'docx':
			return <Word/>;
		case 'csv':
		case 'xlsx':
			return <Sheets/>;
		case 'pdf':
			return <PDF/>;
		case 'avi': //Cases fall through"to parseMedia
		case 'mov':
		case 'mp4':
		case 'm4a':
		case 'mp3':
		case 'wav':
		case 'aiff':
			return <Media/>;
		default:
			return <Default/>;
	}
}