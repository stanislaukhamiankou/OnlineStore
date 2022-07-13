import { ITechnique } from 'src/redux/technique/type'
import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/Fetcher'

const fetcher = new Fetcher()

export const requestTechniqueInfoAPI = () => 
    fetcher.requestToReceive<ITechnique, ITechnique[]>({
        url: 'http://localhost:3000/technique',
        method: HTTP_METHODS.GET,
})