'use client'
import { fetchServerResponse } from "next/dist/client/components/router-reducer/fetch-server-response"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Register() {

   const router = useRouter()
   const [data, setdata] = useState({
      name: "",
      email: "",
      password: "",
   })

   const registerUser = async (e) => {
      e.preventDefault()
      try {
         const response = await fetch('/api/register', {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
         })

         if (!response.ok) {
            throw new Error('Network response was not ok');
         }

         const userInfo = await response.json();
         console.log(userInfo);
         router.push('/login');
      } catch (error) {
         console.error('There was an error!', error);
      }
   }

   return (
      <>
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
               />
               <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Register for an account
               </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form className="space-y-6" onSubmit={registerUser}>
                  <div>
                     <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                     </label>
                     <div className="mt-2">
                        <input
                           id="name"
                           value={data.name}
                           onChange={(e) => { setdata({ ...data, name: e.target.value }) }}
                           name="name"
                           type="text"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           value={data.email}
                           onChange={(e) => { setdata({ ...data, email: e.target.value }) }}
                           id="email"
                           name="email"
                           type="email"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                           Password
                        </label>
                        <div className="text-sm">
                           <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                              Forgot password?
                           </a>
                        </div>
                     </div>
                     <div className="mt-2">
                        <input
                           id="password"
                           name="password"
                           value={data.password}
                           onChange={(e) => { setdata({ ...data, password: e.target.value }) }}
                           type="password"
                           autoComplete="current-password"
                           required
                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                     >
                        Sign in
                     </button>
                  </div>
               </form>

               <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{' '}
                  <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                     Start a 14 day free trial
                  </a>
               </p>
            </div>
         </div>
      </>
   )
}
