const getDataFromApi = () => {
    return fetch('/shop.data.json')
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
};

export default getDataFromApi;
