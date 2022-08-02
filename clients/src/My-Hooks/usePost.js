import axios from "axios";
import { url } from "react";
import { useEffect, useState } from "react"


const post =[{
  filename:{},
  
  filesender:{},
  email:{}

}]

function usePost() {
    const[inc,sendInc]=useState([])
    const[loading,setLoading]=useState(false);
    const[error,findError]=useState(null);
    useEffect(()=>{
        setLoading(true);
        axios
        .post(url,{post})
        .then((req)=>{sendInc(req.inc)})
        .catch(()=>{findError(error)})
        .finally(()=>{setLoading(false)}),
        [url]
    });

    const resend=()=>{
             setLoading(true);
          alert(`resend data`);
        axios
        .post(url)
        .then((res)=>{sendInc(res.inc)})
        .catch(()=>{findError(error)})
        .finally(()=>{setLoading(false)}),
        [url]
    }
  return {inc,loading,error,resend,post}
}

export default usePost