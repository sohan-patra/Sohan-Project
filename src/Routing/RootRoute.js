import React,{lazy,Suspense} from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import About from '../Components/About/About'
import Login from '../Components/Authentication/Login/Login'
import Reg from '../Components/Authentication/Registretion/Reg'
// import Contact from '../Components/Contact/Contact'
import Doccat from '../Components/Doctor/Doccat/Doccat'
import Docdetails from '../Components/Doctor/Docdetails/Docdetails'
import Docsubcat from '../Components/Doctor/Docsubcat/Docsubcat'
import Home from '../Components/Home/Home'
import PNF from '../Components/PageNotFound/PNF'
// import Services from '../Components/Services/Services'
import Shopcat from '../Components/Shop/Shopingcategory/Shopcat'
import Shopingdetails from '../Components/Shop/ShopingDetails/Shopingdetails'
import Shopingsubcat from '../Components/Shop/Shopingsubcategory/Shopingsubcat'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import ProtectedRoute from './ProtectedRoute'
const Contact=lazy(()=>import('../Components/Contact/Contact'));
const Services=lazy(()=>import('../Components/Services/Services'));

export default function RootRoute() {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<h1>...Loading</h1>}>
       

        <Routes>
          <Route path="" element={<Home />} />
          <Route element={<ProtectedRoute />}>
          <Route path="contactpage" element={<Contact />} />
          <Route path="servicepage" element={<Services />} />
          </Route>
          <Route path="aboutpage" element={<About />} />
          {/* <Route path="contactpage" element={<Contact />} /> */}
          <Route path="shopcatpage" element={<Shopcat />} />
          <Route path="itemsub/:subName" element={<Shopingsubcat />} />
          <Route path="itemdetails/:detailsName/:detailstitle" element={<Shopingdetails />} />
          {/*  */}
          <Route path="registrationpage" element={<Reg />} />
          <Route path="loginpage" element={<Login />} />
          <Route path="doccatpage" element={<Doccat />} />
          <Route path="docsubcatpage/:docName" element={<Docsubcat />} />
          <Route path="docdetails/:docdetailsName/:docdetailstitle" element={<Docdetails />} />
         
          <Route path="*" element={<PNF />} />
        
           
            
            
      

           



        </Routes>
        <Footer/>
        </Suspense>
        
      </Router>
    </>
  )
}
