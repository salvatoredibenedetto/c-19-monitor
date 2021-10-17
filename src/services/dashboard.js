import axios from 'axios'

export const getRegions = ({params, onSuccess, onError} = {}) => {
    
    axios.get('/regions', {params})
      .then(response => {
        onSuccess(response.data);
      })
      .catch(error => {
        onError(error);
      })

}