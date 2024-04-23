import "./style.css";
import { Logo } from "./Logo";
import { File } from "./File";
import { FilePopup } from "./modal/FilePopup";

export function SideMenu(props){
  return (
    <div className="side-menu">
      <Logo/>
      <div className="my-documents">
        <div className="file-header">
          <div className="text-wrapper">Documents</div>
        </div>
			{props.files.map((file, key)=>{
				return <File name={file.name} setFile={props.setFile} key={key} id={key}/>
			})}
			<FilePopup addNew={props.addFile}/>
      </div>
    </div>
  );
};