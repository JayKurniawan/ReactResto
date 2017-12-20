import apisauce from 'apisauce'

const create = (baseURL = 'https://developers.zomato.com/api/v2.1/') => {
    const api = apisauce.create({
        baseURL,
        headers:{
            'Cache-Control': 'no-cache',
            'user-key': '0f929cccab4622bf301895bc0d9dd415',
            'Accept' : 'application/json'
        },
        // 10 sec
        timeout: 10000
    })

    /*
    // request for categories
    const getCategories = () => api.get('categories')

    // request for restaurants based on selected category
    const getRestaurants = (cityId, categoryId) => api.get('search?entity_id='+ cityId +'&entity_type=city&category='+ categoryId )

    // request for resturants detail
    const getRestaurantsDetail = (restoId) => api.get('restaurant?res_id'+restoId)

    return{
        getCategories,
        getRestaurants,
        getRestaurantsDetail
    }
    */

    const invokeRequest = (path, type, body) => {
        var JSON = {}
        if(type === 'GET'){
            return api.get(path)
        }
    }

    return{
        invokeRequest
    }
}

export default{
    create
}