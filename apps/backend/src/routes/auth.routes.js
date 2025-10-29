import{ Router } from 'express'
import {deleteUser, getUser, login, logout, signup, updateUser} from '../controllers/auth.controller.js'
const Auth_router = Router();

Auth_router.post('/login', login);

Auth_router.post('/signup', signup);

Auth_router.post('/logout', logout);

Auth_router.put('/update-user', updateUser);

Auth_router.delete('/delete', deleteUser);

Auth_router.get('/user', getUser);

export default Auth_router;