import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";


export function FetchTable(){

    const [getWeather,setWeather] = useState([]);
    
        useEffect(()=>{
            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2f74f2e347f24ac8b36a54a6a862e4d7').then((response)=>{
                response.json().then((data)=>{
                    setWeather(data.articles);
                })
            })
        },[])

    return(
        <>
        
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>author</th>
            <th>title</th>
             <th>publishedAt</th>
            <th>content</th>
            <th>refernce</th>
        </tr>
      </thead>
      <tbody>
        {
                    getWeather.map((artical)=>{
                        return(
                            <tr>
                                 <td>{artical.author}</td>
                                <td>{artical.title}</td>
                                <td>{artical.publishedAt}</td>
                                <td>{artical.content}</td>
                                <td><a href={artical.url}>click</a></td>
                            </tr>
                        )
                    })
                }
      </tbody>
    </Table>

        </>
    );
}