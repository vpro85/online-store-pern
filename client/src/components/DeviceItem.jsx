import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card className="m-1" style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image className="m-1" width={140} height={140} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="d-flex text-black-50 mt-1 justify-content-between align-items-center">
                    <div>{device.name}</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating} </div>
                        <img width={18} height={18} src={star} alt='star'/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;