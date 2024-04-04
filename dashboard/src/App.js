import './App.css';
import { SideMenu } from './components/SideMenu';
import { MainDisplay } from './components/MainDisplay';
import { TopNav } from './components/TopNav';
import { useState } from 'react';

function App() {
  const [currTitle, setCurrTitle] = useState("No File Selected");
  const [currOriginal, setOriginal] = useState("Please select a file");
	const [currSummary, setSummary] = useState("Please select a file");

  return (
    <div className="App">
	 <SideMenu setCurrTitle={setCurrTitle} setCurrOriginal={setOriginal} setCurrSummary={setSummary}/>
	 <TopNav/>
	 <MainDisplay file={currTitle} original={currOriginal} summary={currSummary}/>
    </div>
  );
}

export default App;
