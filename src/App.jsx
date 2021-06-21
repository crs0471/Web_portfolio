import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import Aboutme from "./components/aboutme/Aboutme"
import Contectus from "./components/contectus/Contectus"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"

function App() {
  
  return (
    < >
      <Particles className = 'particles-container'
        params = {{
          particles:{
            number :{
              value : 30,
              density : {
                enable : true,
                value_area : 900
              }
            },
            shape :{
              type :'cirle',
              stroke:{
                width:6,
                color:'#f9ah00'
              }

            }

          }
        }}
      >
      </Particles>
      <Navbar></Navbar>
      <div className="sections">
        <Header></Header>
        <Aboutme></Aboutme>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contectus></Contectus>
      </div>
    </>
  );
}

export default App;
