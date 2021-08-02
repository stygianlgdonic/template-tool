import React, { memo } from 'react'
const CustomTextField: React.FC<any> = ({
    onClick,
    startIcon,
    endIcon,
    error,
    helperText,
    className,
    label,
    ...rest
}) => {

    return (
        <>
            <div className="mb-4 relative  ">
                <label className="text-jacksonsPurple">{label}</label>
                <br />

                <input
                    {...rest}
                    className={className}
                    style={{
                        textIndent: startIcon ? '15px' : ''
                    }}
                />
                {/* //? start icon */}
                <img src={startIcon} alt="error" width="18" className={startIcon ? ' absolute left-0 top-0 mt-9 ml-2' : "hidden"} />

                {/* //? end Icon */}
                <img onClick={onClick} src={endIcon} alt="error" width="18" className={endIcon ? 'absolute right-0 top-0 mt-9 mr-4  cursor-pointer ' : "hidden"} />

                {/* //? Helper Text */}
                <p className={helperText ? 'text-red text-sm pl-2 transition duration-500' : 'hidden'}>{helperText}</p>
            </div>
        </>
    )
}

export default memo(CustomTextField)
