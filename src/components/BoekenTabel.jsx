//BoekenTabel.jsx
//Deze component bevat de tabel waarin de boeken worden weergegeven.

export default function BoekenTabel({ boeken }) {
  return (
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
        {/*
        {boeken.map((boek,index) => (    //we gebruiken de index als key omdat de boekenlijst niet verandert tijdens het renderen, alleen de inhoud van de boeken kan veranderen. Als we een unieke ID hadden, zouden we die gebruiken.
        */}
        {boeken.map(boek => (
          <tr key={boek.AuteurNr}>
            <td>{boek.Auteurnaam}</td>
            <td>{boek.Nationaliteit}</td>
            <td>{boek.Boektitel}</td>
            <td>{boek.Opmerkingen}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}