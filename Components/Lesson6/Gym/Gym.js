import { useState } from "react"
import './Gym.css'
function Gym() {
    
    const[user, setUser]=useState({name:"",email:"",kindSubsciption:""})
    const[isRegistered, setisRegistered]=useState(false)
    const[isSubscription, setisSubscription]=useState(false)
    const submitSigned=(e)=>{
        e.preventDefault()
        setisRegistered(true)
        
    }

    const [subAds,setSubAds]=useState(false)
  

    return <>

    <div className={isSubscription?'classSi':isRegistered?'classRe':'gym'}>
        <h1>חדר הכושר שלי</h1>
        <h3>בחדר הכושר שלנו תמצאו הכל משיעורים פרטיים עד למכשור הכי חדיש</h3>
        <h2><label>אני רוצה להרשם</label><br/></h2>
       
            <p>מלא את הפרטים:</p>
            <p>שם: <input type='text' onChange={(e)=>{setUser({...user,name:e.target.value})}}></input></p>
            <p>אימייל:<input type='email' onChange={(e)=>{setUser({...user,email:e.target.value})}}></input></p>
           <input type='button' value="נרשמתי!" onClick={submitSigned}></input>

      
        {isRegistered&&<>
        <h2>שלום {user.name} {user.email}</h2>
       <ul>
        <li><input type="button" value="מנוי שנתי" onClick={(e)=>{ setisSubscription(true);setUser({...user,kindSubsciption:e.target.value})}}></input></li>
        <li><input type="button" value="מנוי חצי שנתי" onClick={(e)=>{ setisSubscription(true);setUser({...user,kindSubsciption:e.target.value})}}></input></li>
        <li><input type="button"  value="10 שיעורים" onClick={(e)=>{ setisSubscription(true);setUser({...user,kindSubsciption:e.target.value})}}></input></li>
        </ul>
       <p>{isSubscription&&'בחרת במסלול '+user.kindSubsciption}</p>
       <p><label>אני רוצה לקבל מיילים ועדכונים</label><input type='checkbox' onChange={()=>{setSubAds(!subAds)}} ></input></p>
       { subAds&&<p>אוקי, נשלח לך עידכונים!</p>}

        </>}
        
        </div>
    </>
}
export default Gym