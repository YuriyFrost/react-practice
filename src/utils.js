// const urlKey = 'https://front-test.beta.aviasales.ru/search'

// export const getJSON = async (url) => {
//     let errCounter = 0
//     const request = async () => {
//         try {
//             if (!localStorage.getItem('key')) {
//                 const data = await fetch(urlKey).then(response => response.json())
//                 localStorage.setItem('key', data.searchId)
//             }
//             const response = await fetch(`${url}?searchId=${localStorage.getItem('key')}`)
//             return await response.json()

//         } catch (error) {
//             errCounter += 1
//             localStorage.removeItem('key')
//             if (errCounter === 5) {
//                 throw new Error(error)
//             }
//             return await request()
//         }
//     }
//     return await request()
// }

export const getJSON = async() => {
    try {
        const response = await fetch('http://localhost:3001/api/server')
        return await response.json()
    } catch (error) {
        alert(error)
    }
}
