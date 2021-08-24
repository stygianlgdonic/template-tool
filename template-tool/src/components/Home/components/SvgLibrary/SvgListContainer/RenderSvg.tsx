import React from 'react'
import { useMutation } from 'react-query'
import swal from 'sweetalert'
import { svg_service } from '../../../../../services/svgService'
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
    refetchSvgList: any
}

const RenderSvg: React.FC<Props> = ({ svgData, refetchSvgList }) => {
    const svgUrl = svg.svgToURL(svgData.svgString)

    const { mutate: deleteSvg, isLoading: deleteSvgLoading, error: errorDeleteSvg } = useMutation(
        (SVG_ID: string) => svg_service.deleteSvgByID(SVG_ID), {
        onSuccess: (data, variables, context) => {
            refetchSvgList()
        }
    })

    const handleDeleteSvg = () => {
        swal("Are you sure?", "You want to delete this svg", "warning").then((willDelete) => {
            if (!!willDelete) {
                deleteSvg(svgData._id)
            }
        })
    }

    return (
        <div className="bg-white shadow-md rounded px-6 py-6">
            <div className="flex justify-between pr-2 pl-2">
                <div>
                    <button className="outline-none">
                        <img alt="svg" src={svgUrl} height={100} style={{ height: 100, objectFit: "contain" }} />
                    </button>
                </div>
                <div className="flex flex-col justify-center">
                    <button
                        onClick={handleDeleteSvg}
                        disabled={!!deleteSvgLoading}
                        className="bg-redish hover:bg-red600 text-white font-bold py-2 px-4 rounded w-20"
                    >
                        {!!deleteSvgLoading ? <ButtonLoader /> : <p>Delete</p>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RenderSvg
