import Link from 'next/link';
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; FIZJOSAP 2023</p>
            <p>
                <Link href='/'>Home</Link>
            </p>
            <p>
                <Link href='/about'>About</Link>
            </p>
            <p>
                <Link href='/events'>Events</Link>
            </p>
        </footer>
    )
}
