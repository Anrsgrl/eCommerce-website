import axios from 'axios'
import { Base_Url } from './Config'


const shopApi={
    getProducts :async function (){
        const{data}=await axios(`${Base_Url}products`);
        return data
    },
    getProductsById:async function(id){
        const {data}=await axios (`${Base_Url}produtcs/${id}`);
        return data
    }
}
export default shopApi