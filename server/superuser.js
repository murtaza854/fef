const crypto = require("crypto");
const prompt = require('prompt-sync')();
const dotenv = require('dotenv');
dotenv.config();
const userController = require('./controllers').user;

let name = '';
while (name === '') name = prompt('Name: ').trim();
let email = '';
while (email === '') email = prompt('Email: ').trim();
let contactNumber = '';
while (contactNumber === '') contactNumber = prompt('Contact Number: ').trim();
const organization = prompt('Organization (Optional): ');
const role = 'Superuser';
const emailVerified = true;
const adminApproved = true;
const newsletter = true;
const volunteer = true;
let password = '';
while (password === '') password = prompt.hide('Password: ');
const confirmPassword = prompt.hide('Confirm Password: ');
if (password !== confirmPassword) {
    console.log('Passwords do not match... aboting!');
    process.exit(0);
};
const salt = crypto.randomBytes(16).toString('hex');
const superuser = true;
const hash = crypto.pbkdf2Sync(password, salt,  parseInt(process.env.ITERATIONS), 64, process.env.HASH_ALGORITHM).toString(`hex`);

const user = Promise.resolve(userController.create({name: name, email: email, contactNumber: contactNumber, organization: organization, role: role, emailVerified: emailVerified, adminApproved: adminApproved, newsletter: newsletter, volunteer: volunteer, password: hash, salt: salt, superuser: superuser}));

user.then(function(data) {
    console.log(`Superuser, ${name} with the email, ${email} has been created!`);
    process.exit(0);
});
