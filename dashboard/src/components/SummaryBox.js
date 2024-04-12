import { useEffect, useState } from "react";

export function SummaryBox(props){
	const [showSum, setShowSum] = useState(false);
	const [sum, setSum] = useState("");
	const [disabled, setDisabled] = useState(false);

	useEffect(()=>{
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

		const response = await fetch("http://localhost:3080/",{
			method:"POST",
			headers:{
				"Content-Type":"application/json",
			},
			body:JSON.stringify({
				message:props.file.text
			})
		});
		const newsum = await response.json();
		props.editFile(props.id, props.file.name, props.file.text, newsum.data);
		console.log(`Tokens used: ${newsum.tokens}`);
		
		//TODO: Bug while generating summary
		setDisabled(false);	
		setShowSum(true);
		setSum(newsum.data);
	}

	return (showSum) ?(
		<div className="summary">
			<div className="text-wrapper">Content Summary</div>
			<textarea className="summary-box" readOnly value={sum}/>
		</div>
	):(
		<div className="summary">
			<button onClick={generateSum} disabled={disabled}>{disabled?"Generating...":"Generate Summary"}
			</button>
		</div>
	);
}