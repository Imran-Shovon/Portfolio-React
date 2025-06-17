import React, { Children } from "react";

const Button = ({ children, onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition ${className}`}
        >
            {children}
        </button>
    )
}
export default Button;