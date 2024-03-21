import { useRef } from 'react'
const Search = ({onSearch}) => {

    const searchRef = useRef()

    return (<>
     <input type="text" placeholder="הקש קוד משתמש" ref={searchRef}></input>
        <button onClick={()=>onSearch(searchRef.current.value)}>חפש </button> 
        </>)
}

export default Search;