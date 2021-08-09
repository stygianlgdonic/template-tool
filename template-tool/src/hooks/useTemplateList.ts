import { useQuery } from 'react-query'
import { template_service } from '../services/templateService'

const useTemplateList = () => {
    const { data: templateList, error, isLoading } = useQuery<any, Error>("templates", template_service.getAllTemplates)

    return { templateList, error, isLoading }

}

export default useTemplateList
