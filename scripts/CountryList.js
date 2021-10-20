import { useCountries } from './CountryDataProvider.js';
import { Country } from './ui/Country.js';

export const CountryList = () => {
  const countryList = document.querySelector('.countries');

  const countries = useCountries();

  countryList.innerHTML = "<h1>Countries</h1>"

  countries.forEach( country => {
    countryList.innerHTML += Country(country);
  });
}

