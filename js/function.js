import {
    countriesList,
    countryInfo
} from './selectors.js';

export function setList(countries) {
	countriesList.innerHTML = '';
	countryInfo.innerHTML = '';

	countries.forEach(item => {
		const listItem = document.createElement('a');
		listItem.setAttribute('href', '');
		listItem.classList.add('list-group-item');
		listItem.innerText = item.country;

		countriesList.appendChild(listItem);
	});
}