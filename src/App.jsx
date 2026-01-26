import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Prcatice from './pages/tailwindPrcatice'
import Tailwindp1 from './pages/Tailwindp1'
// import Navp from './components/Navp'
import Contentcard from './components/Contentcard'
import UserContextProvider from './context/UserContextProvider'
//import Login from './components/Login'
import Profile from './components/Profile'
import Card from './components/Card'
import Useref from './components/Useref'
import Usereduser from './components/Usereducer'
import UseLayoutEffect from './components/UseLayoutEffect'
import UseMemoExample from './components/UseMemo'
import EventHandling from './components/EventHandling'
import { BioProvider } from './components/ContextApi.jsx'
import HesiCards from './components/HesiCards.jsx'
//import Navbar from './components/NohesiNav.jsx'
import NohesiHero from './components/NohesiHero.jsx'
import NoHesiCards2 from './components/NoHesiCards2.jsx'
import NoHesiTextImg from './components/NoHesiTextImg.jsx'
import NoHesiShirtCard from './components/NoHesiShirtCard.jsx'
import ToDoList from './components/Project/ToDoList.jsx'
//import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import ForgetPage from './components/ForgetPage.jsx'
import PasswordPage from './components/PasswordPage.jsx'
import Dashboard from './components/Dashboard.jsx'
import Chart from './components/Chart.jsx'
import ProfilePage from './components/ProfilePage.jsx'
import TopBar from './components/TopBar.jsx'
import SideBar from './components/SideBar.jsx'
import Layout from './components/Layout.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import LoginPage from './components/LoginPage.jsx'
import Checkout from './pages/Checkout.jsx'
import OrderSuccess from './pages/OrderSuccess.jsx'
import MyOrders from './pages/MyOrders.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import AdminLayout from './admin/AdminLayout.jsx'
import AdminProducts from './admin/AdminProducts.jsx'
import AdminOrders from './admin/AdminOrders.jsx'
import AdminOrderDetail from './admin/AdminOrderDetail.jsx'



// import Home from './components/ContextApi.jsx/Home'
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


function App() {
  // const [color, setColor] = useState("black")

  // function Greeting(props){ 
  //   return <h1>Hello,{props.name}</h1>

  // }

//  const [data, setData] = useState(null);

      // useEffect(() => {
      //   axios.get('http://127.0.0.1:8000/login') // Replace with your FastAPI endpoint
      //     .then(response => setData(response.data))
      //     .catch(error => console.error('Error fetching data:', error));
      // }, []);




  return (
    
    // <div className='w-full h-screen duration-200'
    // style={{backgroundColor: color}}>
    //   <div className= 'fixed bottom-12 left-0 right-0 flex justify-center'>
    //     <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    //       <button
    //       onClick={()=> setColor("red")}
    //       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    //       style={{backgroundColor:"red"}}>Red</button>

    //       <button 
    //       onClick={()=> setColor("blue")}
    //       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    //       style={{backgroundColor:"blue"}}>Blue</button>

    //       <button 
    //       onClick={()=> setColor("green")}
    //       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    //       style={{backgroundColor:"green"}}>Green</button>
    //       <button 
    //       onClick={()=> setColor("cyan")}
    //       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    //       style={{backgroundColor:"cyan"}}>Cyan</button>
    //       <button 
    //       onClick={()=> setColor("white")}
    //       className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
    //       style={{backgroundColor:"white"}}>White</button>

    //       <button 
    //       onClick={()=> setColor("pink")}
    //       className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
    //       style={{backgroundColor:"pink"}}>Pink</button>
    //     </div>
    //   </div>
    // </div>

//     <>
//     <Router>
//       <Header />
//       <main style={{ padding: "20px" }}>
//          <Routes>
//            <Route path="/" element={<Home />} />
//            <Route path="/about" element={<About />} />
//           {/* <Route path="/practice" element={<Prcatice/>} /> */}
//          </Routes>
//       </main>
//       <Footer />
//  </Router>
//     </>


//  <>
// <Prcatice/>
// </> 


//  <>
// <Tailwindp1/>
// </> 

//  <>
// <Navp/>
// <Contentcard/>
//   </> 

//  <UserContextProvider>
//   <Login/>
//   <Profile/>
// </UserContextProvider> 

//  <>
// <Card name="hammad" btnText="Click me"/>
// <Card name={"Akhtar"}/>

// </>  

// {/* <>
// <Greeting name = "hammad"/>
// <Greeting name = "Ali"/>
// <Greeting name = "Akhtar"/>

// </> */}

// {/* <>
// <Useref/>
// <Usereduser/>
// <UseLayoutEffect/>
// <UseMemoExample/>
// <EventHandling/>
// </> */}


// {/* <BioProvider>
// <Home/>
// </BioProvider> */}

//  <>
// {/* <Navbar/> */}
// <br/>
// <NohesiHero/>
// <HesiCards/>
// <NoHesiCards2/>
// <NoHesiTextImg/>
// <NoHesiShirtCard/>
// </> 


// {/* <>
// <ToDoList/>
// </>  */}


// {/* <>

// <Router>
//   <main>
//     <Routes>
//       <Route path="/" element={<SignupPage/>} />
//       <Route path="/login" element={<LoginPage/>} />
//       <Route path="/forget" element={<ForgetPage/>} />
//       <Route path="/password" element={<PasswordPage/>} />
      
      
//     </Routes>
//   </main>
// </Router>
// </>   */}






//  <>
//     <Router>
//       <Routes>
//       <Route path="/" element={<SignupPage/>} />
//       <Route path="/login" element={<LoginPage/>} />
//       <Route path="/forget" element={<ForgetPage/>} />
//       <Route path="/password" element={<PasswordPage/>} />
//         <Route element={<Layout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/profile" element={<ProfilePage />} />
//         </Route>
//       </Routes>
//     </Router>

// </>  




    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/forget' element={<ForgetPage />} />
        <Route path='password' element={<PasswordPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/ordersuccess' element={<OrderSuccess />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Routes>
      <Footer/>
      </Router>
     </>


    //  <> 
    // <Router>
    //     <Routes>
    //     <Route path="/" element={<AdminLogin />} />

    //     <Route path="/admin" element={<AdminLayout />}>
    //       <Route path="products" element={<AdminProducts />} />
    //       <Route path='orders' element={<AdminOrders />} />
    //       <Route path='detail/:id' element={<AdminOrderDetail />} />
    //     </Route>
    //   </Routes>
    //   </Router>
    // </>

  )
}

export default App 