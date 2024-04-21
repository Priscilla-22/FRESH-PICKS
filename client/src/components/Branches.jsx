
import React, {useState, useEffect} from 'react'
import Branch from './Branch'
import Header from '../Components/HomePage/Header'
import Footer from '../Components/HomePage/Footer'

function Branches(){
    const [branches, setBranches] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:5555/branches")
        .then((r) => r.json())
        .then((branches) => setBranches(branches))
    }, [])

    if (!branches){
        return(
            <p>Loading...</p>
        )
    }

console.log(branches)


    return(
        <div className="w-full">
            <Header/>
            <h1  className="px-55 my-10 flex place-content-center w-40 mx-auto  text-3xl text-center font-extrabold text-black bg-white">OUR BRANCHES</h1>
            <div className="flex non-wrap justify-between p-5">
                {branches.map((branch) => {
                    return(
                        <Branch
                        key = {branch.id}
                        name = {branch.name}
                        location = {branch.location}
                        image = {branch.image}
                        />
                    )
                    })}
            </div>
            <h2 className='p-12 text-center text-2xl '>Operating Hours</h2>
            <p className='text-center text-lg'>Monday-Saturday: 7:30 A.M. to 9:00 P.M.</p>
            <p className='text-center text-lg pb-7'>Sunday and Public Holidays: 9:30 A.M. to 9:00 P.M. </p>
            <Footer/>
        </div>
    )
}

export default Branches
