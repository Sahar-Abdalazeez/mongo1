const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message : "user page"})
})
module.exports = router;