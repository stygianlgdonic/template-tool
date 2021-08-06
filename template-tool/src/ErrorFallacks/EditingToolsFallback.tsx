import React, { useEffect } from 'react'
import swal from 'sweetalert'

const EditingToolsFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Something is wrong with editing tools, try reloading the page.", "error")
            .then(resetErrorBoundary)
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default EditingToolsFallback
