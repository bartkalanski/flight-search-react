import axios from "axios";

const Skyscanner = axios.create({
  baseURL:
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/UK/GBP/en-GB/",
  headers: {
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    "x-rapidapi-key": "10519e3170mshfad2e75acb40046p1fdba8jsnca5e5cac79cd",
  },
});

export default Skyscanner;
