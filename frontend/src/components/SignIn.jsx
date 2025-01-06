import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignIn = ()=>{
    const [form, setForm] = useState({})
    const[error, setError] = useState('')
    const[loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleForm = (e)=>{
        setForm({...form, [e.target.id]: e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('')
        const res = await fetch(import.meta.env.VITE_API_PATH+'/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const data = await res.json();
        if(data.sucess===false){
            setError(data.message)
        }
        else{
                    setLoading(!loading)
                    navigate('/dashboard')
                }
        console.log(data);
    }
return (
    <div className={`w-full h-full flex`}>
    <form onSubmit={handleSubmit} className={`w-[100%] h-full relative flex flex-col items-center justify-center p-3 pt-10 gap-3`}>
        <h1 className='text-[#497174] text-5xl font-semibold mb-10'>
            {`Sign In as a client/freelancer`}
        </h1>
        <input type="text" placeholder='Whats your email' id='email'
        onChange={handleForm} className='text-lg px-4 py-3 outline-none bg-[#eff5f5] rounded-ss-xl rounded-ee-xl w-[25%]'/>
        <input type="password" placeholder='Enter Password' id='password'
        onChange={handleForm} className='text-lg px-4 py-3 outline-none bg-[#eff5f5] rounded-ss-xl rounded-ee-xl w-[25%]'/>
        <p className='text-red-500'>{error}</p>
        <button className='bg-[#3b5d60] text-white px-2 py-2 text-lg rounded-full w-[18%] mt-10' >{loading?'Loading...':'Sign In'}</button>
        <p className="text-[#497174] text-xs "> Dont Have an account<span className="underline cursor-pointer"> <Link to="/"> Sign-Up</Link></span></p>
    </form>
</div>
)
}

export default SignIn;