async function getdata(){
    //có sẵn
const url = 'https://airvisual1.p.rapidapi.com/v2/auto-complete?q=vietnam&x-user-lang=en-US&x-user-timezone=Asia%2FSingapore&x-aqi-index=us&x-units-pressure=mbar&x-units-distance=kilometer&x-units-temperature=celsius';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5a3d5ba0a8mshfdad541974e3df4p141cd6jsn9075db58abfe',
		'X-RapidAPI-Host': 'airvisual1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
//thêm vô
    let data =JSON.parse(result)
    console.log(data);
    document.getElementById("text").textContent=data.data.cities[0].currentMeasurement.aqius
    document.getElementById("text").textContent=data.data.cities[0].currentMeasurement.aqius
    document.getElementById("text").textContent=data.data.cities[0].currentMeasurement.aqius

//thêm vô
} catch (error) {
	console.error(error);
}
//có sẵn
}
getdata()

