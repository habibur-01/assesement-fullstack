import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LandAnimal from "../Pages/Landanimal/LandAnimal";
import Fish from "../Pages/Fish/Fish";
import BirdCategory from "../Pages/BirdCategory/BirdCategory";
import InsectCategory from "../Pages/InsectCategory/InsectCategory";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/landanimal",
            element:<LandAnimal></LandAnimal>
        },
        {
            path:"/fish",
            element:<Fish></Fish>
        },
        {
            path:"/bird",
            element:<BirdCategory></BirdCategory>
        },
        {
            path:"/insect",
            element:<InsectCategory></InsectCategory>
        },
      ]
    },
  ]);
  export default router;
  