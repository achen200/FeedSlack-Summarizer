/**
 * Contains server implementation that handles file uploads
 * and summary generation. Depends on OpenAI API to generate
 * summaries.
 * 
 * @author Anthony Chen <anthonychen2002@gmail.com>
 * Creation Date - 4/20/2024
 */
import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import {parseFile} from './parser.js';

//Setup server
dotenv.config();
const openai = new OpenAI({ apiKey:process.env.OPEN_AI_API_KEY});
const port = 3080;
const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Handle client summary generation post request
app.post('/generate-summary', async (req, res)=>{
	//Prepare contents for OpenAI API call 
	// const { message } = req.body; 
	// const prompt = "Summarize: " + message.replace(/(\r\n|\n|\r)/gm, "");
	// const response = await openai.chat.completions.create({
	// 	messages:[{"role":"system", "content":prompt}],
	// 	model: "gpt-3.5-turbo"
	// });
	// //Response
	// res.json({
	// 	data:response.choices[0].message.content,
	// 	tokens:response.usage.total_tokens
	// });
	await timeout(2000);
	res.json({
		data:req.body.message,
		tokens:100
	});
	
});
//Handle client upload post request
app.post('/upload', upload.single("file"), async(req, res)=>{	
	//Respond with extracted text
	const text = await parseFile(req.file.buffer, req.body.filename);
	res.json({
		data:{
			name: req.body.filename,
			text: text,
			sum: null
		}
	})
});

app.listen(port, ()=>{
	console.log(`Listening at port:${port}`)
});

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}