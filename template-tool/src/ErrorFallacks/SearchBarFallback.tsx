import React, { useEffect } from 'react'
import swal from 'sweetalert'

const SearchBarFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "Something is wrong with Search, try reloading the page.", "error")
            .then(resetErrorBoundary)
    }, [])
    return (
        <div>
            {error.message}
        </div>
    )
}

export default SearchBarFallback
