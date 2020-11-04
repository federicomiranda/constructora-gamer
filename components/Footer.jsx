import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_container}>
      <Link href="/">
          <a>
            <Image src="/images/logo_blanco.png" alt="Constructora Gamer S.A." width="200" height="57" />
          </a>
        </Link>

        <nav>
          <ul className={styles.footer_ul}>
            <li className={styles.footer_li}>
              <Link href="/">
                <a className={styles.footer_a}>
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.footer_li}>
              <Link href="/">
                <a className={styles.footer_a}>
                  Quiénes Somos
                </a>
              </Link>
            </li>
            <li className={styles.footer_li}>
              <Link href="/">
                <a className={styles.footer_a}>
                  Servicios
                </a>
              </Link>
            </li>
            <li className={styles.footer_li}>
              <Link href="/">
                <a className={styles.footer_a}>
                  Equipos
                </a>
              </Link>
            </li>
            <li className={styles.footer_li}>
              <Link href="/">
                <a className={styles.footer_a}>
                  Clientes
                </a>
              </Link>
            </li>
            <li className={styles.footer_li}>
              <Link href="/">
                <a className={styles.footer_a}>
                  Contacto
                </a>
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  </footer>
);

export default Footer;