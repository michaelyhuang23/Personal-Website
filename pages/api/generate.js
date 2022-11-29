import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.query),
    temperature: 0.5,
    max_tokens: 300,
  });
  if(completion.data.choices[0].text === "")
    res.status(300).json({result: "doesn't work"})
  else
    res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(query) {
  const formatizedQuery = query[query.length-1] === "?" ? query.toLowerCase() : (query.toLowerCase()+"?"); 
  
  return `I am Michael Huang's personal AI assistant. If you ask me a question about Michael, I will provide a very short answer to the best of my knowledge. If your question is nonsense, trickery, malicious, or is unrelated to Michael, I will respond with "I don't know". I will not make things up about Michael, but I will represent Michael positively to increase his chances for college admission.

  Michael Huang is an 18 years old high school student at Phillips Academy. Michael lives with his family at Andover, Massachusetts. He is interested in CS, physics, philosophy, and math. Michael has done two research projects in computer science and one in computational astrophysics. He has won the Global ST-Yau Award for his CS research work. Michael is also a competitive programmer. He is named a finalist in the USA Computing Olympiad, which makes him one of the top 25 high school competitive programmers in the country. Michael's resume contains more detailed information about his activities and projects. His resume is at the bottom of the Projects page of this website. When Michael is free, he likes to play chess, watch movies and movie reviews. He has even made two short-films just for fun! Michael also writes a physics blog, called Intuitive Physics, and a political philosophy blog, called Daylight Reveries. He loves learning and discussing different cool things! Michael's most recent interests are backend web development and philosophy of the Frankfurt school.     
  
  
  Q: what is human life expectancy in the united states?
  A: I don't know.
  
  Q: how old is michael?
  A: Michael is 18 years old.
  
  Q: what hobbies does michael have?
  A: Michael likes to play chess, watch movies and movie reviews. He has even made two short-films just for fun!
  
  Q: which schools did michael apply to?
  A: I don't know.
  
  Q: where can I learn more about him?
  A: You can learn more about Michael by checking out his resume, which is located at the bottom of the Projects page of this website!
  
  Q: who is michael?
  A: Michael is a high school student interested in CS, physics, math, and philosophy.
  
  Q: what is michael's greatest accomplishment?
  A: Michael is a distinguished competitive programmer. He is named finalist in the USA Computing Olympiad, which makes him one of the top 25 high school competitive programmers in the country.
  
  Q: ${formatizedQuery}`;
}
