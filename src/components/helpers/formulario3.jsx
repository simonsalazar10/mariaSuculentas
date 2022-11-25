const Formulario3 = () => {
  return (
    <section className="datos">
      <h1>Datos de la planta</h1>
      <form className="formCliente">
        <input className="input" type="text" placeholder="nombre" />
        <input className="input" type="text" placeholder="sexo(hembra/macho)" />
        <input className="input" type="text" placeholder="referencia" />
        <input className="input" type="text" placeholder="tamaño" />
        <input className="input" type="text" placeholder="cantidad" />
        <input className="input2" type="text" placeholder="descripcion" />

        <input className="enviar" type="submit" value="enviar" />
      </form>
    </section>
  );
};
export default Formulario3;
