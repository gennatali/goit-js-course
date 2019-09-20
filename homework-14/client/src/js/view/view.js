import noteTemplate from '../../templates/notes.hbs';


const createNoteMarkup = note => {
    return noteTemplate(note);
};

const createNoteListMarkup = notes => {
    return notes.map(note => noteTemplate(note)).join('');
};

export const renderListItems = (listRef, notes) => {
    listRef.innerHTML = '';
    listRef.insertAdjacentHTML('beforeend', createNoteListMarkup(notes));
};

export const renderListItemsSearch = (listRef, notes) => {
    listRef.innerHTML = '';
    listRef.insertAdjacentHTML('beforeend', createNoteListMarkup(notes));
};

export const createListItem = (listRef, note) => {
    const listItem = createNoteMarkup(note);
    listRef.insertAdjacentHTML('beforeend', listItem);
};

export const findClosestNote = element => {
    const noteClosest = element.closest('.note-list__item');
    return noteClosest;
};

export const removeListItem = listItem => {
    listItem.remove();
};

export const refs = () => ({
    list: document.querySelector('.note-list'),
    openModalBtn : document.querySelector('.page-header__button'),
    formEditor: document.querySelector('.note-editor'),
    formSearch: document.querySelector('.search-form'),
});

export default {renderListItems,renderListItemsSearch,  createListItem, findClosestNote, removeListItem, refs};