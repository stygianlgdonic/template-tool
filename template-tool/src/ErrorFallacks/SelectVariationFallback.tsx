import React, { useEffect } from 'react'
import swal from 'sweetalert'

const SelectVariationFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Something is wrong, try reloading the page.", "error")
            .then(resetErrorBoundary)
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default SelectVariationFallback
