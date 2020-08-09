import { User } from './models/User';

const user = new User({ name: 'abl', age: 20 });

console.log(user.get('name'));
console.log(user.get('age'));
