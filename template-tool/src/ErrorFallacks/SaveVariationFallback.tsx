import React, { useEffect } from 'react'
import swal from 'sweetalert'

const SaveVariationFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Something is wrong with sidebar, try reloading the page.", "error")
            .then(resetErrorBoundary)
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default SaveVariationFallback
