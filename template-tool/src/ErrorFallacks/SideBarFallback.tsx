import React, { useEffect } from 'react'
import swal from 'sweetalert'

const SideBarFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Something is wrong with sidebar, try reloading the page.", "error")
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default SideBarFallback
