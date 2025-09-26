import React, { Children } from "react";

function Button({Children,
    type='button',
    bgColor='bg-blue-600',
    textCOlor='text-white',
    className='',
    ...props
}){

return (
    <button className={`px-4 py-2 rounded-lg ${className} ${textCOlor} ${className} `}{...props}>
        {Children}
    </button>
)
}
export default Button