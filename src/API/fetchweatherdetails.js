const apiKey = process.env.REACT_APP_API_KEY;
const fetchWeatherDetails = (city, zipcode) => {
    return new Promise ((resolve, reject) => {
        const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        const location = city ? `${city}` : `${zipcode}`;
        const api = `${baseUrl}?q=${location}&APPID=${apiKey}`
        const xhr =  new XMLHttpRequest();
        xhr.open('GET', api, true )
        xhr.onload = () =>{
            if(xhr.status >= 200 && xhr.status < 300){
                const response = JSON.parse(xhr.response);
                resolve(response)
            }else{
                console.error('Request failed with status:', xhr.status);
                reject(xhr.status)
            }
        }
        xhr.send()
    })
}

export { fetchWeatherDetails };
