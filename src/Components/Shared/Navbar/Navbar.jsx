"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/categories");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  const navLinks = (
    <>
      {data.map((category) => (
        <li key={category.id} className="btn btn-outline text-[#950808] font-medium text-base rounded-full mr-6">
          <NavLink to={`/${category.route}`}>{category.category}</NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 text-[#fff]">
          <li className="btn btn-outline text-[#fff] font-medium text-base rounded-full mr-6">
            <NavLink to="/addanimal">Add Animal</NavLink>
          </li>
          <li className="btn btn-outline text-[#fff] font-medium text-base rounded-full mr-6">
            <NavLink to="/addcategory">Add Category</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
