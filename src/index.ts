// optional chaining
import { send } from './mailer';

interface Pet {
  name: string;
}

interface Address {
  city: string;
}
interface Contact {
  name: string;
  phone: string;
  email?: string;
  pet?: Pet;
  addresses?: Address[];
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

function getFirstAddress(contact: Contact) {
  return contact.addresses?.[0];
}

console.log(getPetName(newContact));
console.log(getPetName(otherContact));

console.log(getFirstAddress(newContact)?.city);
