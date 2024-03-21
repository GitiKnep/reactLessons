import {useNavigate} from 'react-router-dom'

const Login = () => {


let nav = useNavigate()

let name="name"

const cheackIsValid=()=>{
    
 if (name.length < 2  /*||/^[^\d]+$/.test(name)*/)
    return 

    nav('/home/'+name)


}
    return ( 
        <div>
            שם
        <input type="text" onChange={(e)=>name=e.target.value}></input>
        <input type="submit" onClick={cheackIsValid}></input>
        </div>
     );
}
 
export default Login;