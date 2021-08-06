import React, { useState } from 'react'

const CategoryList = () => {
    const [newCategoryName, setNewCategoryName] = useState<string>("")

    const handleAddCategory = () => {
        console.log({ newCategoryName })
    }

    return (
        <div className="space-y-4 p-5">
            <span className="block">Category 1</span>
            <span className="block">Category 2</span>
            <span className="block">Category 3</span>
            <div className="w-full">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter category name"
                            value={newCategoryName}
                            onChange={(e) => setNewCategoryName(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleAddCategory}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Add new Category
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default CategoryList
