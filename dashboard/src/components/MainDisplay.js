import { SummaryBox } from "./SummaryBox";
import "./style.css";

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