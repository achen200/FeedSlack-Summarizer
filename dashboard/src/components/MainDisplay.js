import "./style.css";

export const MainDisplay = (props) => {
  return (
    <div className="main-display"> 
	  <div>{props.file}</div>
	  <div className="summary">
        <div className="text-wrapper">Content Summary</div>
        <textarea className="summary-box" readOnly value={props.summary}/>
      </div>
      <div className="original">
        <div className="text-wrapper">Original Content</div>
        <textarea className="original-box" readOnly value={props.original}/>
      </div>
    </div>
  );
};