import React, { useState } from "react";
import { FaSearch, FaRedo } from "react-icons/fa";



const App = () => {
  const [captcha, setCaptcha] = useState("ACAVABAKD");

  const generateCaptcha = () => {
    const newCaptcha = Math.random().toString(36).substring(2, 10).toUpperCase();
    setCaptcha(newCaptcha);
  };

  const galleryImages = [
    'https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053039.png',
    'https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053045.png',
    'https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053017.png',
    'https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053023.png',
    'https://cdn.s3waas.gov.in/master/uploads/2017/04/2017053094.png',
    'https://cdn.s3waas.gov.in/master/uploads/2017/04/2017110781.png'
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-8">
      
      <div className="mb-8 px-16">
        <h1 className="text-regular text-gray-700">Home / Voter List</h1>
        <h2 className="text-2xl font-bold text-gray-800 pt-4">VOTER LIST</h2>
      </div>


      <div className="bg-[#E0E0E0] w-[90vw] p-10 ml-[2.5vw] rounded-md shadow-md border-[1.5px] border-gray-600 text-black">
       
        <div className="flex flex-col md:flex-row md:space-x-12 mb-4 ">
          <input
            type="text"
            placeholder="Enter Name"
            className="flex-1 w-[5vw] p-3 border border-gray-300 rounded-md focus:outline-none text-xl focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Part No. (Booth No.) "
            className="flex-1 p-3 border  border-gray-300 rounded-md focus:outline-none text-xl focus:ring-2 focus:ring-blue-500"
          />
          <span className="flex items-center justify-center font-semibold">OR</span>
          <input
            type="text"
            placeholder=" EPIC NO"
            className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none text-xl focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
<div className="flex w-[52.5vw] flex-col md:flex-row items-center mb-4 space-y-4 md:space-y-0 md:space-x-12  mt-8">
  
  <input
    type="text"
    placeholder="Enter Captcha"
    className="flex-1 p-3 h-full border border-gray-300 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

 
  <div className="relative  w-[24.8vw] flex items-center border text-xl border-gray-300 rounded-md bg-gray-600 h-full">
   
    <div className="flex-1 flex items-center p-3 h-[6.5vh]">
      <span className="text-xl font-normal">
        <span className="text-red-600">ACAV</span>
        <span className="text-yellow-400">AB</span>
        <span className="text-green-600">AKD</span>
      </span>
    </div>

    
    <div
      onClick={generateCaptcha}
      className="bg-green-600 text-white w-12 h-12 flex items-center justify-center cursor-pointer"
    >
      <FaRedo className="transform rotate-180"  /> 
    </div>

    
    <button
      onClick={generateCaptcha}
      className="absolute top-full right-0 mt-1 text-green-600 text-sm hover:underline"
    >
      Reset Captcha
    </button>
  </div>
</div>





        
<div className="flex space-x-4 mt-8">
  
  <button className="flex items-center px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-xl">
    
    Search
    <FaSearch className="ml-6" />
  </button>


  <button className="flex items-center px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-xl">
    
    Reset
    <FaRedo className="ml-6 transform rotate-180" />
  </button>
</div>

      </div>

      
      <div className="mt-16 overflow-x-auto p-4">
      <table className="min-w-full bg-white border border-gray-500">
  <thead>
    <tr className="bg-[#0687C9] text-white text-xl">
      <th className="p-2 border-r border-gray-300 text-center ">Name</th>
      <th className="p-2 border-r border-gray-300 text-center">Ward No.</th>
      <th className="p-2 border-r border-gray-300 text-center">Booth Location</th>
      <th className="p-2 border-r border-gray-300 text-center">Address</th>
      <th className="p-2 border-r border-gray-300 text-center">Phone No.</th>
      <th className="p-2 border-r border-gray-300 text-center">Age</th>
      <th className="p-2 text-center">Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-t border-gray-500">
      <td className="p-2 border-r border-gray-300 text-center">Name</td>
      <td className="p-2 border-r border-gray-300 text-center">Ward No.</td>
      <td className="p-2 border-r border-gray-300 text-center">Booth Location</td>
      <td className="p-2 border-r border-gray-300 text-center">XYZ</td>
      <td className="p-2 border-r border-gray-300 text-center">+91 Xxx-Xxx-Xxx</td>
      <td className="p-2 border-r border-gray-300 text-center">28</td>
      <td className="p-2 text-center">Male</td>
    </tr>
    
  </tbody>
</table>

      </div>
    </div>

    <div className="container mx-auto  px-8 -mt-20 border-t-[1px] border-black bg-white rounded-xl shadow-lg transition-transform duration-300 hover:shadow-2xl">
      
        <div className="flex flex-wrap gap-6 justify-center">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer max-w-xs"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
