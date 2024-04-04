import "./style.css";
import { Logo } from "./Logo";
import { File } from "./File";
import { useState } from "react";
import { FilePopup } from "./modal/FilePopup";

export const SideMenu = (props) => {
	const [fileList, setFileList] = useState(["file6.md", "example5.mp4", "example4.docx", "sample3.pdf"]);
	const [newOriginal, setNewOriginal] = useState("Default Original");

	function appendFile(newFile, original){
		setFileList([...fileList, newFile]);
		setNewOriginal(original);
	}
	
  return (
    <div className="side-menu">
      <Logo/>
      <div className="my-documents">
        <div className="file-header">
          <div className="text-wrapper">Documents</div>
        </div>
			{fileList.map((iname,id) => {
				return <File name={iname} setTitle={props.setCurrTitle} 
							setCurrSummary={props.setCurrSummary} 
							setCurrOriginal={props.setCurrOriginal}
							summary="No summary yet" 			
							original={newOriginal} key={id}/>
			})}
			<FilePopup addNew={appendFile}/>
      </div>
    </div>
  );
};