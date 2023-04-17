import { PrismaClient } from "@prisma/client";
import styles from './layout.module.css'
import Link from "next/link";

export default async function Jokes({ children }: { children: any }) {
    const prisma = new PrismaClient();
    const jokes = await prisma.joke.findMany();

    return (
        <div className={styles['jokes-layout']}>
            <header className={styles['jokes-header']}>
                <div className={styles['container']}>
                    <h1 className={styles['home-link']}>
                        <span className={styles['logo']}>
                            🤪
                        </span>
                        <span className={styles['logo-medium']}>
                            J🤪KES
                        </span>
                    </h1>
                </div>
            </header>
            <main className={styles['jokes-main']}>
                <div className={styles['container']}>
                    <div className={styles['jokes-list']}>
                        <Link href="/jokes">Get a random joke</Link>
                        <p>Here are a few more jokes to check out:</p>
                        <ul>
                            {jokes.map((joke: any) => (
                                <li key={joke.id}>
                                    {joke.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles['jokes-outlet']}>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
