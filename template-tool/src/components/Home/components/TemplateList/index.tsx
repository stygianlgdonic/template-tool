import React from 'react'
import SearchBar from './SearchBar'
import { useQuery } from 'react-query'
import { template_service } from '../../../../services/templateService'
import TemplatePreview from './TemplatePreview'

const TemplateList = () => {

    const { data, error, isLoading } = useQuery<any, Error>("templates", template_service.getAllTemplates)
    console.log({ data })

    if (isLoading) {
        return (
            <>
                <p>Getting all templates ...</p>
            </>
        )
    }

    if (!!error) {
        return (
            <>
                <p>{error.message}</p>
            </>
        )
    }

    return (
        <div className="space-y-4 p-5">
            <>
                {/*content*/}
                <div className="relative flex  h-full flex-col w-full  outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex"  >
                        <div className="flex items-start justify-between w-full p-5 border-b border-solid border-bordercolor rounded-t">
                            <div>

                                <h3 className="text-2xl text-gray94 font-semibold">
                                    Select Template
                                </h3>
                            </div>
                            <div className="flex flex-row">

                                <div className="flex flex-row px-2 text-gray900 border-2 h-8 w border-bordercolor rounded-md  mr-2">
                                    <button className="pr-2 text-sm">Most Popular </button>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/*body*/}
                    <div className="w-full flex justify-center">

                        <div className="mt-3 w-3/6 ">
                            <SearchBar />

                        </div>
                    </div>
                    <div className=" flex gap-4 mt-3 px-6">
                        <button className="bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10">Employes</button>
                        <button className="bg-lightindigo text-indigo700 rounded-md px-3 py-1 h-10">Events</button>
                        <button className="bg-lightindigo text-indigo700 rounded-md px-4 py-1 h-10">Promotion</button>
                        <button className="bg-lightindigo text-indigo700 rounded-md px-3 py-1 h-10">Property</button>

                    </div>
                    <div>
                        <h1 className="text-xl font-bold mt-6 px-6 text-gray94">Your Templates</h1>
                    </div>
                    <div className="pl-6 mt-4 flex flex-row flex-wrap gap-4">
                        {data.map((item, index) => {
                            return (
                                <div key={index} >
                                    <TemplatePreview templateObj={item} />
                                </div>
                            )
                        })}


                    </div>
                </div>
            </>
        </div>
    )
}

export default TemplateList
