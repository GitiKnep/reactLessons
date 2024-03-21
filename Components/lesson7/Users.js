import { useEffect , useState} from 'react'
import { useLinkClickHandler } from 'react-router-dom'
import Person from './Person'
import Search from './Search'

const Users = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {goToServer()}, [])

    const goToServer = (txt) => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        if(txt)
        url+='?id='+txt
        fetch(url)
            .then(response => response.json())
            .then(res => setUsers(res) )
            .catch(err => console.log(err))
    }
    return (<div>    
  <Search onSearch={goToServer}></Search>
    {users.length==0&& <h1>not found</h1>}
    <ul>{ users.map(item=>{return <li key={item.id}><Person p={item}></Person></li>})}</ul>
</div>)
}
export default Users;