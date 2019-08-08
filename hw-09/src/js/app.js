'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

// ------------------------------------------------------------------------------------------------------

class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };

  addItem(input, textarea) {
    const newItem = {
      id : Notepad.generateUniqueId(),
      title : input,
      body : textarea,
      priority : PRIORITY_TYPES.LOW,
    }
    this._notes.push(newItem);
    return newItem;
  };

  search(value){
    return this._notes.filter(el => el.body.toLowerCase().includes(value.toLowerCase()));
  }

  static generateUniqueId = () => 
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

  saveNote(note) {
    this._notes.push(note);
    return note;
  };

  findNoteById(id) {
    let noteById = {};
    for (let key of this._notes) {
      if (key.id === id) {
        noteById = key;
        return noteById;
      }
    }
    return undefined;
  };

  updateNotePriority(id, priority) {
    let noteToUpdatePriority = this.findNoteById(id);
    noteToUpdatePriority.priority = priority;
    return noteToUpdatePriority;
  };

  filterNotesByQuery(query) {
    let notesbyQuery = [];
    for (let key of this._notes) {
      if (key.title.toLowerCase().includes(query.toLowerCase()) || key.body.toLowerCase().includes(query.toLowerCase())) {
        notesbyQuery.push(key);
      }
    }
    return notesbyQuery;
  };

  filterNotesByPriority(priority) {
    let notesbyPriority = [];
    for (let key of this.notes) {
      if (key.priority === priority) {
        notesbyPriority.push(key);
      }
    }
    return notesbyPriority;
  };

  updateNoteContent(id, updatedContent) {
    let noteToUpdate = this.findNoteById(id);
    const updatedNote = {
      ...noteToUpdate,
      ...updatedContent
    };
    this._notes.splice(this._notes.indexOf(noteToUpdate), 1, updatedNote);
    return updatedNote;
  };

  deleteNote(id) {
    let noteToDelete = this.findNoteById(id);
    this._notes.splice(this._notes.indexOf(noteToDelete), 1);
  };
};
// ------------------------------------------------------------------------------------------------------

const initialNotes = [{
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const notepad = new Notepad(initialNotes);
const allNotes = notepad.notes;

console.log('Все текущие заметки: ', allNotes);

// --8 HOMEWORK-----------------------------------------------------------------------------------------------------

const refs = {
  list : document.querySelector('.note-list'),
  submitBtn : document.querySelector('.button'),
  formEditor : document.querySelector('.note-editor'),
  formSearch : document.querySelector('.search-form'),
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

const createListItem = ({id, title, body}) => {
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

const renderListItems = (listRef, notes) => {
  const listItems = notes.map(item => createListItem(item));
  listRef.innerHTML = '';
  listRef.append(...listItems);
}

const removeListItem = element => {  
  const itemToRemove = element.closest('.note-list__item');
  const idToRemove = itemToRemove.dataset.id;
  notepad.deleteNote(idToRemove);
  itemToRemove.remove();
}

const handleAddItem = event => {
  event.preventDefault();
  const [input, textarea] = event.target.elements;
  if(input.value.trim() === '' || textarea.value.trim() === ''){
    return alert('Необходимо заполнить все поля!');
  }
  const inputValue = input.value;
  const inputTextarea = textarea.value;
  const newItem = notepad.addItem(inputValue, inputTextarea);

  const renderItem = createListItem(newItem);
  console.log(renderItem);
  
  refs.list.append(renderItem);
  refs.formEditor.reset();
}

const handleListBtn = ({target}) => {
  if(target.nodeName !== 'I') return;
  const action = target.closest('button').dataset.action;
  if(action === NOTE_ACTIONS.DELETE){
    removeListItem(target);
  } 
}

const handleSearch = event => {
  const findItem = notepad.search(event.target.value);
  renderListItems(refs.list, findItem);
}

renderListItems(refs.list, allNotes);
refs.formEditor.addEventListener('submit', handleAddItem);
refs.list.addEventListener('click', handleListBtn);
refs.formSearch.addEventListener('input', handleSearch);


