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

export const getReports = ({params, onSuccess, onError} = {}) => {
    axios.get('/reports', {params})
      .then(response => {
        onSuccess(response.data);
      })
      .catch(error => {
        onError(error);
      })
}