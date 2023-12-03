const express = require('express')
const router = express.Router()
const { check, validationResult } = require("express-validator")
const { signout, signup, signin, isSignedIn } = require("../controllers/auth")


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - lastName
 *         - email
 *         - purchases
 *         - userInfo
 *         - encry_password
 *         - salt
 *         - role
 *       properties:
 *         name:
 *           type: string
 *         lastName:
 *           type: string
 *         purchases:
 *           type: array
 *         userinfo:
 *           type: object
 *         encry_password:
 *           type: string
 *         salt:
 *           type: string
 *         role:
 *           type: string
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 *     UserReq:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         email: me@tv.com
 *         password: ASecretPassword
  *     SignUpReq:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         name: Tanay Van
 *         email: me@tv.com
 *         password: ASecretPassword
 */




router.post('/signup', [
    check("name", "name should be atleast 3 character").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be atleast 6 character").isLength({ min: 6 }),
], signup)

router.post('/signin', [

    check("email", "email is required").isEmail(),
    check("password", "password is required").isLength({ min: 6 }),
], signin)





router.get('/signout', signout)


module.exports = router