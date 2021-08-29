// interface
interface Contact {
  name: string;
  phone: string;
  email: string;
}

const contacts: Contact[] = [];

const newContact: Contact = {
  name: 'Nguyen Van A',
  phone: '0123123',
  email: 'abc@gmail.com',
};

contacts.push(newContact);
