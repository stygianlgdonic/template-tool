import React, { useState } from 'react'
import RenderSvg from './RenderSvg'
import SearchBar from "./SearchBar"

interface Props {
    svgList: any
    svgListLoading: any
    svgListError: any
    refetchSvgList: any
    setSearchTags: any
}

const SvgListContainer: React.FC<Props> = ({ svgList, svgListLoading, svgListError, refetchSvgList, setSearchTags }) => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchChange = (e) => {
        const text = e.target.value
        setSearchTerm(text)
        const tagsArray = text.match(/([a-zA-Z])\w+/g) || []
        setSearchTags([...tagsArray])
    }

    return (

        <div>
            <div>
                <div>
                    <p className="text-2xl mb-2">Svgs</p>
                </div>
                <div>
                    <SearchBar value={searchTerm} onChange={handleSearchChange} />
                </div>
                <div className=" h-96 overflow-auto">
                    <p className={!!svgListLoading ? "" : "hidden"} >Loading svgs ...</p>
                    <p className={!!svgListError ? "" : "hidden"} >{svgListError}</p>
                    <p className={!!svgList?.error ? "" : "hidden"} >{svgList?.error?.message}</p>
                    <p className={!svgList?.data?.length ? "" : "hidden"} >No svgs to load, add new from below.</p>
                    {svgList?.data?.map(item => (
                        <div key={item._id} className="mb-2" >
                            <RenderSvg svgData={item} refetchSvgList={refetchSvgList} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SvgListContainer
