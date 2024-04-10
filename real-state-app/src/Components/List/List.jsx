import { listData } from '../../lib/dummydata'
import { Card } from '../Card/Card'
import './list.scss'

export const List = () => {
    return (
        <div className='list'>
            {listData.map(item => (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}
