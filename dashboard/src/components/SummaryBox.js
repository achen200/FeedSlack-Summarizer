import { useEffect, useState } from "react";
import { getExtension, timeout } from "../utilities.js";
import { ThreeDots } from "react-loader-spinner";
/**
 * Component that determines whether Summary Box
 * is displayed, and what contents to display inside it. 
 * 
 * Hierarchy: App -> MainDisplay -> SummaryBox
 * 
 * Children: None
 * 
 * @param {String} props.id
 * Current File's ID
 * @param {Object} props
 * @param {Object} props.file
 * @param {String} props.file.name
 * @param {String} props.file.text
 * @param {String} props.file.sum  
 * @param {Function} props.editFile
 * @param {Function} props.useTokens
 * @returns 
 */
export function SummaryBox(props){
	//Hook to show summary box
	const [showSum, setShowSum] = useState(false);
	//Summary box contents
	const [sum, setSum] = useState("");
	//Disable "Generate Summary" button 
	const [disabled, setDisabled] = useState(false);
	//Whether current file is spreadsheet
	const [isSheet, setIsSheet] = useState(false);
	//Loading dots color
	const [color, setColor] = useState("");

	//Upon switching current files
	useEffect(()=>{
		const ext = getExtension(props.file.name);
		setIsSheet((ext === "xlsx" || ext === "csv"));
		if(props.file.sum){
			setShowSum(true);
			setSum(props.file.sum);
		} else {
			setShowSum(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[props.id]);

	async function generateSum(){
		//Prevent multiple presses
		if(disabled) return;
		setDisabled(true);
		setColor("#C6878F"); //Color of summarize button

		//Server request to generate summary
		const response = await fetch("http://localhost:3080/generate-summary",{
			method:"POST",
			headers:{
				"Content-Type":"application/json",
			},
			body:JSON.stringify({
				message:props.file.text
			})
		});
		const newsum = await response.json();

		//Update file and user tokens
		props.editFile(props.id, props.file.name, props.file.text, newsum.data);
		props.useTokens(Number(newsum.tokens));
		
		setDisabled(false);	
		setShowSum(true);
		setSum(newsum.data);
	}

	async function generateVis(){
		if(disabled) return;
		setDisabled(true);
		setColor("#6a9b84");
		
		await timeout(2000);

		//Send POST request to server
		setShowSum(true);
		setSum("Fill this with a chart")
		setDisabled(false);
	}

	return (showSum)?(
		<div className="summary">
			<div className="text-wrapper">Content Summary</div>
			<textarea className="summary-box" readOnly value={sum}/>
		</div>
	):(
		<div className="presummary"> 
			{disabled && <ThreeDots height="80" color={color}/>}
			{!disabled && <button id="sum" onClick={generateSum} disabled={disabled}>Summarize</button>}
			{!disabled && isSheet && <button id="vis" onClick={generateVis} disabled={disabled}>Visualize</button>}
		</div>
	);
}