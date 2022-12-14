import { useState } from "react";
import "./App.css";
import Header from "./components/helpers/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/helpers/Footer";
import Imgs from "./components/layout/Imgs";
import Main from "./components/layout/Main";



function App() {
  const [count, setCount] = useState(0);

  return (
    <section className="App">
      <Header />
      <Imgs />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
