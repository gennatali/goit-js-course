// const get = key => {
//     try {
//         const storageItem = localStorage.getItem(key);

//         return storageItem === null ? undefined : JSON.parse(storageItem);
//     } catch (err) {
//         console.error('Got error: ', err);
//     }
// };

// const set = (key, value) => {
//     try {
//         const storageItem = JSON.stringify(value);
//         localStorage.setItem(key, storageItem);
//     } catch (err) {
//         console.error('Set error: ', err);
//     }
// };

// const remove = key => {
//     try {
//         localStorage.removeItem(key);
//     } catch (err) {
//         console.error('Set error: ', err);
//     }
// };

// export default {get, set, remove};