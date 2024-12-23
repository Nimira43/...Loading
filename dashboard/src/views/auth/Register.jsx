import React from 'react'

const Register = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#fffaf0] flex justify-center items-center'>
      <div className='w-[350px] text-[#fffaf0] p-2'>
        <div className='bg-[#ff4500] p-4 rounded-md'>
          <h2 className='text-3xl mb-5 font-bold logo'>The Cyber Market</h2>
          <p className='text-sm mb-3 font-medium'>Please register to start your account</p>
          <form>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='name'>Name</label>
              <input className='px-3 py-2 outline-none border border-[#fffaf0] bg-transparent rounded-md' type='text' name='name' placeholder='Enter name' id='name' required />
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Register
