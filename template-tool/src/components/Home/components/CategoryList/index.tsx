import React, { useState } from 'react'
import { useQuery } from 'react-query'
import swal from 'sweetalert'
import { category_service } from '../../../../services/categoryService'

const CategoryList = () => {
    const [newCategoryName, setNewCategoryName] = useState<string>("")
    const { data: categoriesList, error: categoryError, isLoading: categoryLoading } = useQuery<any, Error>("categories", category_service.getAllCategories)

    if (categoryLoading) {
        return (
            <>
                <p>Getting all categories ...</p>
            </>
        )
    }

    if (!!categoryError) {
        return (
            <>
                <p>{categoryError.message}</p>
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
                {categoriesList?.data?.map((cat) =>
                    <div key={cat.id} className="flex justify-between mt-1 mb-1">
                        <span className="block">{cat.name}</span>
                        <button onClick={() => handleDeleteCategory(cat)} className="bg-redish hover:bg-red600 text-white font-bold py-2 px-4 rounded">Delete</button>
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
