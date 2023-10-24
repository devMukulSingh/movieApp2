import {  getDataFromApi } from "../service/api.js";
import { useEffect, useState } from "react";

const useFetch = (url) => {

    const[loading,setLoading] = useState(null);
    const[data,setData] = useState(null);
    const[error,setError] = useState(null);
    
    useEffect( () => {
        fetchData();
    },[url]);

    const fetchData = async() => {
        try {
                setLoading(true);
                const res = await getDataFromApi(url);
                setData(res);
                setLoading(false);   
            }
            catch (error) {
                setError(`Error in useFetch ${error}`);
            }
        }

    return { loading,data,error } ;
}

export default useFetch;