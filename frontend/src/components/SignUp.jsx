import { set } from 'mongoose'
import React, { useState } from 'react'
const SignUp = () => {
    const [client, setClient] = useState(false)
    const [form, setForm] = useState({})
    const changeMode = ()=>{setClient(!client)}
    const handleForm = (e)=>{
        setForm({...form, [e.target.id]: e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const type = client ? 'client' : 'freelancer';
        form['type'] = type;
        const res = await fetch('api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        console.log(data);
    }
    return (
        <div className={`w-full h-full flex relative `}>
            <form onSubmit={handleSubmit} className={`w-[70%] h-full relative flex flex-col items-center justify-center p-3 pt-10 gap-3 duration-1000 ease-in-out ${client ? 'translate-x-[40%]' : ''}`}>
                <h1 className='text-[#497174] text-5xl font-semibold mb-10'>
                    {`Sign Up as a ${client ? 'client' : 'freelancer'}`}
                </h1>
                <input type="text" placeholder='Enter your name' id='username'
                onChange={handleForm} className='text-lg px-4 py-3 outline-none bg-[#eff5f5] rounded-ss-xl rounded-ee-xl w-[30%]'/>
                <input type="text" placeholder='Whats your email' id='email'
                onChange={handleForm} className='text-lg px-4 py-3 outline-none bg-[#eff5f5] rounded-ss-xl rounded-ee-xl w-[30%]'/>
                <input type="password" placeholder='Enter Password' id='password'
                onChange={handleForm} className='text-lg px-4 py-3 outline-none bg-[#eff5f5] rounded-ss-xl rounded-ee-xl w-[30%]'/>
                <button className='bg-[#3b5d60] text-white px-2 py-2 text-lg rounded-full w-[22%] mt-10'>SignUp</button>
            </form>
            <div className={`top-0 w-[30%]  h-full bg-[#3b5d60] flex flex-col p-2 items-center justify-center text-white gap-1 transition-all duration-[850ms] ease-in-out ${client ? '-translate-x-[234%] rounded-e-[40%]' : 'rounded-s-[40%]'} text-center`}>
               <p className=' text-4xl font-semibold'>{`Hello ${!client ? 'client' : 'freelancer'}?`}</p>
               <p onClick={changeMode} className='hover:underline cursor-pointer text-lg font-extralight'>{`${!client ? 'find talent & get work done!' : 'showcase your skills!'}`}
               </p>
               <p className={`absolute bottom-1 ${client ? 'left-2' : 'right-2'}`}>Already a user? <span className='cursor-pointer hover:underline'>Sign-In</span> instead</p>
            </div>
        </div>
    )}

export default SignUp