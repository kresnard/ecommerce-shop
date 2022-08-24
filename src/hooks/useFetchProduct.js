import { useEffect, useState } from "react";
import api from "api";

export const useProducts = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState([]);

    const getAllProduct = async () => {
        try {
            setIsLoading(true);
            const res = await api.getAll();
            setData(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllProduct()   
    }, [])
    


    return{isLoading, data};
};

export const useDetailProduct = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ data, setData ] = useState([]);
    

    const getProductDetail = async id => {
        try {
            setIsLoading(true);
            const res = await api.getById(id);
            // console.log('data', data)
            setData(res.data);
            // console.log('res', res)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false);
        }
    };

    return[isLoading, data, getProductDetail];
};

