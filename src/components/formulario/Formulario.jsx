import React, { useRef, useState, useEffect } from 'react';

const Formulario = () => {
  const nombreRef = useRef();
  const emailRef = useRef();
  const [formData, setFormData] = useState({ nombre: '', email: '' });  
  // este estado es para almacenar los datos del formulario, aqui nombre e email 
  // son los campos del formulario se colocan como propiedades del objeto formData

  useEffect(() => {
    // Se ejecuta una sola vez al montar el componente
    console.log('Formulario montado');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = nombreRef.current.value;
    const email = emailRef.current.value;

    setFormData({ nombre, email }); // Actualiza el estado con los datos del formulario 

    // los /n son para saltar de linea en el alert
    alert(`Datos ingresados:\nNombre: ${nombre}\nEmail: ${email}`); // Muestra un mensaje con los datos ingresados
  };

  // Estilos en objeto
  const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  
        width: '400px',
        margin: '0 auto',
        padding: '35px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: ' 0 10px 20px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    label: {
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <label style={styles.label}>Nombre:</label>
        <input type="text" ref={nombreRef} style={styles.input} required />

        <label style={styles.label}>Email:</label>
        <input type="email" ref={emailRef} style={styles.input} required />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Formulario;
