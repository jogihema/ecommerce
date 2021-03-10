
const initialState = {
    product: {}
}

export default function Product_Reducer ( state = initialState,action ) {

    switch (action.type) {
        case 'Product_Details':
            return{
                ...state,
                ...action.payload
            }
        default:
            return{
                ...state
            }
    }

}
