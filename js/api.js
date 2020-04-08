class CovidAPI {
    constructor(url) {
        this.url = url.trim();
    }

    getCountries() {
        return fetch(`${this.url}/countries`).then(response => response.json());
    }

    getTotal() {
        return fetch(`${this.url}/all`).then(response => response.json());
    }

    getCountryInfo(country) {
        if(!country) throw new Error('Country name is required');
        
        return fetch(`${this.url}/countries/${country}`).then(response => response.json());
    }
}

export default CovidAPI;