import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { NavLink } from 'react-router-dom'
import CategoryListFallback from '../../ErrorFallacks/CategoryListFallback'
import TemplateListFallback from '../../ErrorFallacks/TemplateListFallback'
import { ROUTE_NAMES } from '../../routes/route_names'
import CategoryList from './components/CategoryList'
import TemplateList from './components/TemplateList'

const navLinksList = ["categories", "templates"]

const Home = () => {

    const [selectedNavLink, setSelectedNavLink] = useState<string>(navLinksList[0])

    return (
        <div className="min-w-max">
            {/* HEADER */}
            <div className="h-20 mb-5 flex flex-wrap justify-evenly content-center bg-gray900">
                <div></div>
                <p className="text-xl text-white">Home</p>
                <NavLink
                    to={ROUTE_NAMES.select_palette}
                    className="text-white font-semibold py-2 px-4 border border-white-500 rounded" >
                    Create New Template
                </NavLink>
            </div>
            {/* HEADER END */}

            <div>


                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <div
                        style={{ minHeight: "80vh" }}
                        className="w-64 absolute sm:relative shadow flex-col justify-between flex">
                        <div className="p-8">
                            {/* 
                            <div className="h-16 w-full flex items-center">
                                    LOGO HERE
                            </div>
                            */}
                            <ul className="mt-12">
                                <li
                                    onClick={() => setSelectedNavLink(navLinksList[0])}
                                    className="flex w-full bg-gray300 justify-between hover:text-gray-900 cursor-pointer items-center mb-6">
                                    <div className="flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm  h-10">
                                        <p className="text-gray900 font-medium pl-3">Categories</p>
                                    </div>
                                </li>
                                <li
                                    onClick={() => setSelectedNavLink(navLinksList[1])}
                                    className="flex w-full bg-gray300 justify-between text-gray900 hover:text-gray-900 cursor-pointer items-center mb-6">
                                    <div className="flex items-center  hover:bg-rightbackgroundcolor  w-full hover:rounded-lg border-0 rounded-sm h-10">
                                        <p className="text-gray900 font-medium pl-3">Templates</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Sidebar ends */}
                    <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
                        {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                        <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                            <div className={selectedNavLink === navLinksList[0] ? "" : "hidden"}>
                                <ErrorBoundary
                                    FallbackComponent={CategoryListFallback}
                                    onReset={() => { }}
                                >
                                    <CategoryList />
                                </ErrorBoundary>
                            </div>
                            <div className={selectedNavLink === navLinksList[1] ? "" : "hidden"}>
                                <ErrorBoundary
                                    FallbackComponent={TemplateListFallback}
                                    onReset={() => { }}
                                >
                                    <TemplateList />
                                </ErrorBoundary>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
