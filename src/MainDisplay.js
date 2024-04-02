import "./style.css";

export const MainDisplay = () => {
  return (
    <div className="main-display">
      <div className="original">
        <div className="text-wrapper">Original Content</div>
        <div className="original-text">
          <p className="div">
            This is an example of what the original content would look like, there will obviously be a lot more text in
            here and if there is too much text, then the frame should enable scrolling. <br />
            <br />
            The original content for now would only support text summaries to make the prototype a lot simpler, but in
            the future, the original content may include videos or audio files. In these cases, the content summary will
            still only be text.
          </p>
        </div>
      </div>
      <div className="summary">
        <div className="text-wrapper">Content Summary</div>
        <div className="summary-box">
          <p className="div">This is an example of what summary content would look like...</p>
        </div>
      </div>
    </div>
  );
};