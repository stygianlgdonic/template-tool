import React, { useState } from 'react'
import RenderSvg from './RenderSvg'

interface Props {
    svgList: any
    svgListLoading: any
    svgListError: any
    deleteSvg: any
    deleteSvgLoading: any
}

const SvgListContainer: React.FC<Props> = ({ svgList, svgListLoading, svgListError, deleteSvg, deleteSvgLoading }) => {

    const [searchTags, setSearchTags] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    // const { data: searchedSvgs, error: searchedSvgsError, isLoading: searchedSvgsLoading } = useQuery<any, Error>(
    //     "svgSearch", () => svg_service.searchSvgsByTags([...searchTags])
    // )

    return (
        <div className="w-full">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* <div className={!!searchedSvgs?.data?.length ? "" : "hidden"} >
                <div>
                    Search results
                </div>
                <div>
                    {searchedSvgs?.data?.map(item => (
                        <RenderSvg key={item._id} svgData={item} />
                    ))}
                </div>
            </div> */}
                <div
                // className={!!searchedSvgs?.data?.length ? "hidden" : ""}
                >
                    <div>
                        <p className="text-2xl mb-2">Svgs</p>
                    </div>
                    <div className=" h-96 overflow-auto">
                        <p className={!!svgListLoading ? "" : "hidden"} >Loading svgs ...</p>
                        <p className={!!svgListError ? "" : "hidden"} >{svgListError}</p>
                        <p className={!!svgList?.error ? "" : "hidden"} >{svgList?.error?.message}</p>
                        <p className={!svgList?.data?.length ? "" : "hidden"} >No svgs to load, add new from below.</p>
                        {svgList?.data?.map(item => (
                            <div key={item._id} className="mb-2" >
                                <RenderSvg svgData={item} deleteSvg={deleteSvg} deleteSvgLoading={deleteSvgLoading} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SvgListContainer
