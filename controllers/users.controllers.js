const users = require('../public/users.json')

// GET ALL USERS WITH LIMIT QUERY
module.exports.getAllUsers = (req, res, next) => {
    const { limit, page } = req.query;
    res.json(users.slice(0, limit));
}

// GET RANDOM USER
module.exports.getRandomUser = (req, res, next) => {
    const { limit, page } = req.query;
    function get_random(list) {
        return list[Math.floor((Math.random() * list.length))];
    }
    const randomUser = get_random(users);
    res.json(randomUser);
}

// SAVE A USER DETAIL
module.exports.saveAUser = (req, res, next) => {
    const { id, name, gender, contact, address, photoUrl } = req.body;
    if (id && name && gender && contact && address && photoUrl) {
        const userData = {
            id,
            name,
            gender,
            contact,
            address,
            photoUrl
        }
        users.push(userData)
        res.send("User added")
    }
    else {
        res.send("Please check your Data!")
    }
}

module.exports.updataAUser = (req, res, next) => {
    const { id } = req.params;
    const newData = users.find(user => user.id == Number(id));
    newData.id = id;
    newData.name = req.body.name;
    newData.gender = req.body.gender;
    res.send(newData);
}

module.exports.updateBulkUser = (req, res, next) => {
    
    for (let i = 0; i < req.body.length; i++) {
        const newUser = req.body[i];
        const newUserId = newUser.id;
        const newData = users.find(user => user.id == Number(newUserId));
        newData.id = newUserId;
        newData.name = newUser.name;
        newData.gender = newUser.gender;
        newData.contact = newUser.contact;
        newData.address = newUser.address;
        newData.photoUrl = newUser.photoUrl;
        users.push(newData);
    }
    res.send(users);
}

module.exports.deleteAUser = (req, res, next) => {
    const { id } = req.params;
    const newData = users.filter(user => user.id !== Number(id));
    res.send(newData);
}