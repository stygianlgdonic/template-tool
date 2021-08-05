import React, { useEffect } from 'react'
import swal from 'sweetalert'

const TemplateListFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Encountered an error while loading categories. Try reloading page.", "error")
            .then(resetErrorBoundary)
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default TemplateListFallback
