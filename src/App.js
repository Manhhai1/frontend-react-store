
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, redirect } from "react-router-dom";
import { DataProvider } from './GlobalState';
import Home from './mainpage/Home';
import Login from './account/Login';
import Signup from './account/Signup';
import BstSuit from './pages/BstSuit';
import BstSuitXutedo from './pages/BstSuitTuxedo';
import TrousersAdam from './pages/TrousersAdam';
import ShoesAdam from './pages/ShoesAdam';
import Shirt from './pages/Shirt';
import Short_sleevedShirt from './pages/Short_sleevedShirt';
import Jacket from './pages/Jacket';
import Sweater from './pages/Sweater';
import Polo from './pages/Polo';
import T_Shirt from './pages/T_Shirt';
import Buckle from './pages/Buckle';
import Sip from './pages/Sip';
import User from './account/User';
import Admin from './account/Admin';
import InforProduct from './pages/InforProduct';
import ModalUpdateProduct from './pages/ModalUpdateProduct';
import CreateProduct from './pages/CreateProduct';
import Infor from './pages/InforProduct';
import Basket from './mainpage/Basket';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/user' element={<User></User>}></Route>
        <Route path="/account" element={<User></User>} ></Route>
       <Route path='/basket' element={<Basket></Basket>}></Route>


        <Route path='/product' >
          <Route path='create-product' element={<CreateProduct></CreateProduct>}></Route>
        </Route>
        <Route path='/product/:id' element={<Infor></Infor>}></Route>
        <Route path="/collections">
          <Route path='bst-vest-cuoi' element={<BstSuit></BstSuit>}></Route>
          <Route path='bo-suu-tap-suit-tuxedo-2023' element={<BstSuitXutedo></BstSuitXutedo>}></Route>
          <Route path='quan-au-nam' element={<TrousersAdam></TrousersAdam>}></Route>
          <Route path='giay-da-adam-store' element={<ShoesAdam></ShoesAdam>}></Route>
          <Route path='so-mi-nam-adam-store' element={<Shirt></Shirt>}></Route>
          <Route path='ao-so-mi-coc-tay' element={<Short_sleevedShirt></Short_sleevedShirt>}></Route>
          <Route path='ao-khoac-adam' element={<Jacket></Jacket>}></Route>
          <Route path='ao-len-nam' element={<Sweater></Sweater>}></Route>
          <Route path='ao-phong-adam-store' element={<Polo></Polo>}></Route>
          <Route path='ao-t-shirt-adam' element={<T_Shirt></T_Shirt>}></Route>
          <Route path='that-lung-nam' element={<Buckle></Buckle>}></Route>
          <Route path='sip-nam-2019' element={<Sip></Sip>}></Route>
        </Route>
      </Routes>
    </DataProvider>


  );
}

export default App;
