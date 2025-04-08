const TextField = ({placeholder, name}) => {
    return (
        <input required className="bg-white outline-green-600 w-full text-black p-2" placeholder={placeholder} name={name} />
    );
};

export default TextField;