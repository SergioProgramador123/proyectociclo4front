import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import styles from './App.module.scss'
import AgregarPedido from './AgregarPedido';
import EditarPedido from './EditarPedidos';
import ListaPedidos from './ListaPedidos';

function App() {
  return (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">CRUD MERN STACK sergioweb.com</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="register">Registrarme</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login" >Iniciar sesion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="agregarpedido">Hacer pedido</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="listapedidos">Editar pedido</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
      
      <BrowserRouter>
      <div className={styles.container}>
          <Routes>
            <Route path="/register" element={<Register/>} exact></Route>
            <Route path="/login" element={<Login/>} exact></Route>
            <Route path="/editarpedido/:idpedido" element={<EditarPedido/>}></Route>
            <Route path="/agregarpedido" element={<AgregarPedido/>} exact/>
            <Route path="/listapedidos" element={<ListaPedidos/>} exact/>
          </Routes>
      </div>
      </BrowserRouter>


    </div>
  );
}

export default App;
