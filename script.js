const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '181c2440f4msh7194f7f212a1f33p1272eejsnec83bb431ba8',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));