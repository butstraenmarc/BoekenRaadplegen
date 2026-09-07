//Filters.jsx
//Deze component bevat het formulier voor het filteren van de boekenlijst.

export default function Filters({ AantalBoeken, AantalGefilterdeBoeken, filters, onFilterChange }) {
    
    function handleChange(e) {
        const {name, value} = e.target;
        
        onFilterChange({
            ...filters,
           [name]: value
        });
    }

    return (
        <div className="filterFormulier">

            <div className="filterRij">
                <label className="filterLabel">Nationaliteit:</label>
                <input className="filterInputNationaliteit"
                    type="text"
                    name="nationaliteit"
                    //placeholder="Nationaliteit"
                    value={filters.nationaliteit}
                    onChange={handleChange}
                />
                <label className="aantalBoeken">Aantal: {AantalBoeken}</label>
            </div>

            <div className="filterRij">
                <label className="filterLabel">Auteurnaam:</label>
                <input className="filterInputAuteurnaam"
                    type="text"
                    name="auteurnaam"
                    //placeholder="Auteurnaam"
                    value={filters.auteurnaam}
                    onChange={handleChange}
                />
                <label className="aantalBoeken">Gefilterd: {AantalGefilterdeBoeken}</label>
            </div>

            <div className="filterRij">
                <label className="filterLabel">Opmerkingen:</label>
                <input className="filterInputOpmerkingen"
                    type="text"
                    name="opmerkingen"
                    //placeholder="opmerkingen"
                    value={filters.opmerkingen}
                    onChange={handleChange}
                />
            </div>

            <div className="filterRij">
                <label className="filterLabel">Jaartal:</label>
                <input className="filterInputJaartal"
                    type="text"
                    name="jaartal"
                    //placeholder="Jaartal"
                    value={filters.jaartal}
                    onChange={handleChange}
                />
            </div>

            <div className="filterRij">
                <label className="filterLabel">Status:</label>
                <label>
                    <input
                        type="radio"
                        name="status"
                        value="ALLE"
                        checked={filters.status === "ALLE"}
                        onChange={handleChange}
                    />
                    Alle boeken
                </label>
                <label>
                    <input
                        type="radio"
                        name="status"
                        value="GELEZEN"
                        checked={filters.status === "GELEZEN"}
                        onChange={handleChange}
                    />
                    Gelezen
                </label>
                <label>
                    <input
                        type="radio"
                        name="status"
                        value="NIET GELEZEN"
                        checked={filters.status === "NIET GELEZEN"}
                        onChange={handleChange}
                    />
                    Niet gelezen
                </label>
            </div>
        </div>
    );
}
    