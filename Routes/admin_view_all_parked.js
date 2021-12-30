const express = require('express');
const router = express.Router();
const pool = require('../DB/db');

router.get('/getParked', async(req, res) => {
    const getParked = await pool.query(
        "SELECT * FROM PARK"
    );
    res.json(getParked.rows);
});


module.exports = router;