import express from 'express';
import { google } from "googleapis";

const CLIENT_ID = '350552274341-f9up5g3hvo3646ll75ae5a2rh7f7q6jc.apps.googleusercontent.com';
const CLIENT_SECRET = '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';

const app = express();
const port = 3080;


// const auth = new google.auth.GoogleAuth({
// 	keyFilename: './authKey.json',
// 	scopes: ['https://www.googleapis.com/auth/documents']
// });

const oauth2Client = new google.auth.OAuth2(
	CLIENT_ID,
	CLIENT_SECRET,
	"/"
  );


app.listen(port, ()=>{
    console.log(`Example app listening at port ${port}`);
})

const url = oauth2Client.generateAuthUrl({
	access_typeL:'offline',
	scopes: ['https://www.googleapis.com/auth/documents']
})
const {tokens} = await oauth2Client.getToken()
oauth2Client.setCredentials({access_token:tokens});

// const client = await google.docs({
// 	version:"v1",
// 	auth:oauth2Client
// })
// const response = await client.documents.get({
// 	documentId:"1DDT_4yroSxYeY_WNF9XkGnPIbkG0jFrIZ4pA-sfp02w"
// });