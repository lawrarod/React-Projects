import './topBox.scss'
import { topDealUsers } from '../../data';

export const TopBox = () => {
  return (
    <div className='topBox'>
      <h2>Top Deals</h2>
      <div className="list">
        {topDealUsers.map(user => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="user image" />
              <div className="userTexts">
                <span className="userName">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">€{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
