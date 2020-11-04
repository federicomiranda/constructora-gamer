import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if(nombre && apellido && telefono && email && consulta) {
      setLoader(true);
      emailjs.sendForm('service_s1fhxzv', 'template_7g40nav', e.target, 'user_0o5R4njEIMJHsoqPU8Iay')
        .then(() => {
          setLoader(false);
          setMessage("Su consulta fue enviada correctamente.");
          e.target.reset();
        }, () => {
          setLoader(false);
          setMessage("Hubo un error al enviar su consulta. Por favor intente más tarde.");
        });
    } else {
      setMessage("Todos los campos son obligatorios.");
    }
  }

  return (
    <section className={styles.contacto}>
      <div className={styles.contacto_container}>
        <h2 className={styles.contacto_title}>Contactanos</h2>
        <p className={styles.contacto_text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>

        <form className={styles.contacto_form} onSubmit={sendEmail}>
          <input 
            className={styles.contacto_input} 
            type="text" 
            name="nombre" 
            placeholder="Nombre"  
            onChange={(e) => setNombre(e.target.value)}   
          />

          <input 
            className={styles.contacto_input} 
            type="text" 
            name="apellido" 
            placeholder="Apellido"  
            onChange={(e) => setApellido(e.target.value)} 
          />

          <input 
            className={styles.contacto_input} 
            type="tel" 
            name="tel" 
            placeholder="Teléfono"  
            onChange={(e) => setTelefono(e.target.value)} 
          />

          <input 
            className={styles.contacto_input} 
            type="email" 
            name="email" 
            placeholder="E-mail" 
            onChange={(e) => setEmail(e.target.value)} 
          />

          <textarea 
            className={styles.contacto_textarea} 
            name="consulta" 
            cols="30" 
            rows="10" 
            placeholder="Consulta" 
            onChange={(e) => setConsulta(e.target.value)} 
          ></textarea>

          <button 
            className={styles.contacto_submit} 
            type="submit"
          >
            Enviar consulta
          </button>

          {   
              loader ? 
              <p className={styles.contacto_message}>Enviando...</p> : 
              message ? 
              <p className={styles.contacto_message}>{message}</p> :
              '' 
          }
        </form>
      </div>
    </section>
  )
}

export default Contact;