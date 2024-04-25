import { SummaryBox } from "./SummaryBox";
import "./style.css";
/**
 * Contains textbox with the current file's 
 * original text and its corresponding summary.
 * 
 * Hierarchy: App -> MainDisplay
 * 
 * Children: SummaryBox
 * @param {Object} props
 * @param {Object} props.file
 * @param {String} props.file.name
 * @param {String} props.file.text 
 * @param {String} props.file.sum
 * @param {Number} props.currId
 * @param {Function} props.editFile
 * @param {Function} props.setFile
 * @param {Function} props.useTokens
 * @returns 
 */
export function MainDisplay(props){
	return (
		<div className="main-display"> 
			<div className="title">{props.file.name && props.file.name.substring(0, props.file.name.lastIndexOf('.'))}</div>
			<SummaryBox file={props.file} id={props.currId} editFile={props.editFile} setFile={props.setFile} useTokens={props.useTokens}/>
			<div className="original">
				<div className="text-wrapper">Original Content</div>
				<textarea className="original-box" readOnly value={props.file.text}/>
			</div>
		</div>
	);
};