// optional chaining
import { send } from './mailer';

interface Pet {
  name: string;
}
interface Contact {
  name: string;
  phone: string;
  email?: string;
  pet?: Pet;
}

const contacts: Contact[] = [];

const newContact: Contact = {
  name: 'Nguyen Van A',
  phone: '0123123',
  email: 'abc@gmail.com',
  pet: {
    name: 'A',
  },
};

const otherContact: Contact = {
  name: 'Nguyen Van B',
  phone: '0123124',
};

contacts.push(newContact);

function getPetName(contact: Contact): string {
  return contact.pet?.name || '';
}

console.log(getPetName(newContact));
console.log(getPetName(otherContact));
