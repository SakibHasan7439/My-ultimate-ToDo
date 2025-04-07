const Button = ({bgColor, innerText, className}) => {
    return (
        <button className={`${bgColor} ${className} cursor-pointer px-4 py-2 text-white`}>
            {innerText}
        </button>
    );
};

export default Button;