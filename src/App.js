import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Subtitulo from "./components/Subtitulo";
import Titulo from "./components/Ttulo";
import FormTareas from "./components/FormTareas";

function App() {
  return (
    <>
      <div className='vh-100 text-light'>
        <Titulo titulo="Lista de tareas" />
        <Subtitulo comision="16i" />
        <FormTareas/>
      </div>
    </>
  );
}

export default App;
