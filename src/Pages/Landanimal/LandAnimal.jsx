import { useEffect, useState } from "react";
import Card from "../../Components/Shared/Card/Card";


const LandAnimal = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch("https://myapp-server-nu.vercel.app/allcategories")
        .then(res=> res.json())
        .then(data => setData(data))
    },[])
    console.log(data)
    return (
        <div className="grid grid-cols-6 container mx-auto gap-y-6 mt-20">
            {
                data?.map(animal => <Card key={animal._id} animal={animal}></Card>)
            }
        </div>
    );
};

export default LandAnimal;