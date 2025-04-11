import { useState } from "react"
import SearchBar from "./componentes/SearchBar"
import ImageList from "./componentes/ImageList"
import searchImages from "./api"

function App() {
  //searchImages('cars')
  const [images, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('usted esta buscando con :', term)
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <>
      <h1>picture app</h1>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images}/>
    </>
  )
}

export default App
