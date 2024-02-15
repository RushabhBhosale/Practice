import { useState } from "react"
import { NavLink } from "react-router-dom"
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Navbar = () => {

   const [showLoginModal, setShowLoginModal] = useState(false);
   const [showRegisterModal, setShowRegisterModal] = useState(false);

   function toggleLoginModal() {
      setShowLoginModal(!showLoginModal);
   }

   function toggleRegisterModal() {
      setShowRegisterModal(!showRegisterModal)
   }

   return (
      <header>
         <div className="container bg-white text-black font-medium flex justify-between sm:py-3 items-center sm:px-24">
            <div className="text-3xl">
               <a href="/" className="bg-white text-black font-medium">Logo</a>
            </div>
            <nav>
               <ul className="flex">
                  <li className="bg-white text-black font-medium">
                     <NavLink className="bg-white text-black font-medium px-5 text-lg hover:text-blue-700" to="/">Home</NavLink>
                  </li>
                  <li className="bg-white text-black font-medium">
                     <NavLink className="px-5 bg-white text-black font-medium text-lg hover:text-blue-700" to="/about">About</NavLink>
                  </li>
                  <li className="bg-white text-black font-medium">
                     <NavLink className="px-5 bg-white text-black font-medium text-lg hover:text-blue-700" to="/services">Services</NavLink>
                  </li>
                  <li className="bg-white text-black font-medium">
                     <NavLink className="px-5 bg-white text-black font-medium text-lg hover:text-blue-700" to="/contact">Contact</NavLink>
                  </li>
                  <li className="bg-white text-black cursor-pointer font-medium">
                     <div onClick={toggleLoginModal} className="px-5 bg-white text-black font-medium text-lg hover:text-blue-700">Login</div>
                  </li>
                  <li className="bg-white text-black cursor-pointer font-medium">
                     <div onClick={toggleRegisterModal} className="px-5 bg-white text-black font-medium text-lg hover:text-blue-700">Register</div>
                  </li>
               </ul>
            </nav>
         </div>
         {showLoginModal && <LoginModal toggle={toggleLoginModal}/>}
         {showRegisterModal && <RegisterModal toggle={toggleRegisterModal}/>}
      </header>
   )
}

export default Navbar