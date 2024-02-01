import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Basket from './views/Basket';
import Footer from './components/Footer';
import ModalBox from './components/ModalBox';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Registration from './components/Registration';
function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const pages ={
    Main: <Main />,
    Basket: <Basket />
  }
  const modalBoxes ={
    none: null,
    AddProduct: <ModalBox setModalBox={setModalBox}><AddProduct /></ModalBox>,
    Login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}>< Registration /></ModalBox> 
  }

  return (
    <div className="App">
      <Header setPage={ setPage } setModalBox={setModalBox}/>
      { pages[page] }
      { modalBoxes[modalBox]}
      <Footer />
    </div>
  );
}

export default App;
