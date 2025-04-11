import { useState } from "react"
import './SearchBar.css'

const SearchBar = ({onSubmit}) => {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log('necesito el componente sopbre los datos')
        onSubmit(term)
    }

    const handlechange = (event) => {
        setTerm(event.target.value)
    }
     
    console.log('term',term)
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label >Termino de la busqueda </label>
        <input onChange={handlechange} value={term}/>
      </form>
    </div>
  )
}

export default SearchBar

