const settings = {
	async: true,
	crossDomain: true,
	url: 'https://open-weather13.p.rapidapi.com/city/landon/EN',
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a7804bc651msh2fc47f27e644636p199557jsn27b24b81fa70',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});