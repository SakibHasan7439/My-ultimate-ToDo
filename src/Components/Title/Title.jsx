const Title = ({text, className}) => {
    return (
        <h3 className={`text-xl text-white md:text-2xl font-bold mb-3 ${className}`}>
            {text}
        </h3>
    );
};

export default Title;