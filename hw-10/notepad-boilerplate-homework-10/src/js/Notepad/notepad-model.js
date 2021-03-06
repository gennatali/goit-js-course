import {PRIORITY_TYPES} from '../utils/constants';
import shortid from 'shortid';

export default class Notepad {
    constructor(notes) {
      this._notes = notes;
    }
  
    get notes() {
      return this._notes;
    }
  
    // static Priority = {
    //   LOW: 0,
    //   NORMAL: 1,
    //   HIGH: 2,
    // };
  
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
  
    // static generateUniqueId = () => 
    // Math.random()
    //   .toString(36)
    //   .substring(2, 15) +
    // Math.random()
    //   .toString(36)
    //   .substring(2, 15);
  
    saveNote(note) {
      this._notes.push(note);
      return note;
    };
  
    findNoteById(id) {
      // let noteById = {};
      // for (let key of this._notes) {
      //   if (key.id === id) {
      //     noteById = key;
      //     return noteById;
      //   }
      // }
      // return undefined;
      return this._notes.find(note => note.id === id) ;
    };
  
    updateNotePriority(id, priority) {
      let noteToUpdatePriority = this.findNoteById(id);
      noteToUpdatePriority.priority = priority;
      return noteToUpdatePriority;
    };
  
    filterNotesByQuery(query) {
      let notesbyQuery = [];
      // for (let key of this._notes) {
      //   if (key.title.toLowerCase().includes(query.toLowerCase()) || key.body.toLowerCase().includes(query.toLowerCase())) {
      //     notesbyQuery.push(key);
      //   }
      // }
      const keyQuery = this._notes.filter(key => key.title.toLowerCase().includes(query.toLowerCase()) || key.body.toLowerCase().includes(query.toLowerCase()));
      notesbyQuery.push(keyQuery);
      return notesbyQuery;
    };
  
    filterNotesByPriority(priority) {
      let notesbyPriority = [];
      // for (let key of this.notes) {
      //   if (key.priority === priority) {
      //     notesbyPriority.push(key);
      //   }
      // }
      const keyPriority = this._notes.filter(key => key.priority === priority);
      notesbyPriority.push(keyPriority);     
      return notesbyPriority;
    };
  
    updateNoteContent(id, updatedContent) {
      // let noteToUpdate = this.findNoteById(id);
      // const updatedNote = {
      //   ...noteToUpdate,
      //   ...updatedContent
      // };
      // this._notes.splice(this._notes.indexOf(noteToUpdate), 1, updatedNote);
      // return updatedNote;
      const noteToUpdate = this.findNoteById(id);
      if(noteToUpdate){
        Object.assign(noteToUpdate, updatedContent);
      }
    };
  
    deleteNote(id) {
      let noteToDelete = this.findNoteById(id);
      this._notes.splice(this._notes.indexOf(noteToDelete), 1);
    };
  };