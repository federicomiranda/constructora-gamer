import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'
import {BiMenuAltLeft} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'

const Header = () => {
    const router = useRouter()
    const [menu, setMenu] = useState(false)

    const handleClickItemMenu = (url) => {
        setMenu(false)
        router.push(url)
    }

    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
                <BiMenuAltLeft className={styles.mobile_menu_open} onClick={() => setMenu(true)} />

                <Link href="/">
                    <a>
                        <Image src="/images/logo.png" alt="Constructora Gamer S.A." width="200" height="57" />
                    </a>
                </Link>

                <nav className={`${styles.menu} ${menu ? styles.open : null}`}>
                    <IoMdClose className={styles.mobile_menu_close} onClick={() => setMenu(false)} />
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <a href="/" onClick={(e) => {
                                e.preventDefault()
                                handleClickItemMenu('/')
                            }} className={styles.btn}>
                Home
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="/" onClick={(e) => {
                                e.preventDefault()
                                handleClickItemMenu('/quienes-somos')
                            }} className={styles.btn}>
                Quiénes somos
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="/" onClick={(e) => {
                                e.preventDefault()
                                handleClickItemMenu('/servicios')
                            }} className={styles.btn}>
                Servicios
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="/" onClick={(e) => {
                                e.preventDefault()
                                handleClickItemMenu('/equipos')
                            }} className={styles.btn}>
                Equipos
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="/" onClick={(e) => {
                                e.preventDefault()
                                handleClickItemMenu('/clientes')
                            }} className={styles.btn}>
                Clientes
                            </a>
                        </li>
                        <li className={styles.item}>
                            <a href="/" onClick={(e) => {
                                e.preventDefault()
                                handleClickItemMenu('#contacto')
                            }} className={styles.btn}>
                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )}

export default Header