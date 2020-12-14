import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Equipos.module.css'

const Equipos = () => {
    return (
        <>
            <Head>
                <title>Equipos - Constructora Gamer</title>
                <meta name="description" content="Una empresa con más de 20 años de experiencia, un referente en el rubro de la construccion, tanto en obras viales como tambien en obras civiles."/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <Image src="/images/equipos-header.png" alt="Equipos" width="1920" height="346" className={styles.hero_image} />
            </section>

            <section className={`container ${styles.equipos}`}>
                <h2 className={styles.title}>Equipos</h2>

                <p className={styles.text}>Nuestra flota de equipos y maquinarias se compone tanto por retroexcavadoras, retropalas, motoniveladoras, compactadores, minipalas, etc., como así también por dragas, camiones, acoplados, vehículos y herramientas de avanzada.</p>

                <ul className={styles.grid}>
                    <li className={styles.item1}>
                        <Image src="/images/grid1.jpeg" alt="Equipos" width="600" height="400" className={styles.gridItem} />
                    </li>
                    <li className={styles.item2}>
                        <Image src="/images/grid2.jpg" alt="Equipos" width="620" height="400" className={styles.gridItem} />
                    </li>
                    <li className={styles.item3}>
                        <Image src="/images/grid3.jpg" alt="Equipos" width="860" height="400" className={styles.gridItem} />
                    </li>
                    <li className={styles.item4}>
                        <Image src="/images/grid4.jpg" alt="Equipos" width="360" height="400" className={styles.gridItem} />
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Equipos