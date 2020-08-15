import { GET_IMAGES, SET_LOADING, IMAGE_ERROR, SET_COORDINATES, SET_SHOW_SEARCH_MODAL } from './types';
import axios from 'axios'

export const getImages = (lat, lng, radius) => async dispatch => {
    try {
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
        setLoading()
        const res = await axios.get(`/api/image?lat=${lat}&lng=${lng}&rad=${radius}`, config)
        console.log('qwertyyu',res.data)

        dispatch({
            type : GET_IMAGES,
            payload : res.data
        })

    } catch (err) {
        console.error(err);
        dispatch({
            type : IMAGE_ERROR,
            payload : err.response
        })
    }
}

export const setShowSearchModal = (show) => dispatch => {
    dispatch ({
        type: SET_SHOW_SEARCH_MODAL,
        payload: show
    })
}
export const setCoordinates = (lat, lng) => dispatch => {
    const res = { lat , lng}
    dispatch ({
        type : SET_COORDINATES,
        payload: res
    })
}
export const setLoading = () =>{
    return{
        type : SET_LOADING
    }
}