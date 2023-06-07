const connection = require('../config/database');
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDServices');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });

}
const getCreateUser = (req, res) => {
    return res.render('create.ejs');

}

const getUpdateUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render('edit.ejs', { userEdit: user });

}

const getABC = (req, res) => {
    res.send('Hello world with get ABC');
}


const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    //let {email, name, city} = req.body;
    console.log("email=", email, "name=", name, "city=", city);
    let [results, fields] = await connection.query('INSERT INTO Users (email, name, city)  VALUES (?,?, ?)', [email, name, city]);
    res.redirect('/');
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.id;
    //let {email, name, city} = req.body;
    // console.log("email=", email, "name=", name, "city=", city);
    await updateUserById(email, name, city, userId);
    //res.send('update successed !');
    res.redirect('/');
}

const postHandleRemove = async (req, res) => {

    let userId = req.body.id;
    //let {email, name, city} = req.body;
    // console.log("email=", email, "name=", name, "city=", city);
    await deleteUserById(userId);
    //res.send('update successed !');
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId);
    return res.render('delete.ejs', { userEdit: user });

}

module.exports = { getHomePage, getABC, postCreateUser, getCreateUser, getUpdateUser, getUserById, postUpdateUser, postDeleteUser, postHandleRemove }