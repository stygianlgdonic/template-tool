import React, { useState } from 'react'
import SearchBar from './SearchBar'
import TemplatePreview from './TemplatePreview'
import { ErrorBoundary } from 'react-error-boundary'
import SearchBarFallback from '../../../../ErrorFallacks/SearchBarFallback'
import TemplatePreviewFallback from '../../../../ErrorFallacks/TemplatePreviewFallback'
import useTemplateList from '../../../../hooks/useTemplateList'
import useCategoryList from '../../../../hooks/useCategoryList'
import { titleCase } from '../../../../utils/titleCase'

const TemplateList = () => {

    const { templateList, error: templateError, isLoading: templateLoading } = useTemplateList()
    const { categoriesList, error: categoryError, isLoading: categoryLoading } = useCategoryList()
    const [categoryFilter, setCategoryFilter] = useState<any>(null)

    if (templateLoading) {
        return (
            <>
                <p>Getting all templates ...</p>
            </>
        )
    }

    if (!!templateList.error) {
        return (
            <>
                <p>{templateList.error.message}</p>
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
                            <ErrorBoundary
                                FallbackComponent={SearchBarFallback}
                                onReset={() => { }}
                            >
                                <SearchBar />
                            </ErrorBoundary>

                        </div>
                    </div>
                    <div className=" flex gap-4 mt-3 px-6">
                        {categoriesList?.map((cat, index) =>
                            <button
                                key={index}
                                onClick={() => setCategoryFilter(!!categoryFilter ? null : cat)}
                                className={"rounded-md px-4 py-1 h-10 " + (categoryFilter?.id === cat.id ? "text-white bg-indigo700" : "bg-lightindigo text-indigo700 ")}>
                                {titleCase(cat.name)}
                            </button>
                        )}

                    </div>
                    <div>
                        <h1 className="text-xl font-bold mt-6 px-6 text-gray94">Your Templates</h1>
                    </div>
                    <div className="pl-6 mt-4 flex flex-row flex-wrap gap-4">
                        {templateList.data?.map((item, index) => {
                            if (!!categoryFilter) {
                                if (item.categoryId === categoryFilter.id) {
                                    return (
                                        <div key={index} >
                                            <ErrorBoundary
                                                FallbackComponent={TemplatePreviewFallback}
                                                onReset={() => { }}
                                            >
                                                <TemplatePreview templateObj={item} />
                                            </ErrorBoundary>
                                        </div>
                                    )
                                }
                            } else {
                                return (
                                    <div key={index} >
                                        <ErrorBoundary
                                            FallbackComponent={TemplatePreviewFallback}
                                            onReset={() => { }}
                                        >
                                            <TemplatePreview templateObj={item} />
                                        </ErrorBoundary>
                                    </div>
                                )
                            }
                        })}


                    </div>
                </div>
            </>
        </div>
    )
}

export default TemplateList
