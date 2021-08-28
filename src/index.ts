import * as Mailer from './mailer';

const age: number = 1;

let newVar: string;

function sum(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;

// destructuring ES6
const sendEmail = async ({
  email,
  subject,
  content,
}: {
  email: string;
  subject: string;
  content: string;
}): Promise<boolean> => {
  const res = await Mailer.send(email, subject, content);
  return res;
};

function waitAndDo(callback: (param: string) => void) {
  setTimeout(() => {
    callback('Oops!');
  }, 1000);
}
class Dog {
  sayHi(name: string) {
    console.log('Gau gau', name);
  }
}
