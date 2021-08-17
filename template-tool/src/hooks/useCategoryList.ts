import { useQuery } from 'react-query'
import { category_service } from '../services/categoryService'

const useCategoryList = () => {
    const { data: categoriesList, error, isLoading } = useQuery<any, Error>("categories", category_service.getAllCategories)

    return { categoriesList, error, isLoading }

}

export default useCategoryList
