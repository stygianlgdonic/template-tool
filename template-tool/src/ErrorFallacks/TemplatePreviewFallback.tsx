import React, { useEffect } from 'react'
import swal from 'sweetalert'

const TemplatePreviewFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "This Template might be corrupted", "error")
            .then(resetErrorBoundary)
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default TemplatePreviewFallback
