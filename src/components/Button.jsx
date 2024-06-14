
const Button = ({ children, onClick, btnStyles, ...props }) => {
    return (
        <button onClick={onClick} {...props} className={`${btnStyles}`}> {children}</button>
    );
};

export default Button;
