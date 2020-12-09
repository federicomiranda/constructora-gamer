import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Clientes.module.css'

const Clientes = () => {
    return (
        <>
            <Head>
                <title>Clientes - Constructora Gamer</title>
                <meta name="description" content="Una empresa con más de 20 años de experiencia, un referente en el rubro de la construccion, tanto en obras viales como tambien en obras civiles."/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <Image src="/images/clientes-header.png" alt="Clientes" width="1920" height="346" className={styles.hero_image} />
            </section>

            <section className={`container ${styles.clientes}`}>
                <h2 className={styles.title}>Nuestros Clientes</h2>

                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eum? Cupiditate eius laudantium libero esse commodi rem repellat ea. Id quis illo aut sequi dolore repellat provident maiores expedita recusandae?</p>

                <ul className={styles.grid}>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                    <li className={styles.gridItem}>
                        <img src="https://placehold.it/150x80" alt="Clientes" />
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Clientes