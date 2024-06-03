import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://myapp-server-nu.vercel.app/categories");
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
          <NavLink
            to={category.route}
            className="btn btn-outline text-[#950808] rounded-full font-medium text-base px-4 hover:bg-transparent"
          >
            {category.category}
          </NavLink>
        </li>
      ))}
    </>
  );

  const handleCategory = async (e) => {
    e.preventDefault();
    const form = e.target;
    const category = form.category.value;
    const categoryData = { category, route: `/${category.toLowerCase()}` };
    console.log(categoryData);
    try {
      const response = await fetch("https://myapp-server-nu.vercel.app/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryData }),
      });
      if (response.ok) {
        const data = await response.json();
        return toast("Data received successfull:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddAnimal = async (e) => {
    e.preventDefault();
    const form = e.target;
    const animal_name = form.name.value;
    const img = form.image.value;
    const data = { animal_name, img };
    try {
      const response = await fetch("https://myapp-server-nu.vercel.app/allcategories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      if (response.ok) {
        const data = await response.json();
        return toast("Data received successfull:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="navbar container mx-auto pt-14">
      <div className="navbar-start flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 text-[#fff]">
          <li>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-outline text-[#fff] font-medium text-base rounded-full mr-6 hover:bg-transparent px-4"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Add Animal
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box  w-80">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
                    ✕
                  </button>
                </form>
                <div className=" my-5">
                  <form onSubmit={handleAddAnimal}>
                    <div className="text-black flex flex-col justify-center w-full">
                      <label className="text-base font-medium">
                        Add Animal
                      </label>
                      <input
                        type="text"
                        placeholder="Animal Name"
                        name="name"
                        id=""
                        className="input text-black px-2 h-10 w-full mt-5 border-[1px] border-gray-500"
                      />
                    </div>
                    <div className="mt-5 relative ">
                      <input
                        type="text"
                        placeholder="Image URL"
                        name="image"
                        id=""
                        className="input text-black px-2 h-10 w-full border-[1px] border-gray-500"
                      />
                    </div>
                    <div>
                      <button className="bg-black w-full btn text-white font-medium mt-8 hover:bg-white hover:text-black">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
          <li>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-outline text-[#fff] font-medium text-base rounded-full mr-6 hover:bg-transparent px-4"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Add Category
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box  w-80">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
                    ✕
                  </button>
                </form>
                <div className=" my-5">
                  <form onSubmit={handleCategory}>
                    <div className="text-black flex flex-col justify-center w-full">
                      <label className="text-base font-medium">
                        Add Category
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        name="category"
                        id=""
                        className="input text-black px-2 h-10 w-full mt-5 border-[1px] border-gray-500"
                      />
                    </div>
                    <div>
                      <button className="bg-black w-full btn text-white font-medium mt-8 hover:bg-white hover:text-black">
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
