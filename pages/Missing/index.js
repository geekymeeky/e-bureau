import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const generalDiary = () => {

  const [idNo, setidNo] = useState('');
  const [password, setpassword] = useState('');

  const showAlert = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const handleOnClick = () => {
    if (idNo.trim() === '') {
      showAlert('Identification No. is required')
    } else if (password.trim() === '') {
      showAlert('Password field is required')
    }
  }

  return (
    <>
     <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
          <h1 className="text-gray-800 block text-3xl font-extrabold font-title py-4">
            Missing Report
          </h1>
          <div className="relative sm:max-w-sm w-full">
            <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-9"></div>
            <div className="card shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-9"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label
                htmlFor=""
                className="block mt-3 text-m text-gray-900 text-center font-semibold"
              >
                POLICE STAFF LOGIN
              </label>
              <form method="#" action="#" className="mt-10">

                <div className="mt-4">
                  <label class="block text-sm font-medium text-gray-700">
                    Enter Unique Identification No.
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="email"
                      value={idNo}
                      onChange={(e) => setidNo(e.target.value)}
                      class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter Unique Identification No."
                    />
                  </div>
                  {/* <strong class="text-red-500 text-xs">Unique Identification No field is required</strong> */}
                </div>
                <div className="mt-4">
                  <label class="block text-sm font-medium text-gray-700">
                    Enter Name
                  </label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="password"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                      class="focus:ring-blue-500 focus:border-blue-500 block w-full p-3 sm:text-sm border-gray-300 rounded-md"
                      placeholder="Enter Name"
                    />
                  </div>
                  {/* <strong class="text-red-500 text-xs">Name field is required</strong> */}
                </div>

                <div className="mt-7">
                  <button onClick={handleOnClick} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                    Login
                  </button>
                </div>

                <div className="flex mt-7 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                  <label className="block font-medium text-sm text-gray-800 w-full">
                    For General User
                  </label>
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                </div>

                <div className="flex mt-7 justify-center w-full">
                  <Link href="/Missing/Complain">
                    <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      File a Complain
                    </button>
                  </Link>
                  <Link href="/Track">
                    <button className="bg-green-700 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Search Your Record
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default generalDiary
