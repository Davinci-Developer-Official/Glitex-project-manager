import { useState,useEffect } from "react"
import axios from 'axios'
import { url } from "inspector"//eslint disable inspector

//this is a custom hook to simplyfy gettikng data from an api.
function useFetch() {
  const [data , setData]=useState(null);
  const[loading , setLoading]=useState(false);
  const [error,setError]= useState(null)
  useEffect(()=>{
    setLoading(true);
    axios//using axios module + promises.
    .get(url).then((res)=>{
        setData(res.data);//gets response data from api
    })
    .catch(()=>{
      setError(error);//catches errors 
    })
    .finally(()=>{
      setLoading(false)//determins if the api is loading
    }),
    [url] //dependency array ie if url changes we request new data.
    
  });


  const refetch = ()=>{
    setLoading(true);
    axios.get(url).then((res)=>{
        setData(res.data);//gets response data from api
    }).catch(()=>{
      setError(error);//catches errors 
    }).finally(()=>{
      setLoading(false)//determins if the api is loading
    }),
    [url] //
  }

  return {data,loading,error,refetch}
}

export default useFetch;