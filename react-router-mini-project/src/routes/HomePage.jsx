import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {
  const { user } = useContext(UserContext)
  return (
    <>
      <h3>HomePage</h3>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope="column">Name</th>
            <th scope="column">Surname</th>
            <th scope="column">Technology</th>
            <th scope="column">Mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{user.name}</th>
            <td>{user.surname}</td>
            <td>{user.technology}</td>
            <td>{user.mail}</td>
          </tr>
          <tr>
            <th scope="row">{user.name}</th>
            <td>{user.surname}</td>
            <td>{user.technology}</td>
            <td>{user.mail}</td>
          </tr><tr>
            <th scope="row">{user.name}</th>
            <td>{user.surname}</td>
            <td>{user.technology}</td>
            <td>{user.mail}</td>
          </tr><tr>
            <th scope="row">{user.name}</th>
            <td>{user.surname}</td>
            <td>{user.technology}</td>
            <td>{user.mail}</td>
          </tr><tr>
            <th scope="row">{user.name}</th>
            <td>{user.surname}</td>
            <td>{user.technology}</td>
            <td>{user.mail}</td>
          </tr><tr>
            <th scope="row">{user.name}</th>
            <td>{user.surname}</td>
            <td>{user.technology}</td>
            <td>{user.mail}</td>
          </tr>
        </tbody>
      </table>


    </>
  )
}
