import express from 'express';
import { google } from "googleapis";
import { getGoogleOAuthURL } from './getGoogleUrl.js';
const app = express();
const port = 3080;

console.log(getGoogleOAuthURL());



// const auth = new google.auth.GoogleAuth({
// 	keyFilename: './authKey.json',
// 	scopes: ['https://www.googleapis.com/auth/documents']
// });

// const oauth2Client = new google.auth.OAuth2(
// 	CLIENT_ID,
// 	CLIENT_SECRET,
// 	"/"
//   );


// app.listen(port, ()=>{
//     console.log(`Example app listening at port ${port}`);
// })

// const url = oauth2Client.generateAuthUrl({
// 	access_typeL:'offline',
// 	scopes: ['https://www.googleapis.com/auth/documents']
// })
// const {tokens} = await oauth2Client.getToken()
// oauth2Client.setCredentials({access_token:tokens});

// const client = await google.docs({
// 	version:"v1",
// 	auth:oauth2Client
// })
// const response = await client.documents.get({
// 	documentId:"1DDT_4yroSxYeY_WNF9XkGnPIbkG0jFrIZ4pA-sfp02w"
// });