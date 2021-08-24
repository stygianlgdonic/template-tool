import React from 'react'
import swal from 'sweetalert'
import * as svg from "../../../../../utils/svg"
import ButtonLoader from '../../../../tailwindComponents/ButtonLoader'

interface Props {
    svgData: {
        _id: string
        svgURL: string
        svgString: string
        tags: string[]
        created_at: string
        updated_at: string
    }
    deleteSvg: any
    deleteSvgLoading: any
}

const RenderSvg: React.FC<Props> = ({ svgData, deleteSvg, deleteSvgLoading }) => {

    const svgUrl = svg.svgToURL(svgData.svgString)

    const handleDeleteSvg = () => {
        swal("Are you sure?", "You want to delete this svg", "warning").then((willDelete) => {
            if (!!willDelete) {
                deleteSvg(svgData._id)
            }
        })
    }

    return (
        <div className="flex justify-between pr-2 pl-2">
            <div>
                <button className="outline-none" style={{ width: 100, height: 100 }} >
                    <img className="border border-gray95" alt="svg" src={svgUrl} />
                </button>
            </div>
            <div className="flex flex-col justify-center">
                <button
                    onClick={handleDeleteSvg}
                    className="bg-redish hover:bg-red600 text-white font-bold py-2 px-4 rounded w-20"
                >
                    {!!deleteSvgLoading ? <ButtonLoader /> : <p>Delete</p>}
                </button>
            </div>
        </div>
    )
}

export default RenderSvg
