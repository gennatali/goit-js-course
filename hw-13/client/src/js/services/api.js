import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import {NOTIFICATION_MESSAGES} from '../utils/constants';

const URL = 'http://localhost:3000/notes';
const notyf = new Notyf();

export const getPosts = () =>{
    return fetch(URL).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Error while fetching' + response.statusText);
    })
};

export const savePost = (post) => {
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    };
    return fetch(URL, opts).then(response => {
        if (response.ok) {
            notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
            return response.json();
        }
        notyf.error(NOTIFICATION_MESSAGES.SERVER_ERROR);
        throw new Error('Error while fetching ' + response.statusText);
    });
};

export const deletePost = (id) => {
    const opts = {
        method: 'DELETE'
    };
    return fetch(`${URL}/${id}`, opts).then(response => {
        if (response.ok) {
            notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
            return response.json();
        }
        notyf.error(NOTIFICATION_MESSAGES.SERVER_ERROR);
        throw new Error('Error while fetching ' + response.statusText);
    });
};

export const updatePost = (id, updatedPost) => {
    const opts = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
    };
    return fetch(`${URL}/${id}`, opts).then(response => {
        if (response.ok) {
            return response.json();
        }
        notyf.error(NOTIFICATION_MESSAGES.SERVER_ERROR);
        throw new Error('Error while fetching ' + response.statusText);
    });
};