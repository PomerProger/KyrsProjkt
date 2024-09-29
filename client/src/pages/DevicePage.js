import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";


const DevicePage = () => {
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneDevice(id).then(data=> setDevice(data))
    }, [id]);



    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column m-3">
                        <h3>{device.name}</h3>
                        <h1>Характеристики</h1>
                        {device.info.map((info, index) =>
                            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                                {info.title}: {info.description}
                            </Row>
                        )}
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 400, height: 150, fontSize: 5, border: '1px solid lightgray'}}
                    >
                        <h3>Цена: {device.price} руб.</h3>
                        <h6>Наличие</h6>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;