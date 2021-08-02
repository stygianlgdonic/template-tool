import React, { memo } from 'react';
const LoadingButton: React.FC<any> = ({
    isLoading, loadingProps, startIcon, endIcon, className, style, children, ...rest
}) => {
    return (
        <>
            <button
                className={className ? className : 'w-full  justify-center place-items-center flex focus:outline-none relative '}
                style={{
                    paddingLeft: startIcon ? '30px' : ''
                }}
                {...rest}>
                {
                    isLoading ?
                        <svg className='animate-spin w-6 ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" {...loadingProps} >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        :
                        children
                }
            </button>

            <img src={startIcon} alt="error" width="20" className={startIcon ? 'absolute    ml-2 ' : "hidden"} />

            <img src={endIcon} alt="error" width="20" className={endIcon ? 'absolute right-0 top-0 mt-3.5 mr-4  cursor-pointer ' : "hidden"} />


        </>
    )
}

export default memo(LoadingButton)

