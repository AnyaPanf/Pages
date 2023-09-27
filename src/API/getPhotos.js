import axios from "axios"

export const getPhotos = async () => {
    let { data } = await axios('https://jsonplaceholder.typicode.com/photos')
    return data
}
getPhotos()

