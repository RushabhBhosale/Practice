import { useState } from "react"

const LoginModal = ({ toggle }) => {

   const [user, setUser] = useState({
      email: "",
      password: "",
   })

   const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setUser({...user, [name]:value})
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      toggle();
   }

   return (
      <>
         <div className='modal-wrapper'></div>
         <div className='modal-container'>
            <h1 className="text-2xl mb-8 text-center">Login Form</h1>
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="email">Email</label>
                  <input onChange={handleInput} type="email" className='w-full my-2 border rounded-sm ps-2 border-black h-10' value={user.email} placeholder="Enter your email address" name="email" id="email" />
               </div>
               <div>
                  <label htmlFor="password">Password</label>
                  <input onChange={handleInput} type="password" className='w-full my-2 border rounded-sm ps-2 border-black h-10' value={user.password} placeholder="Enter your password" name="password" id="password" />
               </div>
               <div className='flex justify-center'>
                  <button type="submit" className='bg-black px-5 py-2 rounded-md mt-5 text-white'>Login</button>
               </div>
            </form>
         </div>
      </>
   )
}

export default LoginModal