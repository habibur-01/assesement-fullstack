
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

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
        <li key={category._id} className="mr-6" id="sidebar">
          <NavLink to={category.route} className="btn btn-outline text-[#950808] rounded-full font-medium text-base px-4 hover:bg-transparent" >{category.category}</NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar container mx-auto pt-14">
      <div className="navbar-start flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 text-[#fff]">
          <li className="btn btn-outline text-[#fff] font-medium text-base rounded-full mr-6 hover:bg-transparent">
            <NavLink to="/addanimal">Add Animal</NavLink>
          </li>
          <li className="btn btn-outline text-[#fff] font-medium text-base rounded-full mr-6 hover:bg-transparent">
            <NavLink to="/addcategory">Add Category</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
