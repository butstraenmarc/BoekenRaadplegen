//BoekenTabel.jsx
//Deze component bevat de tabel waarin de boeken worden weergegeven.

{/*
export default function BoekenTabel({ boeken, filters }) {
  if (!filters) return null;

  const { nationaliteit, auteurnaam, jaartal, mode } = filters;

  const gefilterd = boeken.filter(boek => {
    const matchNat =
      !nationaliteit ||
      boek.Nationaliteit.toLowerCase().includes(nationaliteit.toLowerCase());

    const matchAuteur =
      !auteurnaam ||
      boek.Auteurnaam.toLowerCase().includes(auteurnaam.toLowerCase());

    const matchJaar =
      !jaartal ||
      boek.Opmerkingen.includes(jaartal);

    return mode === "AND"
      ? matchNat && matchAuteur && matchJaar
      : matchNat || matchAuteur || matchJaar;
  });
*/}

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