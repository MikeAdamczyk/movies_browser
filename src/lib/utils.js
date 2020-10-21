export const getProductionYear = (releaseDate) => {
    const productionYear = (new Date(releaseDate)).getFullYear();
    return productionYear;
};

export const getFormattedDate = (date) => {
    const formattedDate = (new Date(date)).toLocaleDateString();
    return formattedDate;
};

export const getProductionCountries = (countries) => {
    const productionCountries = [];

    countries.forEach(country => {
        const productionCountry = country.name;
        productionCountries.push(productionCountry);
    });
    return productionCountries;
};