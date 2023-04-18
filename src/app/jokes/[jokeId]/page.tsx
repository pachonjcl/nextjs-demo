import { PrismaClient } from "@prisma/client";
import Link from "next/link";

async function JokeDetail({ params }: any) {
    const prisma = new PrismaClient();
    const joke = await prisma.joke.findFirst({
        where: {
            id: params.jokeId,
        }
    });

    return (
        <div>
          <p>Here is your hilarious joke:</p>
          <p>{joke?.content}</p>
          <Link href={`/jokes/${joke?.id}`}>{joke?.name} Permalink</Link>
        </div>
      );
}

export default JokeDetail;
