import {PRIORITY_TYPES} from '../utils/constants';
import * as api from '../services/api';

export default class Notepad {
  constructor() {
    this._notes = [];
  }

  get() {
      return api.getPosts().then(posts => {
        this._notes = posts;
        return this._notes;
      })
    }

    addItem(input, textarea) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const newItem = {
            title: input,
            body: textarea,
            priority: PRIORITY_TYPES.LOW,
          }
          resolve(this.saveNote(newItem).catch(console.error()));
          reject('Error');
        }, 0);
      });
    }

  saveNote(note) {
    return api.savePost(note).then(savedItem => {
      this._notes.push(savedItem);
      return savedItem;
    });
  };

  findNoteById(id) {
    return this._notes.find(el => el.id === id);
  };

  deleteNote(id) {
    return api.deletePost(id).then(() => {
      this._notes = this._notes.filter(item => item.id !== id)
      return id;
    });
  };

  updateNoteContent(id, updatedContent) {
    return api.updatePost(id, updatedContent).then(updatedItem => {
      const noteToUpdate = this.findNoteById(id);
      if (noteToUpdate) {
        Object.assign(noteToUpdate, updatedItem);
        return updatedItem;
      }
    });
  };

  updateNotePriority(id, newPriority) {
    return api.updatePost(id, {
      priority: newPriority
    }).then(updatedItem => {
      const noteToUpdatePriority = this.findNoteById(id);
      if (noteToUpdatePriority) {
        noteToUpdatePriority.priority = newPriority;
        return updatedItem;
      }
    });
  };

  filterNotesByQuery(query = '') {
    return this._notes.filter(el => el.title.toLowerCase().includes(query.toLowerCase()) || el.body.toLowerCase().includes(query.toLowerCase()));
  };

  filterNotesByPriority(priority) {
    return this._notes.filter(el => el.priority === priority);
  };
};