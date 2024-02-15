import { useState } from "react";

const RegisterModal = ({ toggle }) => {

   const [user, setuser] = useState({
      username: "",
      email: "",
      phone: "",
      password: ""
   })

   const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setuser({ ...user, [name]: value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      toggle();
      try {
         const response = await fetch(`http://localhost:5000/api/auth/register`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
         });
         console.log(response);
      } catch (error) {
         console.log("reg", error);
      }
   }

   return (
      <>
         <div className="modal-wrapper"></div>
         <div className="modal-container">
            <h1 className="text-3xl text-center">Registration Form</h1>
            <form onSubmit={handleSubmit} className='w-[400px] mt-12'>
               <div>
                  <label htmlFor="username">Username</label>
                  <input onChange={handleInput} className='w-full my-2 border rounded-sm ps-2 border-black h-10' type="text" placeholder='Enter username' value={user.username} name="username" id="username" required autoComplete='off' />
               </div>
               <div>
                  <label htmlFor="email">Email</label>
                  <input onChange={handleInput} className='w-full my-2 border rounded-sm ps-2 border-black h-10' type="email" placeholder='Enter email' value={user.email} name="email" id="email" required autoComplete='off' />
               </div>
               <div>
                  <label htmlFor="phone">Phone</label>
                  <input onChange={handleInput} className='w-full my-2 border rounded-sm ps-2 border-black h-10' type="string" placeholder='Enter phone' value={user.phone} name="phone" id="phone" required autoComplete='off' />
               </div>
               <div>
                  <label htmlFor="password">Password</label>
                  <input onChange={handleInput} className='w-full my-2 border rounded-sm ps-2 border-black h-10' type="password" placeholder='Enter password' value={user.password} name="password" id="password" required autoComplete='off' />
               </div>
               <div className='flex justify-center'>
                  <button type="submit" className='bg-black px-5 py-2 rounded-md mt-5 text-white'>Register</button>
               </div>
            </form>
         </div>
      </>
   )
}

export default RegisterModal