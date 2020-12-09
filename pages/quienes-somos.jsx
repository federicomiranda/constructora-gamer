import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/QuienesSomos.module.css'

const QuienesSomos = () => {
    return (
        <>
            <Head>
                <title>Quiénes somos - Constructora Gamer</title>
                <meta name="description" content="Una empresa con más de 20 años de experiencia, un referente en el rubro de la construccion, tanto en obras viales como tambien en obras civiles."/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <Image src="/images/quienes-somos-header.png" alt="Quiénes somos" width="1920" height="346" className={styles.hero_image} />
            </section>

            <section className={`container ${styles.quienes_somos}`}>
                <Image src="/images/quienes_somos.png" alt="Quiénes somos" width="450" height="370" className={styles.qs_image} />
                <article className={styles.qs_article}>
                    <h1 className={styles.qs_articleTitle}>Quiénes somos</h1>
                    <p className={styles.qs_articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio id corrupti ipsam, sit saepe esse accusamus amet cum nisi vitae recusandae, cupiditate quas rem animi illum pariatur non eaque!</p>
                    <p className={styles.qs_articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio id corrupti ipsam, sit saepe esse accusamus amet cum nisi vitae recusandae, cupiditate quas rem animi illum pariatur non eaque!</p>
                </article>
            </section>

            <section className={`container ${styles.nuestra_historia}`}>
                <Image src="/images/nuestra_historia.png" alt="Nuestra historia" width="600" height="246" className={styles.nh_image} />
                <article className={styles.nh_article}>
                    <h1 className={styles.nh_articleTitle}>Nuestra historia</h1>
                    <p className={styles.nh_articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio id corrupti ipsam, sit saepe esse accusamus amet cum nisi vitae recusandae, cupiditate quas rem animi illum pariatur non eaque!</p>
                    <p className={styles.nh_articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa distinctio id corrupti ipsam, sit saepe esse accusamus amet cum nisi vitae recusandae, cupiditate quas rem animi illum pariatur non eaque!</p>
                </article>
            </section>
        </>
    )
}

export default QuienesSomos