import { useQuery } from 'react-query'
import { template_service } from '../services/templateService'

const useTemplateList = () => {
    const { data, error, isLoading } = useQuery<any, Error>("templates", template_service.getAllTemplates)

    return { templateList: data, templateListError: error, templateListLoading: isLoading }

}

export default useTemplateList
