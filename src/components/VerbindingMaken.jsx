//VerbindingMaken.jsx
//Deze component maakt de verbinding met de NAS en haalt de gevens op. 
//De data wordt doorgegeven aan de parent component via de onData prop.
import { useEffect } from "react";

export default function VerbindingMaken({ onData }) {
  useEffect(() => {
    fetch("https://marbutDS216.synology.me/boeken/boeken.json")
      .then(res => res.json())
      .then(data => {
        const netjes = data.map(b => ({
          ...b,
          Opmerkingen: typeof b.Opmerkingen === "string" ? b.Opmerkingen : ""
        }));
        onData(netjes);
      })
      .catch(err => console.error("Fout bij laden:", err));
  }, [onData]);

  return null;
}