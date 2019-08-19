import { Notyf } from 'notyf';
import MicroModal from 'micromodal';
import {refs, createListItem, renderListItems, removeListItem, findClosestNote} from './view/view';
import {NOTE_ACTIONS, NOTIFICATION_MESSAGES} from './utils/constants';
import Notepad from './Notepad/notepad-model';
import initialNotes from '../assets/notes';
import 'notyf/notyf.min.css';

const notepad = new Notepad(initialNotes);
const notyf = new Notyf();

const handleOpenModal = () => {
  MicroModal.show('note-editor-modal');
}

const handleSubmitItem = event => {
    event.preventDefault();
    const [input, textarea] = event.target.elements;
    if(input.value.trim() === '' || textarea.value.trim() === ''){
      return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    }
    const inputValue = input.value;
    const inputTextarea = textarea.value;
    const newItem = notepad.addItem(inputValue, inputTextarea);
    createListItem(refs.list, newItem);
    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    MicroModal.close('note-editor-modal');
    refs.formEditor.reset();
  };
  
  const handleListBtn = ({target}) => {
    if(target.nodeName !== 'I') return;
    const action = target.closest('button').dataset.action;
    if(action === NOTE_ACTIONS.DELETE){
      const noteToDelete = findClosestNote(target);
      notepad.deleteNote(noteToDelete.dataset.id);
      removeListItem(noteToDelete);
      return notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
    } 
  };
  
  const handleSearch = event => {
    const findItem = notepad.search(event.target.value);
    renderListItems(refs.list, findItem);
  };
  
  renderListItems(refs.list, initialNotes);
  refs.formEditor.addEventListener('submit', handleSubmitItem);
  refs.list.addEventListener('click', handleListBtn);
  refs.formSearch.addEventListener('input', handleSearch);
  refs.openModalBtn.addEventListener('click', handleOpenModal)