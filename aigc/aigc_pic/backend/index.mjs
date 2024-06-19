import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config({
    path:'.env'
})

const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
    baseURL:'https://api.gptsapi.net/v1'
});

const main = async () => {
    const response = await client.images.generate({
        model: "dall-e-3",
        prompt: "A spaceship flying through the universe",
        n: 1,
        size: "1024x1024",
    })
    console.log(response.data)
}

main();

