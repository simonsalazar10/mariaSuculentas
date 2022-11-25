import img2 from "../../assets/img/sativaHembra.jpg";
const Card2 = () => {
  return (
    <section className="card">
      <img src={img2} className="card-img-top" alt="" />
      <section className="card-body">
        <h5 className="card-title">Sativa</h5>
        <p className="card-text">
          El efecto de la variedad Sativa suele describirse como
          psicoestimulante, y te sirve para activarte (coger mas energias).
        </p>
      </section>
    </section>
  );
};
export default Card2;
