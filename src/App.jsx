//App.jsx
//Deze component is de hoofdcomponent van de applicatie. 
//Hierin worden de andere componenten samengevoegd en de state beheerd.

import { useState } from 'react'
import './boeken.css'
import VerbindingMaken from './components/VerbindingMaken'
import BoekenTabel from './components/BoekenTabel'
import Filters from './components/Filters'

export default function App () {
    {/*}
    function jaarOpzoeken(opmerkingen) {
        if (typeof opmerkingen !== "string") return null;
        const m = opmerkingen.match(/\b(19|20|25)\d{2}\b/);
        return m ? m[0] : null;   
    }
        */}
    
    function jaarOpzoeken(opmerkingen) {
        if (typeof opmerkingen !== "string") return null;
        const m = opmerkingen.match(/(19|20|25)\d{2}/g);
        if (!m) return null;
        return m[m.length - 1];
    }

    const [boeken, setBoeken] = useState([]);
    const [filters, setFilters] = useState({
        nationaliteit: "",
        auteurnaam: "",
        jaartal: "",
        mode: "AND"
    });


    const gefilterd = boeken.filter(boek => {
        const matchNat = 
            !filters.nationaliteit || boek.Nationaliteit.toLowerCase() === filters.nationaliteit.toLowerCase();
        const matchAuteur =
            !filters.auteurnaam || boek.Auteurnaam.toLowerCase() === filters.auteurnaam.toLowerCase();
        const matchJaar =
            !filters.jaartal || jaarOpzoeken(boek.Opmerkingen) === filters.jaartal;
        return filters.mode === "AND"
            ? matchNat && matchAuteur && matchJaar
            : matchNat || matchAuteur || matchJaar;
    });


  return (
    <div>
      {/* <p>Aantal boeken: {boeken.length}</p> */}
      {/* <p>Aantal gefilterd: {gefilterd.length}</p> */}
      <VerbindingMaken onData={setBoeken} />
      <Filters AantalBoeken={boeken.length} AantalGefilterdeBoeken={gefilterd.length} filters={filters} onFilterChange = {setFilters} />
      <BoekenTabel boeken={gefilterd} />
    </div>
  );

}
