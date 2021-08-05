import React, { useEffect } from 'react'
import swal from 'sweetalert'

const TopToolBarFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Something is wrong with toolbar, try reloading the page.", "error")
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default TopToolBarFallback
