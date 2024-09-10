import axios from "axios"
const Api =async (word) => {
const response =await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data=response.data
    return (data)
}

export default Api
