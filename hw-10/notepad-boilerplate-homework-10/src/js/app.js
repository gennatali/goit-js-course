import {refs, createListItem, renderListItems, removeListItem} from './view/view';
import {NOTE_ACTIONS} from './utils/constants';
import Notepad from './Notepad/notepad-model';
import initialNotes from '../assets/notes';
const notepad = new Notepad(initialNotes);


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
  
  renderListItems(refs.list, initialNotes);
  refs.formEditor.addEventListener('submit', handleAddItem);
  refs.list.addEventListener('click', handleListBtn);
  refs.formSearch.addEventListener('input', handleSearch);




