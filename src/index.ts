// optional chaining
// implement interface
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

// object literal
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

// extend interface
interface Button {
  label: string;
  onClick: () => void;
}

const button: Button = {
  label: 'Submit',
  onClick: () => {
    console.log('click');
  },
};

interface IconButton extends Button {
  icon: string;
}

const addToCartBtn: IconButton = {
  label: 'Add to cart',
  onClick: () => {
    console.log('click');
  },
  icon: 'cart-icon',
};

class MyContact implements Contact {
  name: string;
  phone: string;

  constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
}

const a = new MyContact('A', '123');
console.log(a.name);

interface ContactAdapter {
  getData: () => Promise<Contact[]>;
}

class ContactApp {
  adapter: ContactAdapter;
  constructor(adapter: ContactAdapter) {
    this.adapter = adapter;
  }

  async render() {
    const contacts: Contact[] =
      await this.adapter.getData();
    console.table(contacts);
  }
}

class MyContactAdapter implements ContactAdapter {
  async getData() {
    // TODO: get data from API
    const contacts: Contact[] = [
      { name: 'A', phone: '123' },
      { name: 'B', phone: '456' },
    ];
    return contacts;
  }
}

const adapter = new MyContactAdapter();
const app = new ContactApp(adapter);
app.render();
