import React from 'react'
import img1 from "../../assets/img/indicaHembra.jpg";
const Card1 = () => {
  return (
    <section className="card">
          <img src={img1} className="card-img-top" alt="" />
          <section className="card-body">
            <h5 className="card-title">Indica</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </section>
        </section>
  )
}
export default Card1;