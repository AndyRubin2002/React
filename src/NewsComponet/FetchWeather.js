import { useEffect, useState } from "react";
import { Container,Alert, Table } from "react-bootstrap";


export function FetchWeather(){
    const [getCity,setCity] = useState("");
    const [getTemp,setTemp] = useState("");
    const [getRegion,setRegion] = useState("");
    const [getCountry,setCountry] = useState("");
    const [getweather,setWeather] = useState("");
    
   function fetchWe(){
        const city = document.getElementById("city").value;
        fetch(`http://api.weatherapi.com/v1/current.json?key=8495bbeeb55b4d2eb65131752252005&q=${city}&aqi=no`).then((response)=>{
            response.json().then((data)=>{
                console.log(data)
                setWeather(data.current.condition.text);
                setTemp(data.current.temp_c);
                setCity(data.location.name)
                setRegion(data.location.region);
                setCountry(data.location.country);
            })
        })
    }
    return(<div>
        <Container className="mt-3">
             <Alert variant="success" className="text-center"><h1 style={{color:"black"}}>Weather Api</h1></Alert>
        </Container>
         <Container className="mt-3 mr-3 ml-3">
        <input type="text" placeholder="Enter the city name" id="city" name="city" />
        <button id="btn" onClick={fetchWe}>Click</button>
        </Container>
        <Container>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>City Name</th>
          <th>Region</th>
          <th>Country</th>
          <th>temp_c</th>
          <th>weather</th>
        </tr>
      </thead>
      <tbody>
        <td>{getCity}</td>
        <td>{getRegion}</td>
        <td>{getCountry}</td>
        <td>{getTemp}</td>
        <td>{getweather}</td>
      </tbody>
    </Table>
        </Container>
    </div>);
}