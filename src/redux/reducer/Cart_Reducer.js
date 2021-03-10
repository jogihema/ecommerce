const initialState = {
    products: []
}

export default function Cart_Reducer(state = initialState, action) {

    switch (action.type) {
        case 'Add_ToCart':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return {
                ...state
            }
    }

}