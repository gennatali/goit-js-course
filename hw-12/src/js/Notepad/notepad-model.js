import {PRIORITY_TYPES} from '../utils/constants';
import shortid from 'shortid';
import storageFn from '../Storage/storageFn';

export default class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  storageItems() {
    const savedItems = storageFn.get('notes');
    if (savedItems) {
      this._notes = savedItems;
    }
    return this._notes;
  }

  addItem(input, textarea) {
    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        const newItem = {
          id: shortid.generate(),
          title: input,
          body: textarea,
          priority: PRIORITY_TYPES.LOW,
        }
        this.saveNote(newItem).catch(console.error());
        resolve(newItem);
        reject('Error');
      }, 0);
    });
  }

  saveNote(note) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        this.storageItems().push(note);
        storageFn.set('notes', this._notes);
        resolve(note);
        reject('Error');
      }, 0);
    });
  };

  // search(value) {
  //   return  this.storageItems().filter(el => el.body.toLowerCase().includes(value.toLowerCase()));
  // }

  findNoteById(id) {
    return this.storageItems().find(el => el.id === id);
  };

  deleteNote(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const noteToDelete = this.findNoteById(id);
        if(noteToDelete){
          storageFn.set('notes', this.storageItems().filter(el => el.id !== id));
          resolve(noteToDelete);
        }
        reject('Error');
      }, 0);
    });
  };

  updateNotePriority(id, priority) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const noteToUpdatePriority = this.findNoteById(id);
        if(noteToUpdatePriority) {
          noteToUpdatePriority.priority = priority;
          storageFn.set('notes', this._notes);
          resolve(noteToUpdatePriority);
        }
        reject('Error');
      }, 0);
    });
  };

  filterNotesByQuery(query) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const notesbyQuery = this.storageItems(). filter(el => el.title.toLowerCase().includes(query.toLowerCase()) || el.body.toLowerCase().includes(query.toLowerCase()));
        resolve(notesbyQuery);
        reject('Error');
      }, 0);
    });
  };

  filterNotesByPriority(priority) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const notesbyPriority = this.storageItems().filter(el => el.priority === priority);
        resolve(notesbyPriority);
        reject('Error');
      }, 0);
    });
  };

  updateNoteContent(id, updatedContent) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const noteToUpdate = this.findNoteById(id);
        if(noteToUpdate){
          Object.assign(noteToUpdate, updatedContent);
          storageFn.set('notes', this._notes);
          resolve(noteToUpdate);
        }
        reject('Error');
      }, 0);
    })
  };
};