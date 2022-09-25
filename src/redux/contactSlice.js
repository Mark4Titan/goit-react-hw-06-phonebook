import { createSlice, nanoid } from '@reduxjs/toolkit';

const DefaultContacts = () => {    
  const nevContacts = JSON.parse(localStorage.getItem('contacts'));
  
    return nevContacts !== null && nevContacts.length > 0
      ? nevContacts
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
};
  
const localStorageSave = data => {
  localStorage.setItem('contacts', JSON.stringify(data));
};



const ContactSlice = createSlice({
  name: 'contact',
  initialState: DefaultContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorageSave(state);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      if (index !== -1) state.splice(index, 1);
      localStorageSave(state);
    },
        
  },
});

export const { addContact, deleteContact } = ContactSlice.actions;
export const contactReducer = ContactSlice.reducer;