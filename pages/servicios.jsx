import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Servicios.module.css'

const Servicios = () => {
    return (
        <>
            <Head>
                <title>Servicios - Constructora Gamer</title>
                <meta name="description" content="Una empresa con más de 20 años de experiencia, un referente en el rubro de la construccion, tanto en obras viales como tambien en obras civiles."/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <Image src="/images/servicios-header.png" alt="Servicios" width="1920" height="346" className={styles.hero_image} />

                <article className={`container ${styles.content}`}>
                    <Image src="/images/icon_prot.png" alt="Protección catódica anticorrosiva" width="70" height="70" className={styles.icon} />

                    <div className={styles.column}>
                        <h2 className={styles.title}>PROTECCIÓN CATÓDICA ANTICORROSIVA</h2>
                        <p className={styles.text}>Maecenas dictum vestibulum fermentum. Sed efficitur mattis ante sit amet egestas. Nullam vitae placerat elit. Ut id libero mi. Nunc scelerisque leo eu felis maximus facilisis. Aenean sollicitudin quam quis mauris congue, non pulvinar tellus luctus. Donec vestibulum nibh tempor tortor iaculis pulvinar. Mauris iaculis vel ante quis fermentum. Vestibulum at ligula non odio dictum rutrum non ac dui. Aenean et bibendum dolor, ac interdum mi. Nullam dictum, ligula id eleifend varius, nibh ante sodales lorem, ac faucibus metus arcu non velit. Quisque nec blandit ex.</p>
                        <p className={styles.text}>Maecenas dictum vestibulum fermentum. Sed efficitur mattis ante sit amet egestas. Nullam vitae placerat elit. Ut id libero mi. Nunc scelerisque leo eu felis maximus facilisis. Aenean sollicitudin quam quis mauris congue, non pulvinar tellus luctus. Donec vestibulum nibh tempor tortor iaculis pulvinar. Mauris iaculis vel ante quis fermentum. Vestibulum at ligula non odio dictum rutrum non ac dui. Aenean et bibendum dolor, ac interdum mi. Nullam dictum, ligula id eleifend varius, nibh ante sodales lorem, ac faucibus metus arcu non velit. Quisque nec blandit ex.</p>
                        <p className={styles.text}>Maecenas dictum vestibulum fermentum. Sed efficitur mattis ante sit amet egestas. Nullam vitae placerat elit. Ut id libero mi. Nunc scelerisque leo eu felis maximus facilisis. Aenean sollicitudin quam quis mauris congue, non pulvinar tellus luctus. Donec vestibulum nibh tempor tortor iaculis pulvinar. Mauris iaculis vel ante quis fermentum. Vestibulum at ligula non odio dictum rutrum non ac dui. Aenean et bibendum dolor, ac interdum mi. Nullam dictum, ligula id eleifend varius, nibh ante sodales lorem, ac faucibus metus arcu non velit. Quisque nec blandit ex.</p>
                    </div>
                </article>
                
                <article className={`container ${styles.content}`}>
                    <Image src="/images/icon_ing.png" alt="Ingeniería Civil y Mecanica" width="70" height="70" className={styles.icon} />

                    <div className={styles.column}>
                        <h2 className={styles.title}>INGENIERÍA CIVÍL Y MECÁNICA</h2>
                        <p className={styles.text}>Maecenas dictum vestibulum fermentum. Sed efficitur mattis ante sit amet egestas. Nullam vitae placerat elit. Ut id libero mi. Nunc scelerisque leo eu felis maximus facilisis. Aenean sollicitudin quam quis mauris congue, non pulvinar tellus luctus. Donec vestibulum nibh tempor tortor iaculis pulvinar. Mauris iaculis vel ante quis fermentum. Vestibulum at ligula non odio dictum rutrum non ac dui. Aenean et bibendum dolor, ac interdum mi. Nullam dictum, ligula id eleifend varius, nibh ante sodales lorem, ac faucibus metus arcu non velit. Quisque nec blandit ex.</p>
                        <p className={styles.text}>Maecenas dictum vestibulum fermentum. Sed efficitur mattis ante sit amet egestas. Nullam vitae placerat elit. Ut id libero mi. Nunc scelerisque leo eu felis maximus facilisis. Aenean sollicitudin quam quis mauris congue, non pulvinar tellus luctus. Donec vestibulum nibh tempor tortor iaculis pulvinar.</p>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Servicios