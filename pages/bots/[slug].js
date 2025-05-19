import { useRouter } from 'next/router'

const sampleData = {
  samantha: {
    name: "Samantha",
    image: "https://example.com/samantha.jpg",
    voice: "https://example.com/samantha_tease01.mp3",
    fanvue: "https://fanvue.com/samantha"
  }
};

export default function BotProfile() {
  const { query } = useRouter();
  const bot = sampleData[query.slug];

  if (!bot) return <p>Loading...</p>;

  return (
    <main>
      <h1>{bot.name}</h1>
      <img src={bot.image} alt={bot.name} style={{ maxWidth: "300px" }} />
      <audio controls src={bot.voice}></audio>
      <br />
      <a href={bot.fanvue} target="_blank" rel="noreferrer">Visit Fanvue Profile</a>
    </main>
  );
}
