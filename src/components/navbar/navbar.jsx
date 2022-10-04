import logo from '../../assets/logo.png'
import './navbar.css'

export default function Navbar({setSearch}) {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Rick and Morty Logo" />
                <h1>Rick and Morty</h1>
            </div>
            
            <div className="search">
                <input 
                type="text" 
                placeholder="Buscar personagem"
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
                />
            </div>
        </header>
    )
}