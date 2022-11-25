const Formulario2 = () => {
  return (
    <section className="datos">
      <h1>Datos proveedor</h1>
      <form className="formProveedor">
        <input className="input" type="text" placeholder="nombre" />
        <input className="input" type="text" placeholder="nit" />
        <input className="input" type="text" placeholder="direccion" />
        <input className="input" type="text" placeholder="telefono" />
        <input className="input" type="text" placeholder="correo" />
        <input className="input" type="text" placeholder="producto a comprar" />
        <input
          className="input2"
          type="text"
          placeholder="descripcion empresa y producto"
        />

        <input className="enviar" type="submit" value="enviar" />
      </form>
    </section>
  );
};
export default Formulario2;
