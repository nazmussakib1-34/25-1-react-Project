

const PriceOption = ({option}) => {

    console.log(option)
    return (
        <div className="bg-yellow-200 m-3 p-4 rounded flex flex-col ">
            <h1 className="text-3xl font-bold">{option.name}</h1>
            <div className=" gap-3 ">
            <p className="">{option.description}</p>
            <div className="flex-grow">
            {option.features.map((feature, index) => <p className="p-2" key={index}>{feature}</p>)}
            </div>

            </div>
            <p className="text-2xl font-semibold">{option.price} <span className="text-2xl "> $</span></p>
            <button className="bg-blue-500 text-white rounded py-2 px-4">Add to Cart</button>
        </div>
    );
};

export default PriceOption;