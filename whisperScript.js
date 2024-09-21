// private key OKnZjjk0Ww2fQCiY7nW4hmYXhh6aJJog

// npm install --save openai or yarn add openai
import OpenAI from "openai";
import fs from "fs";

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY",
  baseURL: "https://api.lemonfox.ai/v1",
});

async function main() {
  const transcription = await openai.audio.transcriptions.create({
    file: fs.createReadStream(audioUrl),
    model: "whisper-1",
  });

  console.log(transcription.text);
}
main();