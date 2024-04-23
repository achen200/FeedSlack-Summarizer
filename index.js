import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import {parseFile} from './parser.js';

dotenv.config();

const openai = new OpenAI({ apiKey:process.env.OPEN_AI_API_KEY});
const port = 3080;
const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.post('/generate-summary', async (req, res)=>{
	const { message } = req.body;
	await timeout(1000);
	res.json({
		data:message,
		tokens:"100"
	})
	// const prompt = "Summarize: " + message.replace(/(\r\n|\n|\r)/gm, "");
	
	// const response = await openai.chat.completions.create({
	// 	messages:[{"role":"system", "content":prompt}],
	// 	model: "gpt-3.5-turbo"
	// });
	// console.log(response.choices[0].message.content);
	// res.json({
	// 	data:response.choices[0].message.content,
	// 	tokens:response.usage.total_tokens
	// });
});
app.post('/upload', upload.single("file"), async(req, res)=>{	
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
})

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}