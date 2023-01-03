import Link from "next/link";
import styles from '../styles/Header.module.css';

export default function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/' legacyBehavior>
                    <a>FIZJOSAP</a>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/events" legacyBehavior>
                                <a>Events</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
