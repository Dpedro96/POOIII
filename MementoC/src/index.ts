import CareTaker from "./memento/Caretaker";
import Originator from "./memento/Originator";

const originator = new Originator('Fatallys');
const caretaker = new CareTaker(originator);


console.log(originator);
console.log('');

caretaker.backup();
originator.setNick('Dpedro');
console.log(originator);
console.log('');

caretaker.backup();
originator.setNick('Imakill');
console.log(originator);
console.log('');

caretaker.undo();
console.log(originator);
console.log('');

caretaker.undo();
console.log(originator);
console.log('');

originator.restore();
console.log(originator);
console.log('');
