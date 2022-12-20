import React, {useContext} from 'react';
import {Button, Modal} from "react-bootstrap";
import {Context} from "../../index";
import "../../styles/BuyDevice.css"

const BuyDevice = ({show, onHide}) => {
    const {devices} = useContext(Context);
    if(devices.basket.length !== 0){  /*изменить qr*/
        return (
            <Modal show={show} onHide={onHide} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Для завершения покупки отсканируйте QR-Code</Modal.Title>
                </Modal.Header>
                <Modal.Body><img src='https://images-ext-1.discordapp.net/external/WxSTU_EjwsCcvCuLzg7N5e1KGicrpk6-jPUEH2Z912Q/https/i.pinimg.com/736x/60/c1/4a/60c14a43fb4745795b3b358868517e79.jpg?width=468&height=468' className='qr'></img></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onHide}>
                        Хорошо
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
};

export default BuyDevice;