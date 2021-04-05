const initialState = {
    restaurants: [],
    restaurant: {},
    cart: [],
    price: "",
    loading: false,
    addCartSuccess: null,
    deleteSuccessItem: null,
    orders: [],
  };

  export default function (state = initialState, action) {
    switch (action.type) {
        case "LOADING_DATA":
            return{
                ...state,
                loading:true
            };
        case "SET_RESTAURANTS":
            return{
                ...state,
                loading:false,
                restaurants:action.payload,
            };
        default:
            return state;    
        }
    }