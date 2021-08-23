import { useQuery } from 'react-query'
import { category_service } from '../services/categoryService'

const useCategoryList = () => {
    const { data, error, isLoading } = useQuery<any, Error>("categories", category_service.getAllCategories)

    return { categoryList: data, categoryListError: error, categoryListLoading: isLoading }

}

export default useCategoryList
