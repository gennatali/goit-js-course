import {Notyf} from 'notyf';
import MicroModal from 'micromodal';
import viewFn from './view/view';
import {NOTE_ACTIONS, NOTIFICATION_MESSAGES} from './utils/constants';
import Notepad from './Notepad/notepad-model';
import 'notyf/notyf.min.css';
import storageFn from './Storage/storageFn';

const notepad = new Notepad();
const notyf = new Notyf();
const refs = viewFn.refs();

notepad.get().then(notes => {
  viewFn.renderListItems(refs.list, notes);
});

const handleOpenModal = () => {
  MicroModal.show('note-editor-modal');

  const noteInput = storageFn.get('noteInput');
  const noteTextarea = storageFn.get('noteTextarea');
  if (noteInput || noteTextarea) {
    const [input, textarea] = refs.formEditor.elements;
    input.value = noteInput;
    textarea.value = noteTextarea;
  }
};

const handleNoteStorageSet = event => {
  const [input, textarea] = event.currentTarget.elements;
  storageFn.set('noteInput', input.value);
  storageFn.set('noteTextarea', textarea.value);
}

const handleSubmitItem = event => {
  event.preventDefault();
  const [input, textarea] = event.target.elements;
  if (input.value.trim() === '' || textarea.value.trim() === '') {
    return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  }
  const noteInput = input.value;
  const noteTextarea = textarea.value;
  notepad.addItem(noteInput, noteTextarea)
    .then(note => viewFn.createListItem(refs.list, note))
    .catch(console.error);
  // notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);

  storageFn.remove('noteInput');
  storageFn.remove('noteTextarea');
  event.currentTarget.reset();

  MicroModal.close('note-editor-modal');
};

const handleListBtn = ({target}) => {
  if (target.nodeName !== 'I') return;
  const action = target.closest('button').dataset.action;
  if (action === NOTE_ACTIONS.DELETE) {
    const noteToDelete = viewFn.findClosestNote(target);
    notepad.deleteNote(noteToDelete.dataset.id);
    viewFn.removeListItem(noteToDelete);
    // return notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
  }
};

const handleSearch = event => {
  viewFn.renderListItems(refs.list, notepad.filterNotesByQuery(event.target.value));
};

refs.formEditor.addEventListener('submit', handleSubmitItem);
refs.formEditor.addEventListener('keyup', handleNoteStorageSet);
refs.list.addEventListener('click', handleListBtn);
refs.formSearch.addEventListener('input', handleSearch);
refs.openModalBtn.addEventListener('click', handleOpenModal);