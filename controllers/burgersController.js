const express = require("express");
const burgerModel = require('../models/burger');
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const obj = await burgerModel.all();
    console.log(obj);
    res.render('index', { burgers: obj });
  } catch (error) {
    throw error;
  }

});

router.get('/api', async function (req, res) {
  try {
    const obj = await burgerModel.all();
    return res.json(obj);
  } catch (error) {
    throw error;
  }
});

router.post('/api', async function (req, res) {
  try {
    const { burgerName } = req.body;
    await burgerModel.create(['burger_name', 'devoured'], [burgerName, false]);
    return res.status(204).end();
  } catch (error) {
    throw error;
  }
});

router.put('/api/:id', async function (req, res) {
  try {
    const id = 'id = ' + req.params.id
    await burgerModel.update({ 'devoured': true }, id);
    return res.status(204).end();
  } catch (error) {
    throw error;
  }
});


module.exports = router;

