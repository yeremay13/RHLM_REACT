import React, { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import '../assets/styles/Foro.css';
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

function Foro() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [nuevaPublicacion, setNuevaPublicacion] = useState({ categoria: '', titulo: '', contenido: '', autor: '' });
  const [edicionPublicacion, setEdicionPublicacion] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "publicaciones"), (snapshot) => {
      const publicacionesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      console.log("Datos de publicaciones:", publicacionesData); // Log para verificar datos
      setPublicaciones(publicacionesData);
    });

    return () => unsubscribe();
  }, []);

  const handleChangeNueva = (event) => {
    const { name, value } = event.target;
    setNuevaPublicacion(prevState => ({ ...prevState, [name]: value }));
  };

  const handleChangeEdicion = (event) => {
    const { name, value } = event.target;
    setEdicionPublicacion(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmitNueva = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "publicaciones"), nuevaPublicacion);
      console.log("Publicación añadida:", nuevaPublicacion); // Log para verificar la adición
      setNuevaPublicacion({ categoria: '', titulo: '', contenido: '', autor: '' });
    } catch (e) {
      console.error("Error adding document: ", e); // Log para verificar errores
    }
  };

  const handleSubmitEdicion = async (event) => {
    event.preventDefault();
    try {
      const docRef = doc(db, "publicaciones", edicionPublicacion.id);
      await updateDoc(docRef, edicionPublicacion);
      console.log("Publicación actualizada:", edicionPublicacion); // Log para verificar la actualización
      setEdicionPublicacion(null);
    } catch (e) {
      console.error("Error updating document: ", e); // Log para verificar errores
    }
  };

  const borrarPublicacion = async (id) => {
    try {
      await deleteDoc(doc(db, "publicaciones", id));
      console.log("Publicación borrada con ID:", id); // Log para verificar la eliminación
      setPublicaciones(publicaciones.filter(publicacion => publicacion.id !== id));
    } catch (e) {
      console.error("Error deleting document: ", e); // Log para verificar errores
    }
  };

  const activarEdicion = (publicacion) => {
    setEdicionPublicacion(publicacion);
  };

  return (
    <div>
      <Header />
      <div className="foro-container">
        <h1>Foro de Anuel AA</h1>
        <form onSubmit={handleSubmitNueva} className="nueva-publicacion-form">
          <label>
            Título:
            <input type="text" name="titulo" value={nuevaPublicacion.titulo} onChange={handleChangeNueva} required />
          </label>
          <label>
            Contenido:
            <textarea name="contenido" value={nuevaPublicacion.contenido} onChange={handleChangeNueva} required />
          </label>
          <label>
            Autor:
            <input type="text" name="autor" value={nuevaPublicacion.autor} onChange={handleChangeNueva} required />
          </label>
          <button type="submit">Añadir Publicación</button>
        </form>
        <ul className="publicaciones-list">
          {publicaciones.map(publicacion => (
            <li key={publicacion.id} className="publicacion-item">
              <h2 className="publicacion-titulo">{publicacion.titulo}</h2>
              <p className="publicacion-contenido">{publicacion.contenido}</p>
              <p className="publicacion-autor">Autor: {publicacion.autor}</p>
              <button className="boton-actualizar" onClick={() => activarEdicion(publicacion)}>Editar</button>
              <button className="boton-borrar" onClick={() => borrarPublicacion(publicacion.id)}>Borrar</button>
              {edicionPublicacion && edicionPublicacion.id === publicacion.id && (
                <form onSubmit={handleSubmitEdicion} className="edicion-publicacion-form">
                  <label>
                    Nuevo Título:
                    <input type="text" name="titulo" value={edicionPublicacion.titulo} onChange={handleChangeEdicion} required />
                  </label>
                  <label>
                    Nuevo Contenido:
                    <textarea name="contenido" value={edicionPublicacion.contenido} onChange={handleChangeEdicion} required />
                  </label>
                  <button type="submit">Guardar Cambios</button>
                </form>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Foro;
