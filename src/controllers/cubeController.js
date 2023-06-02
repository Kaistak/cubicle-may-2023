const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/create', (req, res) => {
    console.log(cubeManager.getAll())
    res.render('create')
});

router.post('/create', (req, res) => {
    const {
        name,
        description,
        imageUrl,
        dificulltyLevel,
    } = req.body;

    cubeManager.create({
        name,
        description,
        imageUrl,
        dificulltyLevel: Number(dificulltyLevel)
    })

    res.redirect('/')
})

module.exports = router;