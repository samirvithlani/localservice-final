import { redirect } from "react-router-dom";

export const checkLogin = ()=>{

    alert("checkLogin");

    const id = localStorage.getItem("id");
    if(id===null){

        return redirect("/")
    }
    
    return true;

}