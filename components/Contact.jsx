import { useState } from 'react'
import emailjs from 'emailjs-com'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [consulta, setConsulta] = useState('')
    const [message, setMessage] = useState('')
    const [loader, setLoader] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault()

        if (nombre && apellido && telefono && email && consulta) {
            setLoader(true)
            emailjs.sendForm('service_s1fhxzv', 'template_7g40nav', e.target, 'user_0o5R4njEIMJHsoqPU8Iay')
                .then(() => {
                    setLoader(false)
                    setMessage('Su consulta fue enviada correctamente.')
                    e.target.reset()
                }, () => {
                    setLoader(false)
                    setMessage('Hubo un error al enviar su consulta. Por favor intente más tarde.')
                })
        } else {
            setMessage('Todos los campos son obligatorios.')
        }
    }

    return (
        <section className={styles.contacto} id="contacto">
            <div className={`container ${styles.contacto_container}`}>
                <h2 className={styles.contacto_title}>Contactanos</h2>
                <p className={styles.contacto_text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>

                <form className={styles.contacto_form} onSubmit={sendEmail}>
                    <label className={styles.contacto_label} htmlFor="nombre">Nombre:</label>
                    <input
                        id="nombre"
                        className={styles.contacto_input}
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <label className={styles.contacto_label} htmlFor="apellido">Apellido:</label>
                    <input
                        id="apellido"
                        className={styles.contacto_input}
                        type="text"
                        name="apellido"
                        placeholder="Apellido"
                        onChange={(e) => setApellido(e.target.value)}
                    />

                    <label className={styles.contacto_label} htmlFor="tel">Teléfono:</label>
                    <input
                        id="tel"
                        className={styles.contacto_input}
                        type="tel"
                        name="tel"
                        placeholder="Teléfono"
                        onChange={(e) => setTelefono(e.target.value)}
                    />

                    <label className={styles.contacto_label} htmlFor="email">Email:</label>
                    <input
                        id="email"
                        className={styles.contacto_input}
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className={styles.contacto_label} htmlFor="consulta">Consulta:</label>
                    <textarea
                        id="consulta"
                        className={styles.contacto_textarea}
                        name="consulta"
                        cols="30"
                        rows="10"
                        placeholder="Consulta"
                        onChange={(e) => setConsulta(e.target.value)}
                    />

                    <button
                        className={styles.contacto_submit}
                        type="submit"
                    >
                      Enviar consulta
                    </button>

                    {
                        loader
                            ? <p className={styles.contacto_message}>Enviando...</p>
                            : message
                                ? <p className={styles.contacto_message}>{message}</p>
                                : ''
                    }
                </form>
            </div>
        </section>
    )
}

export default Contact
