import React, { useEffect } from 'react'
import swal from 'sweetalert'

const SvgUploadFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Encountered an error while rendering this component. Try reloading page.", "error")
            .then(resetErrorBoundary)
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default SvgUploadFallback
