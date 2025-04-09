import SearchBar from "./assets/componentes/SearchBar"
import ImageList from "./assets/componentes/ImageList"
import searchImages from "./api"

function App() {
  searchImages('cars')
  return (
    <>
      <h1>picture app</h1>
      <SearchBar/>
      <ImageList/>
    </>
  )
}

export default App
