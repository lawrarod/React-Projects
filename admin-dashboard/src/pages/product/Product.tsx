import { Single } from '../../components/singlePage/Single'
import './product.scss'
import { singleProduct } from '../../data'

export const Product = () => {
    return (
        <div className='product'><Single {...singleProduct} /></div>
    )
}
