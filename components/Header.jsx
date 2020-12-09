import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

const Header = () => (
    <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
            <Link href="/">
                <a>
                    <Image src="/images/logo.png" alt="Constructora Gamer S.A." width="200" height="57" />
                </a>
            </Link>

            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/">
                            <a className={styles.btn}>
                Home
                            </a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/quienes-somos">
                            <a className={styles.btn}>
                Quiénes somos
                            </a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/servicios">
                            <a className={styles.btn}>
                Servicios
                            </a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/equipos">
                            <a className={styles.btn}>
                Equipos
                            </a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/clientes">
                            <a className={styles.btn}>
                Clientes
                            </a>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="#contacto">
                            <a className={styles.btn}>
                Contacto
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

export default Header