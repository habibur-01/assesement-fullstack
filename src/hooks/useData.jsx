import { useEffect, useState } from "react";


const useData = () => {
    const [allData, setAllData] = useState([])
    useEffect(() => {
        fetch("https://myapp-server-nu.vercel.app/allcategories")
        .then(res=> res.json())
        .then(data => {setAllData(data)})
    },[])
    return [allData];
};

export default useData;