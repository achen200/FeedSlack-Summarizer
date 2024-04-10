import { useEffect, useState } from "react";

export function SummaryBox(props){
	const [showSum, setShowSum] = useState(false);
	const [sum, setSum] = useState("");

	useEffect(()=>{
		setShowSum(props.file.sum);
	},[props.id]);

	function generateSum(){
		const newsum = "This is a sample generated summary";
		props.editFile(props.id, props.file.name, props.file.text, newsum);
		setShowSum(true);
		setSum(newsum);
	}

	return (showSum) ?(
		<div className="summary">
			<div className="text-wrapper">Content Summary</div>
			<textarea className="summary-box" readOnly value={sum}/>
		</div>
	):(
		<div className="summary">
			<button onClick={generateSum}>Generate Summary</button>
		</div>
	);
}