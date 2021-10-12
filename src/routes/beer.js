'use strict'

const express = require('express');
const { Beer } = require('../models/index');
const router = express.Router();

//REST route declarations
router.get('/beer', getBeer);
router.get('/beer/:id', getOneBeer);
router.post('/beer/', createBeer);
router.put('/beer/:id',updateBeer);
router.delete('/beer/:id',deleteBeer);

// apply CRUD method to HTTP REQ(REST) 
async function getBeer(req,res){

  let beer = await Beer.read();
  // console.log(' *** beer FOUND --> ', beer)
  res.status(200).json(beer)

}

async function createBeer(req,res){

  let beerData = req.body;
  let beer = await Beer.create(beerData);
  // console.log(` *** beer --> ${beer} CREATED`);
  res.status(200).json(beer);

}

async function getOneBeer(req,res){

  const id = parseInt(req.params.id);
  let beer = await Beer.read(id);
  // console.log(`*** ONE beer: ${beer} FOUND: `, beer)
  res.status(200).json(beer);

}

async function updateBeer(req,res){

  const beerId = parseInt(req.params.id);
  const beerObject = req.body;

  let updatedBeer = await Beer.update(beerId,beerObject);
  res.status(200).json(updatedBeer);

}

async function deleteBeer(req,res){

  const beerId = parseInt(req.params.id);
  let deletedBeer = await Beer.delete(beerId);
  // console.log(`***beer ${deletedBeer} DELETED: `, deletedBeer)
  res.status(204).json(deletedBeer);

}

module.exports = router;
