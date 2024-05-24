const jsonwebtoken = require('jsonwebtoken');
const {get_user} = require('../../Models/User/CRUD')


const authMiddleware = async (req, res, next) => {
    try {
        const headersToken = req.headers['authorization'];

        if (!headersToken) {
            return res.status(401).json({ error: 'Invalid Credential' });
        }

        const parts = headersToken.split(' ');

        // parts = [Bearer, token] index 0 e 1 respectivamente 

        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({ error: 'Token bad formatted' });
        }
        const token = parts[1];

        jsonwebtoken.verify(token, 'Secreto', async (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: 'Invalid Token' });
            };

            if (!decoded) {
                return res.status(401).json({ error: 'Unable to decode token' });
            }
            console.log(decoded);

                const userData = await get_user({ id: decoded.id });
                console.log(userData);


                if (!userData) {
                    return res.status(404).json({ error: 'User not found' });
                };

                // Guardando os dados no objeto user
                req.user = userData;
                req.decoded = decoded;
                next();

        });


    } catch (err) {
        return res.status(500).send(err);
    }
};

module.exports = authMiddleware;