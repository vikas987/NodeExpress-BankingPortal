const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync(__dirname + '/json/accounts.json', { encoding: 'UTF8' });
const accounts = JSON.parse(accountData);

const userData = fs.readFileSync(__dirname + '/json/users.json', { encoding: 'UTF8' })
const users = JSON.parse(userData);

const writeJSON = () => {
    let accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(path.join(__dirname, 'json', 'accounts.json'), accountsJSON, 'utf8');
}

module.exports = { accounts, users, writeJSON }