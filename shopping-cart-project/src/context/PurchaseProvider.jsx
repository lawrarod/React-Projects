import { useReducer } from 'react'
import { PurchaseContext } from './PurchaseContext'

const initialState = []
const ACTIONS = {
    ADD_PRODUCT: 'Add new product',
    DELETE_PRODUCT: 'Delete product',
    INCREASE_QUANTITY: 'Increase quantity',
    DECREASE_QUANTITY: 'Decrease quantity'
}
export const PurchaseProvider = ({ children }) => {

    const { shoppingList, dispatch } = useReducer(reducer, initialState)

    const reducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case ACTIONS.ADD_PRODUCT:
                return [...state, action.payload]
            case ACTIONS.DELETE_PRODUCT:
                return
            case ACTIONS.INCREASE_QUANTITY:
                return
            case ACTIONS.DECREASE_QUANTITY:
                return state.filter(purchase => purchase.id !== action.payload)
            default:
                return state
        }
    }

    const addProduct = (purchase) => {
        const action = {
            type: ACTIONS.ADD_PRODUCT,
            payload: purchase
        }
        dispatch(action)
    }
    const deleteProduct = (id) => {
        const action = {
            type: ACTIONS.DELETE_PRODUCT,
            payload: id
        }
        dispatch(action)
    }
    const increaseQuantity = (id) => {
        const action = {
            type: ACTIONS.INCREASE_QUANTITY,
            payload: id
        }
        dispatch(action)
    }
    const decreaseQuantity = (id) => {
        const action = {
            type: ACTIONS.DECREASE_QUANTITY,
            payload: id
        }
        dispatch(action)
    }

    return (
        <PurchaseContext.Provider value={{ shoppingList, addProduct, deleteProduct, increaseQuantity, decreaseQuantity }}>
            {children}
        </PurchaseContext.Provider>
    )
}
