## File Structure 
- Server entry point (in progress) `/index.js` 
- Client entry point: `/dashboard/App.js` 
  - Client components: `/dashboard/src/components/*`
    - Note: all component styling done in `components/style.css` and `component/modal/Popups.css`

## Running
Install dependencies with `npm install` in both root and `/dashboard` directories (call twice).

To run client: `npm start` in `/dashboard` directory
To test server: `node index.js` in root 
  
##  Incompletes
High Priority
- Implement google drive API request in `FilePopup.js` (currently testing drive API in `/index.js`)
- Connect google drive output to OpenAI API
- Stylize `FilePopup.js` and rest of dashboard
- Logo
  
Low Priority
- Video transcription
- Profile option
- Local uploads