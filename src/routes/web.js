const express = require('express')
const router = express.Router();
const { getHomePage, getABC, postCreateUser, getCreateUser, getUpdateUser, postUpdateUser, postHandleRemove, postDeleteUser } = require('../controllers/HomeController');

router.get('/', getHomePage);
router.get('/abc', getABC);
router.post('/create-user', postCreateUser);

router.get('/create', getCreateUser);
router.get('/update/:id', getUpdateUser);
router.post('/update-user', postUpdateUser);
router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemove);
module.exports = router;