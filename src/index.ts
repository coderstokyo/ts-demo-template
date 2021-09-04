// interface
// optional properties
import { send } from './mailer';

interface Contact {
  name: string;
  phone: string;
  email?: string;
}

const contacts: Contact[] = [];

const newContact: Contact = {
  name: 'Nguyen Van A',
  phone: '0123123',
  email: 'abc@gmail.com',
};

const otherContact: Contact = {
  name: 'Nguyen Van B',
  phone: '0123124',
};

contacts.push(newContact);

if (newContact.email) {
  send(newContact.email, '1', '2');
}
