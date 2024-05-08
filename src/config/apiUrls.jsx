
const baseUrl = "https://unityeng-backend.onrender.com"

// const baseUrl = "http://localhost:8080"

export const apiUrl = {
    "webDetails": {
        'addWebDetails': `${baseUrl}/api/add/webdetails`,
        'getWebDetails': `${baseUrl}/api/get/webDetails`
    },
    "contactUs": `${baseUrl}/api/add/contact`,
    "product": {
        "addProduct": `${baseUrl}/api/add/product`,
        "getAllProduct": `${baseUrl}/api/get/allProductData`,
        "getProduct":`${baseUrl}/api/get/Product`
    },
    "ourTeam":{
        "addTeam":`${baseUrl}/api/add/pathmaker`,
        "getTeam":`${baseUrl}/api/get/pathmaker`
    }
}