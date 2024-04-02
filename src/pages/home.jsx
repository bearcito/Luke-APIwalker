import { useState } from 'react';
import { getCharacters } from '../services/charactersApi';
import ShowResults from '../components/ShowResults';

const Home = () => {
    const [data, setData] = useState([]);
    const [select, setSelect] = useState("people");
    const [error, setError] = useState(false);
    const [id, setId] = useState('');
    const [searchPerformed, setSearchPerformed] = useState(false);

    const apiTipo = ["people", "planets", "species", "starships", "vehicles"];

    const botonFunciona = async () => {
        setError(false); // Resetea el estado de error en cada búsqueda
        try {
            const resultado = await getCharacters(select, id);
            if (resultado.data) {
                setData([resultado.data]); // Asegúrate de ajustar esto basado en cómo tu API devuelve los datos
                setSearchPerformed(true); // Indica que se ha realizado una búsqueda
            } else {
                setData([]); // Limpia los datos si la respuesta no es la esperada
            }
        } catch (error) {
            setError(true);
            console.error(error);
        }
    };

    const changeSelect = (e) => {
        setSelect(e.target.value);
        setSearchPerformed(false); // Resetea el estado de búsqueda al cambiar el tipo de selección
    };

    const changeId = (e) => {
        setId(e.target.value);
        setSearchPerformed(false); // Resetea el estado de búsqueda al cambiar el ID
    };

    return (
        <div>
            <div>
                <label>Search for</label>
                <select value={select} onChange={changeSelect}>
                    {apiTipo.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>ID</label>
                <input type="number" value={id} onChange={changeId} />
                <button onClick={botonFunciona}>Search</button>
            </div>
            <ShowResults data={data} type={select} error={error} searchPerformed={searchPerformed} />
        </div>
    );
};

export default Home;
