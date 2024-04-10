import { SummaryBox } from "./SummaryBox";
import "./style.css";

export const MainDisplay = (props) => {
	return (
		<div className="main-display"> 
		<div>{props.file.name}</div>
		<SummaryBox file={props.file} id={props.currId} editFile={props.editFile}/>
		<div className="original">
			<div className="text-wrapper">Original Content</div>
			<textarea className="original-box" readOnly value={props.file.text}/>
		</div>
		</div>
	);
};