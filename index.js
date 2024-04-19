import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';

const openai = new OpenAI({ apiKey:"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"});

const port = 3080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

app.post('/', async (req, res)=>{
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

app.listen(port, ()=>{
	console.log(`Example app listening at port:${port}`)
})
