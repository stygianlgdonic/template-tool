import React, { useEffect } from 'react'
import swal from 'sweetalert'
import { stageDimensions } from '../utils/defaults'

const MainStageFallback = ({ error, resetErrorBoundary }) => {
    useEffect(() => {
        swal("Oops!", "The template you selected might be corrupted", "error")
            .then(resetErrorBoundary)
    }, [])
    return (
        <div style={{ width: stageDimensions.width, height: stageDimensions.height }}>
            {error.message}
        </div>
    )
}

export default MainStageFallback
