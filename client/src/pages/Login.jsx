import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Login = () => {
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
        backgroundColor: 'transparent'
    }

  return (
    <section className='w-full h-screen'>
        <div className='flex flex-1 justify-center items-center px-8'>
            {/* <img src="/grocery_1.jpg" alt="Log In" className='w-3/5 h-full pt-5'/> */}
            <div className='mx-auto mt-14 pt-10 border border-slate-500 rounded-md w-[25%] h-[450px] flex flex-col items-center justify-evenly'>
            <h1 className='font-montserrat text-2xl'>Log In</h1>
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
                <button type="submit" className='font-montserrat bg-[#fb3640] text-white rounded-xl mt-8 p-1 w-2/5 mx-auto hover:bg-red-200 hover:text-[#fb3640]'>Log In</button>
            </form>
                  </div>
        </div>
    </section>
  )
}

export default Login
