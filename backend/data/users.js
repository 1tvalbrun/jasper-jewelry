import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@jasperjewelry.com',
    password: bcrypt.hashSync('123abc', 10),
    isAdmin: true,
  },
  {
    name: 'Erica Valbrun',
    email: 'evalbrun@jasperjewelry.com',
    password: bcrypt.hashSync('123abc', 10),
    isAdmin: false,
  },
  {
    name: 'Marie Dorcin',
    email: 'mdorcin@jasperjewelry.com',
    password: bcrypt.hashSync('123abc', 10),
    isAdmin: false,
  },
];

export default users;
