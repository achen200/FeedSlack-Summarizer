import { useEffect, useState } from "react";

export function SummaryBox(props){
	const [showSum, setShowSum] = useState(false);
	const [sum, setSum] = useState("");

	useEffect(()=>{
		setShowSum(props.file.sum);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[props.id]);

	async function generateSum(){
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
			<button onClick={generateSum}>Generate Summary</button>
		</div>
	);
}