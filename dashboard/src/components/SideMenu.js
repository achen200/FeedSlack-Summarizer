import "./style.css";
import { Logo } from "./Logo";
import { File } from "./File";
import { FilePopup } from "./modal/FilePopup";

/**
 * Container that includes the documents and 
 * file upload popup prompt.
 * 
 * Hierarchy: App -> Sidemenu
 * 
 * Children: File, FilePopup
 * 
 * @param {Object} props 
 * @param {Function} props.setFile
 * @param {Function} props.addFile 
 * @returns 
 */
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