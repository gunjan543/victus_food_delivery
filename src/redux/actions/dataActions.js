import axios from "../../util/axios";
import axiosNewInstance from "axios";

export const fetchRestaurantsByAddress = (lat,lng) => (dispatch) =>{
    dispatch({ type: "LOADING_DATA"});
    axios
    .get(`/restaurants-location/${lat}/${lng}`)
    .then((res) =>{
        dispatch({
            type: "SET_RESTAURANTS",
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
        type: "SET_RESTAURANTS",
        payload: [],
    });
});
};