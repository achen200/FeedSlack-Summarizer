import './App.css';
import { SideMenu } from './components/SideMenu';
import { MainDisplay } from './components/MainDisplay';
import { TopNav } from './components/TopNav';
import { useState } from 'react';

const noFile = {
	name:"No File Selected",
	text:"Please select/create a file",
	sum:"Please select/create a file"
}

function App() {
	const [fileList, setFileList] = useState([]);
	const [currFile, setCurrFile] = useState(noFile);
	const [currId, setCurrId] = useState(-1);

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

	return (
		<div className="App">
			<SideMenu files={fileList} setFile={setFile} addFile={addFile}/>
			<TopNav/>
			<MainDisplay file={currFile} currId={currId} editFile={editFile}/>
		</div>
	);
}

export default App;
