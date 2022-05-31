import axios from 'axios'
class Employ{
   
    getEmployee(){
        return axios.get('http://localhost:3000/posts'); 
    }
}

export default new Employ();