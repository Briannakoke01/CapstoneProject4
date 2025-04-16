// import { configureStore } from '@reduxjs/toolkit';

// const initialState = { counter: 0 };

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { counter: state.counter + 1 };
//     case 'DECREMENT':
//       return { counter: state.counter - 1 };
//     default:
//       return state;
//   }
// };

// const store = configureStore({
//   reducer: counterReducer,
// });

// export default store;

// src/redux/store.js


// store.js
import { configureStore } from '@reduxjs/toolkit'; // Make sure this is from @reduxjs/toolkit
import rootReducer from './reducer'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer // Pass the root reducer as an object
});

export default store;

  

(require('dotenv').config()) 

