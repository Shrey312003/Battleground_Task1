import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetch = async () => {
            try{
                const data1 = await axios.get(url);

                setData(data1);
                setLoading(false);
                setError(null);

                console.log(data1);
                
            }catch(error){
                console.log(error);
                setError(error);
                setLoading(false);
            }
        }

        fetch();
    },[url])
    return ( 
        {data,loading,error}
    );
}
 
export default useFetch;