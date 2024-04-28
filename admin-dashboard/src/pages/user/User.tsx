import { Single } from '../../components/singlePage/Single'
import { singleUser } from '../../data'

export const User = () => {
    return (
        <div className='user'><Single {...singleUser} /></div>
    )
}
