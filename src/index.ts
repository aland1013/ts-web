import { User } from './models/User';

const user = new User({ name: 'abl', age: 20 });
user.on('change', () => {
  console.log('fired');
});

user.on('change', () => {
  console.log('fired2');
});

user.on('save', () => {
  console.log('save triggered');
});

user.trigger('adsfdd');
