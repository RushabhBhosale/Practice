import { useState } from 'react'

const Contact = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='w-[600px] mx-auto mt-12'>
      <h1 className="text-3xl mb-8 text-center">Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input onChange={handleInput} type="text" className='w-full my-2 border rounded-sm ps-2 border-black h-10' value={user.username} placeholder="Enter your username address" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange={handleInput} type="email" className='w-full my-2 border rounded-sm ps-2 border-black h-10' value={user.email} placeholder="Enter your email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea onChange={handleInput} className='w-full my-2 border rounded-sm ps-2 border-black h-32' value={user.message} placeholder="Enter your message" name="message" id="message" />
        </div>
        <div className='flex justify-center'>
          <button type="submit" className='bg-black px-5 py-2 rounded-md mt-5 text-white'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact