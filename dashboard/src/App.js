import './App.css';
import { SideMenu } from './components/SideMenu';
import { MainDisplay } from './components/MainDisplay';
import { TopNav } from './components/TopNav';
import { useState } from 'react';

//Placeholder file
const noFile = {
	name:"No File Selected",
	text:"Please select/create a file",
	sum:"Please select/create a file"
}

/**
 * Entry point for client
 * 
 * Children: Sidemenu->(Logo, FilePopup, File),
 * TopNav, MainDisplay->(SummaryBox)
 * 
 * @returns 
 */
function App() {
	//List of files
	const [fileList, setFileList] = useState([]);
	//Current File to Display
	const [currFile, setCurrFile] = useState(noFile);
	//Current file's ID
	const [currId, setCurrId] = useState(-1); 
	//Number of tokens (used after every summary call)
	const [tokens, setTokens] = useState(10000);

	function addFile(file){
		setFileList([...fileList, file]);
	}
	
	function setFile(id){
		setCurrId(id);
		setCurrFile(fileList[id]);
	}

	function editFile(id, name, text, sum){
		const newList = [...fileList];
		newList[id] = {name:name, text:text, sum:sum};
		setFileList(newList);
	}

	function useTokens(ts){
		setTokens(tokens - ts);
	}

	return (
		<div className="App">
			<SideMenu files={fileList} setFile={setFile} addFile={addFile}/>
			<TopNav tokens={tokens}/>
			<MainDisplay file={currFile} currId={currId} editFile={editFile} setFile={setFile} useTokens={useTokens}/>
		</div>
	);
}

export default App;
