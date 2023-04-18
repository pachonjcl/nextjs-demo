import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link href="jokes">Read Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
