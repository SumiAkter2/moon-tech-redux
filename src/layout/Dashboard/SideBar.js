import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
      <div>
        <div className=" bg-red-200 h-[calc(100vh-25px)] p-2 rounded-lg">
          <h1 className='text-xl font-bold py-5'>Admin Dashboard</h1>
          <ul className="flex gap-3  flex-col h-full ">
            <li>
              <Link to="/dashboard">Product List</Link>
            </li>
            <li>
              <Link to="add-product"> Add Product </Link>
            </li>
            <li className="mt-auto">
              <Link to="/"> Back to Home </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default SideBar;