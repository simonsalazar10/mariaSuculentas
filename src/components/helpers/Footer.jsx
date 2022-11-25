const Footer = () => {
  return (
    <footer class="footer">
      <section class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> Maria suculentas SAS</span> Fumese uno y a volar bien chimba
          careloquitos, vida solo hay una y hierbas chimbas hay muchas, haga
          sino pegarlo, prenderlo y rodarlo añañai.
        </p>
        <section class="icons">
          <img className="a" src="../../../public/instagram.png" alt="" />
          <img className="a" src="../../../public/gorjeo.png" alt="" />
          <img className="a" src="../../../public/facebook.png" alt="" />
          <img className="a" src="../../../public/github.png" alt="" />
        </section>
      </section>
      <section class="footer-center col-md-4 col-sm-6">
        <section>
          <i class="fa fa-map-marker"></i>
          <p>
            <span> CONTACTO </span> MEDELLIN, ANTIOQUIA
          </p>
        </section>
        <section>
          <i class="fa fa-phone"></i>
          <p> (+57) 7894 159 324</p>
        </section>
        <section>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="#"> marihuana@company.com</a>
          </p>
        </section>
      </section>
      <section class="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          Cannabis
          <span>
            {" "}
            <img className="loguito" src="../../../public/ley.png" alt="" />
          </span>
        </h2>

        <p class="name"> Maria suculentas SAS &copy; 2016</p>
      </section>
    </footer>
  );
};
export default Footer;
