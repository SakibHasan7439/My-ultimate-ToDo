const TextField = ({placeholder, name}) => {
    return (
        <input type="text" className="bg-white w-full text-black p-2" placeholder={placeholder} name={name} />
    );
};

export default TextField;