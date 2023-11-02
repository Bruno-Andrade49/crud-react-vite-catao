import { Navbar } from "./components/navbar/navbar.jsx"
import { Sidebar } from "./components/sidebar/sidebar.jsx"
import { TabelaFuncionarios } from "./components/table/TabelaFuncionarios.jsx";
import * as C from "./styles/app.js"

function App() {

  return (
    <>
      <C.Container>
        <Navbar />
        <Sidebar />
        <TabelaFuncionarios />
      </C.Container>
    </>
  )
}

export default App;
