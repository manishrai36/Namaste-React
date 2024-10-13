import React from 'react';

const Registration = ({ isOpen, toggleModal }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 ${isOpen ? 'flex' : 'hidden'}`}
      onClick={handleOverlayClick} 
    >
      <div className="bg-indigo-400 w-1/2 rounded-2xl p-4" onClick={(e) => e.stopPropagation()}> 
        <button onClick={toggleModal} className=" text-white py-1 px-2 rounded font-bold text-xl hover:bg-red-500">Close</button>
        <h1 className="text-gray-700 font-bold mt-4">Hi User, Please Login</h1>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 p-2">Email</label>
            <input
              type="email"
              className="w-1/2 px-3 py-2 border rounded text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 p-2 ">Password</label>
            <input
              type="password"
              className="w-1/2 px-3 py-2 border rounded text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
          <p className="text-white-400 p-4 cursor-pointer">New User?</p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
