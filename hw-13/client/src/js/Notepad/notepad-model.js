import {
  PRIORITY_TYPES
} from '../utils/constants';
import * as api from '../../services/api';
// import shortid from 'shortid';
// import storageFn from '../Storage/storageFn';

export default class Notepad {
  constructor() {
    this._notes = [];
  }

  // get notes() {
  //   return this._notes;
  // },

  // NEW GET
  get() {
      return api.getPosts().then(posts => {
        this._notes = posts;
        return this._notes;
      })
    },

    // storageItems() {
    //   const savedItems = storageFn.get('notes');
    //   if (savedItems) {
    //     this._notes = savedItems;
    //   }
    //   return this._notes;
    // }

    addItem(input, textarea) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newItem = {
            // id: shortid.generate(),
            title: input,
            body: textarea,
            priority: PRIORITY_TYPES.LOW,
          }
          this.saveNote(newItem).catch(console.error());
          resolve(newItem);
          reject('Error');
        }, 0);
      });
    },

    //NEW ADD
    saveNote(item) {
      return api.savePost(item).then(savedItem => {
        this.items.push(savedItem);
        return savedItem;
      });
    },

    // saveNote(note) {
    //   return new Promise ((resolve, reject) => {
    //     setTimeout(() => {
    //       this.storageItems().push(note);
    //       storageFn.set('notes', this._notes);
    //       resolve(note);
    //       reject('Error');
    //     }, 0);
    //   });
    // };

    // search(value) {
    //   return  this.storageItems().filter(el => el.body.toLowerCase().includes(value.toLowerCase()));
    // }

    findNoteById(id) {
      return this._notes.find(el => el.id === id);
    };

  deleteNote(id) {
      return api.deletePost(id).then(() => {
        this.items = this.items.filter(item => item.id !== id)
        return id;
      });
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     const noteToDelete = this.findNoteById(id);
      //     if (noteToDelete) {
      //       storageFn.set('notes', this.storageItems().filter(el => el.id !== id));
      //       resolve(noteToDelete);
      //     }
      //     reject('Error');
      //   }, 0);
      // });
    },

    updateNotePriority(id, newPriority) {
      return api.updatePost(id, {priority: newPriority}).then(updatedItem => {
        this._notes = this._notes.map(item => item.id === updatedItem.id ? updatedItem : item); 
            return updatedItem; 
      })
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     const noteToUpdatePriority = this.findNoteById(id);
          
      //     if (noteToUpdatePriority) {
      //       noteToUpdatePriority.priority = priority;
      //       storageFn.set('notes', this._notes);
      //       resolve(noteToUpdatePriority);
      //     }
      //     reject('Error');
      //   }, 0);
      // });
    },

  filterNotesByQuery(query = '') {
    return this._notes.filter(el => el.title.toLowerCase().includes(query.toLowerCase()) || el.body.toLowerCase().includes(query.toLowerCase()));
  },

  filterNotesByPriority(priority) {
    return this._notes.filter(item => item.priority === priority);
  },

  updateNoteContent(id, updatedContent) {
    return api.updatePost(id, updatedContent).then(updatedItem => {
      this._notes = this._notes.map(item => item.id === updatedItem.id ? updatedItem : item); 
          return updatedItem; 
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const noteToUpdate = this.findNoteById(id);
    //     if (noteToUpdate) {
    //       Object.assign(noteToUpdate, updatedContent);
    //       storageFn.set('notes', this._notes);
    //       resolve(noteToUpdate);
    //     }
    //     reject('Error');
    //   }, 0);
    // })
  };
};