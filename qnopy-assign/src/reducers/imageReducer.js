import { GET_IMAGES, SET_LOADING, IMAGE_ERROR, SET_COORDINATES,SET_SHOW_SEARCH_MODAL } from '../actions/types'

const initialState = {
    lat: null,
    lng: null,
    images: null,
    showSearchModal: false,
    loading:  false,
    error: null
}

export default (state = initialState , action) => {
    switch(action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload,
                loading: false
            }

        case SET_COORDINATES:
            return {
                ...state,
                lat: action.payload.lat,
                lng : action.payload.lng
            }

        case SET_SHOW_SEARCH_MODAL:
            return {
                ...state,
                showSearchModal: action.payload
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case IMAGE_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}