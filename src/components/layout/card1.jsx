import img1 from "../../assets/img/indicaHembra.jpg";
const Card1 = () => {
  return (
    <section className="card">
      <img src={img1} className="card-img-top" alt="" />
      <section className="card-body">
        <h5 className="card-title">Indica</h5>
        <p className="card-text">
          Indica generalmente conocida por su alto nivel de relajación (piensa
          en las vibraciones de estar sentado en el sofá) y, médicamente, puede
          ayudar a las personas con náuseas, ansiedad y dolor agudo.
        </p>
      </section>
    </section>
  );
};
export default Card1;
