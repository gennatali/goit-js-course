import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS} from '../utils/constants';
import Notepad from '../Notepad/notepad-model';
import initialNotes from '../../assets/notes.json';
const notepad = new Notepad(initialNotes);


export const refs = {
    list: document.querySelector('.note-list'),
    submitBtn: document.querySelector('.button'),
    formEditor: document.querySelector('.note-editor'),
    formSearch: document.querySelector('.search-form'),
}

const createActionButton = (NOTE_ACTIONS, ICON_TYPES) => {
    const actionButton = document.createElement('button');
    actionButton.classList.add('action');
    actionButton.dataset.action = `${NOTE_ACTIONS}`;

    const iconButton = document.createElement('i');
    iconButton.classList.add('material-icons');
    iconButton.classList.add('action__icon');
    iconButton.textContent = `${ICON_TYPES}`;

    actionButton.appendChild(iconButton);
    return actionButton;
}

const createNoteFooter = () => {
    const noteFooter = document.createElement('footer');
    noteFooter.classList.add('note__footer');

    const noteSection1 = document.createElement('section');
    noteSection1.classList.add('note__section');

    const noteSection2 = document.createElement('section');
    noteSection2.classList.add('note__section');

    const spanNote = document.createElement('span');
    spanNote.classList.add('note__priority');
    spanNote.textContent = `Priority: ${PRIORITY_TYPES.LOW}`;

    noteSection1.append(createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN), createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP));
    noteSection1.appendChild(spanNote);
    noteFooter.append(noteSection1);
    noteSection2.append(createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT), createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE));
    noteFooter.append(noteSection2);

    return noteFooter;
}

export const createListItem = ({id, title, body}) => {
    const listItem = document.createElement('li');
    listItem.classList.add('note-list__item');
    listItem.dataset.id = id;

    const note = document.createElement('div');
    note.classList.add('note');

    const noteContent = document.createElement('div');
    noteContent.classList.add('note__content');

    const noteTitle = document.createElement('h2');
    noteTitle.classList.add('note__title');
    noteTitle.textContent = title;

    const noteBody = document.createElement('p');
    noteBody.classList.add('note__body');
    noteBody.textContent = body;

    note.appendChild(noteContent);
    noteContent.append(noteTitle, noteBody);

    listItem.append(note, createNoteFooter());

    return listItem;
}

export const renderListItems = (listRef, notes) => {
    const listItems = notes.map(item => createListItem(item));
    listRef.innerHTML = '';
    listRef.append(...listItems);
  }
  
export const removeListItem = element => {  
const itemToRemove = element.closest('.note-list__item');
const idToRemove = itemToRemove.dataset.id;
notepad.deleteNote(idToRemove);
itemToRemove.remove();
}
