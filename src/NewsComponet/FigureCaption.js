import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


export function FigureCaption(){
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
        <Container>
            <ul>
                {
                    getWeather.map((artical,index)=>{
                        return(
                            <li key={index}>{artical.title}</li>
                        )
                    })
                }
            </ul>
        </Container>
        </>
    );
}