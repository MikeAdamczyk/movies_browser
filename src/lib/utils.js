export const getProductionYear = (releaseDate) => {
    const productionYear = (new Date(releaseDate)).getFullYear();
    return productionYear;
};