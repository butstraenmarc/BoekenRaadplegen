import { useEffect, useState } from 'react'
import './boeken.css'

function App() {
  const [boeken, setBoeken] = useState([])
  const [filter, setFilter] = useState('')
  const [heeftGekozen, setHeeftGekozen] = useState(false)  

  useEffect(() => {
    // Simulate an API call to fetch books
    //fetch ("http://192.168.1.181:8080/boeken.json")
    fetch("https://marbutDS216.synology.me/boeken/boeken.json")
      .then(res => res.json())
      .then(data => {
        const netjes = data.map(boek => ({
          ...boek, Opmerkingen: typeof boek.Opmerkingen === "string" ? boek.Opmerkingen : ""
        }))
        setBoeken(netjes)
      })
      .catch(error => console.error('Error fetching books:', error));
  }, [])

    function vraagNationaliteit() {
      setHeeftGekozen(true)   // vanaf nu mag de tabel getoond worden
      const nat = prompt("Geef een nationaliteit (bv. BE, NL):");
      if (nat === null || nat.trim() === "") {
        // prompt is leeg -> toon alle boeken
        setFilter("");
        return
      } 
      setFilter(nat.trim());
    }

    return (
      <div>
        <button onClick={vraagNationaliteit}>Filter op nationaliteit</button>
        {heeftGekozen && (
           <table className="boekenTabel">
            <thead>
              <tr>
                <th>Auteurnaam</th>
                <th>Nationaliteit</th>
                <th>Boektitel</th>
                <th>Opmerkingen</th>
            </tr>
          </thead>
          <tbody>
            {boeken
              .filter(boek => filter === "" || boek.Nationaliteit.toLowerCase().trim() === filter.toLowerCase().trim())
              .map(boek => (
                <tr key={boek.AuteurNr}>
                  <td>{boek.Auteurnaam}</td>
                  <td>{boek.Nationaliteit}</td>
                  <td>{boek.Boektitel}</td>
                  <td>{typeof boek.Opmerkingen === "string" ? boek.Opmerkingen : JSON.stringify(boek.Opmerkingen)}</td>
                </tr>
              ))}
          </tbody>
        </table>
    )}
    </div>
  )
}

export default App