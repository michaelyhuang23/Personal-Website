import Headshot from '../components/Headshot';
import Blurb from '../components/Blurb'
import Chatbox from '../components/Chatbox';
import { useState } from "react";


export default function Home() {

  const [query, setQuery] = useState("What hobbies does Michael have?");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event) {
      event.preventDefault();
      setLoading(true);
      const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
      });
      const data = await response.json();
      setResult(data.result.slice(6));
      setLoading(false);
      
  }

  return (
    <div className="mainComponent">
      <Headshot/>
      <Blurb/>
      <Chatbox query={query} setQuery={setQuery} result={result} onSubmit={onSubmit} loading={loading}/>
    </div>
  );
}
