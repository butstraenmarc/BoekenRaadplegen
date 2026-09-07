//App.jsx
//Deze component is de hoofdcomponent van de applicatie. 
//Hierin worden de andere componenten samengevoegd en de state beheerd.

import { useState } from 'react'
import './boeken.css'
import VerbindingMaken from './components/VerbindingMaken'
import BoekenTabel from './components/BoekenTabel'
import Filters from './components/Filters'

export default function App () {
    
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
        opmerkingen: "",
        jaartal: "", 
        status: "ALLE",
        mode: "AND"
    });
     
    const gefilterd = [...boeken.filter(boek => {
        const matchNat = 
            !filters.nationaliteit || boek.Nationaliteit.toLowerCase().slice(0, filters.nationaliteit.length) === filters.nationaliteit.toLowerCase();
        const matchAuteur =
            !filters.auteurnaam || boek.Auteurnaam.toLowerCase().slice(0, filters.auteurnaam.length) === filters.auteurnaam.toLowerCase();
        const matchOpmerkingen =
            !filters.opmerkingen || boek.Opmerkingen.toLowerCase().slice(0, filters.opmerkingen.length) === filters.opmerkingen.toLowerCase();
        const matchJaar =
            !filters.jaartal || jaarOpzoeken(boek.Opmerkingen) === filters.jaartal;
        let matchGelezen = true; //standaard ALLE boeken
        if (filters.status === "GELEZEN") matchGelezen = boek.Gelezen === -1 || boek.Gelezen === 1;
        if (filters.status === "NIET GELEZEN") matchGelezen = boek.Gelezen === 0;
        return  matchNat && matchAuteur && matchJaar && matchOpmerkingen && matchGelezen
    })];

  return (
    <div>
      <VerbindingMaken onData={setBoeken} />
      <Filters AantalBoeken={boeken.length} AantalGefilterdeBoeken={gefilterd.length} filters={filters} onFilterChange = {setFilters} />
      <BoekenTabel key={JSON.stringify(gefilterd)} boeken={gefilterd} />
    </div>
  );
}
