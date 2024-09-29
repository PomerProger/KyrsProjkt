import React from 'react';
import { Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={"light"}>
                {/* Исправленная ошибка: из "scr" в "src" */}
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
            </Card>
            <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                <div>     </div>
                <div className="d-flex align-items-center">


                </div>
            </div>
            <div>{device.name}</div>
        </Col>
    );
};

export default DeviceItem;