const Formulario1 = () => {
  return (
    <section className="datos">
      <h1>Datos del cliente</h1>
      <form className="formCliente">
        <input className="input" type="text" placeholder="nombre" />
        <input className="input" type="text" placeholder="documento" />
        <input className="input" type="text" placeholder="correo" />
        <input className="input" type="text" placeholder="direccion" />
        <input className="input" type="text" placeholder="barrio" />
        <input className="input" type="text" placeholder="telefono" />

        <input className="enviar" type="submit" value="Enviar" />
      </form>
    </section>
  );
};
export default Formulario1;
