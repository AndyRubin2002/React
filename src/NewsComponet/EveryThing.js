import { useEffect, useState } from "react";


export function EveyThing(){
    const [NewsAll,SetNewsAll] = useState([]);
    
        let EveyThing =()=>{
            const search = document.getElementById("s").value;
            fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=2f74f2e347f24ac8b36a54a6a862e4d7`).then((response)=>{
                response.json().then((data)=>{
                    SetNewsAll(data.articles);
                })
            }).catch((error)=>{
                console.log(error);
            })
        }

        return(
            <>
                
            </>
        );
}