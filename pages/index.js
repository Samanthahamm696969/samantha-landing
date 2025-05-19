import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to Samantha & Co</h1>
      <p>This is your AI bot empire landing page.</p>
      <Link href="/bots/samantha">Go to Samantha's Page</Link>
    </main>
  );
}
