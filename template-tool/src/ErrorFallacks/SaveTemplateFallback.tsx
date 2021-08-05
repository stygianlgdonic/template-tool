import React, { useEffect } from 'react'
import swal from 'sweetalert'

const SaveTemplateFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Something is wrong with save template modal, try refreshing the page.", "error")
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default SaveTemplateFallback
