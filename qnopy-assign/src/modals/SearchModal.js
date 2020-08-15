import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Modal, Button } from "react-bootstrap";
import { setShowSearchModal, getImages } from '../actions/imageAction'


const SearchModal = ({ image, setShowSearchModal, getImages }) => {

    const { lat, lng } = image
    const [ radius, setRadius ] = useState('')
    const onHide = () => {
        setShowSearchModal(false)
    }
    const searchImages= () =>{
        const radiusInMt = radius/3.28
        getImages(lat, lng, radiusInMt)
        setShowSearchModal(false)
    }
    return (
        <Modal show={image.showSearchModal} onHide={onHide}>
                <Modal.Header closeButton>
                <Modal.Title>Advanced Search for pictures</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <h6>Add Location to the search</h6>
                    <label >Coordinates</label>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" value={lat !== null && lng !== null ? lat + ','+ lng : ''} aria-label="Username" aria-describedby="basic-addon1"/>
                        <Link to='/mapComponent' type="button" class="btn btn-primary" onClick={() => setShowSearchModal(false)} >Get</Link>
                    </div>
                    <div>
                        <label >Search Radius (feet)</label>
                        <input value={radius} onChange={(e) => setRadius(e.target.value)} type="text" class="form-control"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <button className='btn' variant="primary" onClick={searchImages}>
                    Search
                </button>
                </Modal.Footer>
            </Modal>
        // <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        //     <div class="modal-dialog modal-dialog-centered" role="document">
        //         <div class="modal-content">
        //         <div class="modal-header">
        //             <h5 class="modal-title" id="exampleModalLongTitle">Advanced Search for pictures</h5>
        //             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        //             <span aria-hidden="true">&times;</span>
        //             </button>
        //         </div>
                // <div class="modal-body">
                //     <h6>Add Location to the search</h6>
                //     <label >Coordinates</label>
                //     <div class="input-group mb-3">
                //         <input type="text" class="form-control" value={lat} aria-label="Username" aria-describedby="basic-addon1"/>
                //         <Link to='/mapComponent' type="button" class="btn btn-primary" >Get</Link>
                //     </div>
                //     <div>
                //         <label >Search Radius (feet)</label>
                //         <input type="text" class="form-control"/>
                //     </div>
                // </div>
        //         <div class="modal-footer">
        //             <button type="button" class="btn btn-primary">Search</button>
        //         </div>
        //         </div>
        //     </div>
        // </div>
    )
}
const mapStateToProps = state => ({
    image: state.image
})

export default connect(mapStateToProps,  { setShowSearchModal, getImages } ) (SearchModal)
