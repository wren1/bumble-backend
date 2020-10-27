const bearerToken = require('bearer-token');
const jwt = require('jsonwebtoken');

const { User } = require('../db/models');
const { jwtConfig: { secret, expiresIn } } = require('../config');

const restoreUser = (req, res, next) => {
    const { token } = req;
    if (!token) {
        return res.set('WWW-')
    }
}