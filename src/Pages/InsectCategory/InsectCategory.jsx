import Card from "../../Components/Shared/Card/Card";
import useData from "../../hooks/useData";

const InsectCategory = () => {
    const [allData] = useData()
   const fish = allData?.filter(item => item.category_name.toLowerCase() === 'insect')
   console.log(fish)
    return (
        <div className="container mx-auto my-20">
            {
                fish.length > 0 ? <div className="grid grid-cols-6 gap-6">
                {
                    fish?.map(data => <Card key={data._id} animal={data}>

                    </Card>)
                }
                </div>: <div className="flex justify-center items-center min-h-screen w-full">
                    <h1 className="text-3xl font-semibold text-white">There is no data found</h1>
                </div>
            }
            
        </div>
    );
};

export default InsectCategory;