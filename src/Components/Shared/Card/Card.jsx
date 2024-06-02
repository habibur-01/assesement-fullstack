const Card = ({ animal }) => {
  console.log(animal);
  return (
    <div className="w-[160px]">
      <div className="w-[160px] h-[190px] flex justify-center items-center bg-[#141414] rounded-md shadow-sm">
        <div className="w-[100px] h-[90px]">
          <img
            src={animal?.img}
            alt="animal"
            className="w-full h-full object-cover overflow-hidden"
          />
        </div>
      </div>
      <div>
        <h1 className="text-base my-2 font-semibold text-white text-center uppercase">{animal.animal_name}</h1>
      </div>
    </div>
  );
};

export default Card;
