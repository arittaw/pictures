import axios from "axios";

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=P1r4ZcwLWP_T-kvZh3qyil20FH7IPZ93_CN1RiFATwI'

    const response = await axios.get(url,{
        params: {
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages