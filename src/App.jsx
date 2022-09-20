import Bonus from "./components/Bonus";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Informacoes from "./components/Informacoes";
import Introducao from "./components/Introducao/index";
import Oferta from "./components/Oferta";
import ParaQuem from "./components/ParaQuem";
import SessaoFinal from "./components/SessaoFinal";
import SobreOcurso from "./components/Sobre o curso";
import SobreOvendedor from "./components/SobreOvendedor";

function App() {
  return (
    <div className="App">
      <Introducao/>
      <SobreOcurso/>
      <SobreOvendedor/>
      <Informacoes/>
      <ParaQuem/>
      <Depoimentos/>
      <Bonus/>
      <Oferta/>
      <SessaoFinal/>
      <Footer/>
    </div>
  );
}

export default App;
