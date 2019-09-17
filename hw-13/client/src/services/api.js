const URL = 'http://localhost:3000/notes';

export const getPosts = () => {
    return fetch(URL).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Error while fetching' + response.statusText);
    })
};

