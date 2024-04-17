import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'


const Signup = () => {
    const [refreshPage, setRefreshPage] = useState(false)

    const formSchema = yup.object().shape({
        username: yup.string().required('Please enter a name'),
        email: yup.string().email('Invalid email').required('Please enter an email'),
    })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
        },
        validationSchema: formSchema,
        onSubmit: values => {
            fetch('http://localhost:5555/customers', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(values)
            })
            .then(r => {
                if (r.status == 200) {
                    setRefreshPage(!refreshPage)
                }
            })
        }
    })

    const inputStyles = {
        width: '100%',
        padding: '5px',
        margin: 'auto',
        backgroundColor: 'transparent',
        fontSize: '14px'
    }

  return (
    <section className='w-full h-screen'>
      <div className='flex flex-1 justify-center items-center px-8'>
            <img src="/signup_login.jpg" alt="Log In" className='w-[500px] h-[500px] pt-5 ml-12 mt-5'/>
            <div className='mx-auto mt-10 pt-5 border border-slate-500 rounded-md w-[25%] h-fit flex flex-col items-center justify-evenly'>
                <h1 className='font-montserrat text-3xl font-bold text-red-500 mb-5'>Sign Up</h1>
                <form onSubmit={formik.handleSubmit} className='m-auto flex flex-col justify-evenly'>
                    <label htmlFor="username" className='font-montserrat text-slate-600'>Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                        style={inputStyles}
                        className='mb-6 placeholder:font-kanit font-kanit border rounded-xl border-slate-800 focus:outline-none focus:border-[#fb3640]'
                    />
                    <p className='font-kanit text-red-500 ml-14'>{formik.errors.username}</p>
                    <label htmlFor="email" className='font-montserrat mt-6 text-slate-600'>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        style={inputStyles}
                        className='mb-6 placeholder:font-kanit font-kanit focus:outline-none border rounded-xl border-slate-800 focus:border-[#fb3640]'
                    />
                    <p className='font-kanit text-red-500 ml-14'>{formik.errors.email}</p>
                    <label htmlFor="password" className='font-montserrat mt-6 text-slate-800'>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        style={inputStyles}
                        className='mb-6 border rounded-xl border-slate-800 focus:outline-none focus:border-[#fb3640]'
                    />
                    <label htmlFor="password" className='font-montserrat mt-6 text-slate-800'>Confirm Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        style={inputStyles}
                        className='mb-6 border rounded-xl border-slate-800 focus:outline-none focus:border-[#fb3640]'
                    />
                    <button type="submit" className='font-montserrat bg-[#fb3640] text-white rounded-xl mt-8 p-1 w-2/5 mx-auto hover:bg-red-200 hover:text-[#fb3640]'>Log In</button>
                    <p className='font-kanit text-[14px] mt-6 mb-4 mx-auto'>Already a customer? <a href="/login" className='font-montserrat text-red-500 text-[14px] hover:underline'>Sign in instead</a></p>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Signup
