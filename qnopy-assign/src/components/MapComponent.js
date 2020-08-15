
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import { Modal, Button } from "react-bootstrap";
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setCoordinates, setShowSearchModal } from '../actions/imageAction'
import { Link } from 'react-router-dom';

const MapComponent = ({ google, setCoordinates, setShowSearchModal}) => {
    const initialCenter = {lat : 41.8512 , lng: -87.61}
    const [showModal, setShow] = useState(false);
    const [ lat, setLat] = useState(initialCenter.lat)
    const [ lng, setLng] = useState(initialCenter.lng)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const mapStyle= {
        width: '100%',
        height: '80%'
    }
    const getCoord = (coord) => {
        const { latLng } = coord
        setLat(latLng.lat())
        setLng(latLng.lng())
        handleShow()
    }
    const onCapture = (e) => {
        handleClose()
        setCoordinates(lat, lng)
        setShowSearchModal(true)
    }
    
    return (
        <div>
            <Map
                google={google}
                zoom={8}
                style={mapStyle}
                initialCenter={initialCenter}
            >
            <Marker
            draggable={true}
            onDragend={(t, map, coord) => getCoord(coord)}
            onClick={handleShow} />
            </Map>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Capture Coordinates</Modal.Title>
                </Modal.Header>
                <Modal.Body>Move the pin to set location and then click Capture below</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Link to='/' variant="primary" onClick={onCapture}>
                    Capture
                </Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default connect(null, { setCoordinates, setShowSearchModal}) (GoogleApiWrapper({
    apiKey:'AIzaSyAw6Hw9ovl3zQk3yYpmHGiL5EqTLA8SAA8'
})(MapComponent))

