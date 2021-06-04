const router = require('express').Router();
const jwt = require('jsonwebtoken')
const userController = require('../controllers').user;

router.post('/admin/login', async (req, res) => {
    console.log(req.body);
    const user = await userController.findByEmail(req.body.email, null);
    if (!user) {
        return res.status(404).send({
            message: 'user not found'
        })
    }
    const token = jwt.sign({_id: user.dataValues.id}, "secret");

    res.cookie('jwt', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });
    
    res.send({
        message: 'success'
    });
});

module.exports = router;
