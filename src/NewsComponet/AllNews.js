import { useEffect, useState } from "react";

 import { Container,Alert,Col,Row,Card } from "react-bootstrap";

export function AllNews(){
    const [NewsAll,SetNewsAll] = useState([]);

    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=2f74f2e347f24ac8b36a54a6a862e4d7').then((response)=>{
            response.json().then((data)=>{
                SetNewsAll(data.articles);
            })
        }).catch((error)=>{
            console.log(error);
        })
    },[])
    return(
      <Container className="mt-3">
        <Container>
             <Alert variant="success"><h1 style={{color:"black"}}>Todays All News</h1></Alert>
    </Container>
         <Container className="mt-3">
            <Row>
                {
                    NewsAll.map((article)=>{
                        return(
                            <Col lg={4} md={6} sm={12} >
                            <Card>
                                <Card.Img variant="top" src={article.urlToImage} />
                                <Card.Body>
                                <Card.Text>
                                   {article.content}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        );

                    })
                }
            </Row>
         </Container>
    </Container> 
    );
}