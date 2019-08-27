import {PRIORITY_TYPES} from '../utils/constants';
import shortid from 'shortid';

export default class Notepad {
    constructor(notes) {
      this._notes = notes;
    }
  
    get notes() {
      return this._notes;
    }
  
    addItem(input, textarea) {
      const newItem = {
        id : shortid.generate(),
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