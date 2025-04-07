const Button = ({bgColor, onclick, innerText, className, type}) => {
    return (
        <button 
            onClick={onclick} 
            type={type} 
            className={`${bgColor} 
            ${className} 
            cursor-pointer px-4 py-2 text-white`}>
            {innerText}
        </button>
    );
};

export default Button;