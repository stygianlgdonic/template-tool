import React, { useState } from 'react'
import swal from 'sweetalert'
import useCategoryList from '../../../../hooks/useCategoryList'
import { category_service } from '../../../../services/categoryService'

const CategoryList = () => {
    const [newCategoryName, setNewCategoryName] = useState<string>("")
    const { categoriesList, error, isLoading } = useCategoryList()

    if (isLoading) {
        return (
            <>
                <p>Getting all categories ...</p>
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

    const handleAddCategory = async (e) => {
        e.preventDefault()
        const res = await category_service.addNewCategory({ name: newCategoryName, templateList: [] })
        console.log({ res })
    }

    const handleDeleteCategory = async (cat) => {
        swal({
            title: "Are you sure?",
            text: `Do you want to delete ${cat.name}?`,
            icon: "warning",
            buttons: ["Cancel", "Confirm"],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                const res = await category_service.deleteCategoryByID(cat.id)
                console.log({ res })
            }
        });
    }

    return (
        <div className="space-y-4 p-5">
            <div>
                {categoriesList?.map((cat, index) =>
                    <div className="flex justify-between">
                        <span key={index} className="block">{cat.name}</span>
                        <button onClick={() => handleDeleteCategory(cat)} className="bg-red text-white rounded p-2 mt-2 mb-2">Delete</button>
                    </div>
                )}
            </div>
            <div className="w-full">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                            className="bg-lightGray hover:bg-gray900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Add new Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryList
