import { PrismaClient } from "@prisma/client";
import Link from "next/link";

async function JokeContent() {
  const prisma = new PrismaClient();
  const count = await prisma.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await prisma.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  if (!randomJoke) {
    throw new Response("No random joke found", {
      status: 404,
    });
  }
  return (
    <div>
      <p>Here is a random joke:</p>
      <p>{randomJoke.content}</p>
      <Link href={`jokes/${randomJoke.id}`}>
        {randomJoke.name} Permalink
      </Link>
    </div>
  )
}

export default JokeContent;
