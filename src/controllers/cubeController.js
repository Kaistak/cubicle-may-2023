const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/create', (req, res) => {
    
    res.render('create')
});

router.post('/create', (req, res) => {
    const {
        name,
        description,
        imageUrl,
        dificulltyLevel: difficultyLevel,
    } = req.body;

    cubeManager.create({
        name,
        description,
        imageUrl,
        dificulltyLevel: Number(difficultyLevel)
    })

    res.redirect('/')
});

router.get('/:cubeId/details', (req, res) => {
    const cube = cubeManager.getOne(req.params.cubeId);

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });
});

module.exports = router;