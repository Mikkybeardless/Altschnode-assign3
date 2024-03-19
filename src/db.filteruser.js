const fs = require("fs");
const path = require('path');
const filePath = path.join(__dirname,'/users.json');

const findUser= (userName) => {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(rawData);
    const user = users.find((user)=> user.username === userName);


    return (user);
}


module.exports = findUser;