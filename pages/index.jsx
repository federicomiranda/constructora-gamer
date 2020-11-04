import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Constructora Gamer</title>
        <meta name="description" content="Una empresa con más de 20 años de experiencia, un referente en el rubro de la construccion, tanto en obras viales como tambien en obras civiles."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <Image src="/images/hero.png" alt="Constructora Gamer S.A." className={styles.image_hero} width="1440" height="482" />

        <div className={styles.container}>
          <article className={styles.intro}>
            <h1 className={styles.title}>Constructora Gamer</h1>
            <p className={styles.text}>Una empresa con más de 20 años de experiencia, un referente en el rubro de la construccion, tanto en obras viales como tambien en obras civiles; brindado siempre profesionalismo, calidad y mejores costos. Nuestros clientes destacan nuestra experiencia, responsabilidad y respaldo en la ejecucion de cada obra, y es por eso que confían en una empresa seria y eficiente como Constructora Gamer.</p>
          </article>
        </div>
      </section>

      <section className={styles.myv}>
        <div className={styles.myv_container}>
          <article className={styles.myv_article}>
            <h2 className={styles.myv_article_title}>Misión y visión</h2>
            <p className={styles.myv_article_text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
          </article>
        </div>
      </section>

      <section className={styles.servicios}>
        <div className={styles.servicios_container}>
          <article className={styles.servicios_article}>
            <Image src="/images/proteccion.png" alt="Protección catódiga anticorrosiva" width="141" height="141" className={styles.servicios_image} />
            <div className={styles.servicios_content}>
              <h2 className={styles.servicios_title}>PROTECCIÓN CATÓDICA ANTICORROSIVA</h2>
              <p className={styles.servicios_text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              <Link href="/">
                <a className={styles.servicios_link}>Lorem ipsum sit amet</a>
              </Link>
            </div>
          </article>
          
          <article className={styles.servicios_article}>
            <Image src="/images/ingenieria.png" alt="Ingeniería civíl y mecánica" width="131" height="131" className={styles.servicios_image} />
            <div className={styles.servicios_content}>
              <h2 className={styles.servicios_title}>INGENIERÍA CIVÍL Y MECÁNICA</h2>
              <p className={styles.servicios_text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              <Link href="/">
                <a className={styles.servicios_link}>Lorem ipsum sit amet</a>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
