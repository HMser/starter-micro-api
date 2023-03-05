const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://truecaller2.p.rapidapi.com/findPhone',
  params: {phone: '972547332554'},
  headers: {
    'X-RapidAPI-Key': '5ad4824f82msh9cc7d5dda81bd47p15854ajsn7630c9bdef0c',
    'X-RapidAPI-Host': 'truecaller2.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
