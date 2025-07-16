import React from "react";

const Select = React.forwardRef(({ options = [], label, className = "", ...props }, ref) => {
    return (
        <div className={`w-full ${className}`}>
            {label && <label className="inline-block mb-1 pl-1">{label}</label>}
            <select
                {...props}
                ref={ref}
                className="w-full rounded-lg border border-gray-200 focus:border-gray-500 focus:outline-none px-3 py-2"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select; 