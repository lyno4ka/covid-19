import { setList } from './function.js';

import {
	countriesList,
	countryInfo,
	searchField
} from './selectors.js';

import CovidAPI from './api.js';

const api = new CovidAPI('https://coronavirus-19-api.herokuapp.com');

api.getTotal().then(response => {
	console.log(response);
});

let countries = [];

api.getCountries().then(response => {
	countries = response;

	setList(countries);
});

// api.getCountryInfo().then(response => {
// 	console.log(response);
// });

countriesList.addEventListener('click', function(event) {
	event.preventDefault();

	if (!event.target.classList.contains('list-group-item')) {
		return;
	}

	const countryName = event.target.innerText;

	api.getCountryInfo(countryName).then(country => {
		countryInfo.innerHTML = `<h2>${country.country}</h2>
	 <dl>
	 <dt>Всего случаев</dt>
	 <dd><span class="badge">${country.cases}</span></dd>
	 <dt>Заболеваний сегодня</dt>
	 <dd><span class="badge">${country.todayCases}<span></dd>
	 <dt>Всего смертей</dt>
	 <dd><span class="badge">${country.deaths}</span></dd>
	 <dt>Смертей сегодня</dt>
	 <dd><span class="badge">${country.todayDeaths}</span></dd>
	 </dl>`;
	});

	// const country = countries.find((item) => {
	// 	return item.country === countryName;
	// });
	// console.log(country);

});

searchField.addEventListener('input', function() {
	const value = this.value.toLowerCase();

	const filteredCountries = countries.filter(item => item.country.toLowerCase().startsWith(value));

	setList(filteredCountries);
});