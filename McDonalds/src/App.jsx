import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'

function App() {
  return (
      <div>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidos a MCDonald's"/>
      </div>
  )
}

export default App
