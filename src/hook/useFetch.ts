import axios from "axios";
import { useState,useEffect } from "react";
import { RAPID_API_KEY } from "../../env"
import { Alert } from "react-native";

const rapidApiKey =RAPID_API_KEY

const useFetch =(endpoint:string,query) =>{
    const [data,setDate] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
    const fetchData = async () => {
        setIsLoading(true)
        try{
            const response = await axios.request
            (options);
            setDate(response.data.data);
            setIsLoading(false);
        } catch(e){
            setError(error)
            console.error(error)

        }finally{
            setIsLoading(false);
        }
    }     

    useEffect(() =>{
        fetchData();
        
    },[]);

    const refetch =() =>{
        setIsLoading(true);
        fetchData();
    }
    return {data,isLoading,error, refetch};
}

export default useFetch;