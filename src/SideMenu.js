import "./style.css";
import { Logo } from "./Logo";
import { File } from "./File";

export const SideMenu = () => {
  return (
    <div className="side-menu">
      <Logo/>
      <div className="my-documents">
        <div className="file-header">
          <div className="text-wrapper">Documents</div>
        </div>
        <File name="file6.md"/>
        <File name="example5.mp4"/>
        <File name="example4.docx"/>
        <File name="sample3.pdf"/>
        <File name="file1.txt"/>
		<File name="file2.txt"/>
      </div>
    </div>
  );
};