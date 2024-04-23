## File Structure 
- Server entry point (in progress) `/index.js` 
- Client entry point: `/dashboard/App.js` 
  - Client components: `/dashboard/src/components/*`
    - Note: all component styling done in `components/style.css` and `component/modal/Popups.css`

## Running
Install dependencies with `npm install` in both root and `/dashboard` directories (call twice).

To run client: `npm start` in `/dashboard` directory
To test server: `node index.js` in root 

## Completed
#### Functionality and Architecture
- Local file uploading
- Client server separation for uploading and API handling
- Summaries from openAI API
- Video/Audio upload & transcription with AssemblyAI
- Duplicate upload prevention measures for video/audios
#### Visuals
- Stylized upload menu to match dashboard theme in `FilePopup.js`
- Align document items in `SideMenu.js`
- Hidden Summary Box until summary generated

##  Incompletes
#### High Priority
- Logo  
- Duplicate prevention for all files
- Visible uploading/transcription/summarization progress on frontend 
- Make server alerts appear in browser (error handling)
#### Low Priority
- Profile option
-  Token count/limitations