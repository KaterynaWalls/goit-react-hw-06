import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';
import s from './ContactList.module.css';
import Contact from '../ContactList/ContactList';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    console.log('Contacts:', contacts);


    const filter = useSelector(selectNameFilter);
    console.log('Filter:', filter);
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    console.log('Visible Contacts:', visibleContacts);
    
    
         
       
    
      return (
        <div>
          <ul className={s.contactList}>
            {visibleContacts.map(({id, name,number}) => (
              <Contact key={id} id={id} name={name} number={number} />
            ))}
          </ul>
        </div>
      );
    };
    export default ContactList;
            