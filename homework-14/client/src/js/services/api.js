import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import {NOTIFICATION_MESSAGES} from '../utils/constants';
import axios from 'axios';

const URL = 'http://localhost:3000/notes';
axios.defaults.baseURL = 'http://localhost:3000/notes';
const notyf = new Notyf();

export const getPosts = async() => {
    try{
        const response = await fetch(URL);
        const post = await response.json();
        return post;
    }catch(error){
        throw error ('Error while fetching' + response.statusText);
    }
};

export const savePost = async (post) => {
    try {
       const response = await axios.post('', post);
       notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
       return response;
    }catch(error){
        throw error ('Error while fetching' + response.statusText);
    }
};

export const deletePost = async(id) => {
    try {
        const response = await axios.delete(`/${id}`);
        notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
        return response;
    }catch(error){
        notyf.error(NOTIFICATION_MESSAGES.SERVER_ERROR);
        throw error('Error while fetching ' + response.statusText);
    }

};

export const updatePost = async (id, updatedPost) => {
    try {
        const response = await axios.patch(`/${id}`, updatedPost);
        return response;
    }catch(error){
        notyf.error(NOTIFICATION_MESSAGES.SERVER_ERROR);
        throw error('Error while fetching ' + response.statusText);
    }
}


// export const updatePost = (id, updatedPost) => {
//     const opts = {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updatedPost)
//     };
//     return fetch(`${URL}/${id}`, opts).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         notyf.error(NOTIFICATION_MESSAGES.SERVER_ERROR);
//         throw new Error('Error while fetching ' + response.statusText);
//     });
// };