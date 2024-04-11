import OpenAI from 'openai';
import express from 'express';
import cors from 'cors';

const openai = new OpenAI({ apiKey:"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"});

const port = 3080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/', async (req, res)=>{
	// const response = await openai.chat.completions.create({
	// 	messages:[{"role":"system", "content":"You're a helpful assistant"}],
	// 	model: "gpt-3.5-turbo"
	// });
	// console.log(response.choices[0].message);
	// res.json({
	// 	data:response.choices[0]
	// });
	const {message} = req.body;
	console.log(req.body)
	console.log(message);
	res.json({
		data:"Something very important"
	})
	//response.choices[0]/message.content
	//response.usage.total_tokens
});

app.listen(port, ()=>{
	console.log(`Example app listening at port:${port}`)
})
