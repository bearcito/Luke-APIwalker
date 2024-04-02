import axios from "axios";

export const getCharacters = async (select, id) => {
    const response = await axios.get(`https://swapi.dev/api/${select}/${id}`);
    // console.log(response)
    // console.log(select)
    return response

}
