import './characters.css'

export default function Characters(props) {
    return (
        <main className="characters">
            {
                props.characters.map((char, index) => {
                    return (
                        <div className="character" key={index}>
                            <img src={char.image} alt="Imagem" />
                            <h2>{char.name}</h2>
                            <div className="character-data">
                                <p>Name: {char.name}</p>
                                <p>Species: {char.species}</p>
                                <p>Status: {char.status}</p>
                                <p>Gender: {char.gender}</p>
                            </div>
                        </div>
                    )
                })
            }
        </main>
    )
}