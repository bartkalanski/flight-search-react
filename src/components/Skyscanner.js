import axios from 'axios'

axios({
        "method": "GET",
        "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "10519e3170mshfad2e75acb40046p1fdba8jsnca5e5cac79cd",
            "useQueryString": true
        },
        "params": {
            "query": "Stockholm"
        }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })