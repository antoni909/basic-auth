'use strict'

const express = require('express');
const { Customer } = require('../models/index');
const router = express.Router();

//REST route declarations
router.get('/customer', getCustomer);
router.get('/customer/:id', getOneCustomer);
router.post('/customer/', createCustomer);
router.put('/customer/:id',updateCustomer);
router.delete('/customer/:id',deleteCustomer);

// apply CRUD method to HTTP REQ(REST) 
async function getCustomer(req,res){

  let customer = await Customer.read();
  res.status(200).json(customer)

}

async function createCustomer(req,res){

  let customerData = req.body;
  let customer = await Customer.create(customerData);

  res.status(200).json(customer);

}

async function getOneCustomer(req,res){

  const id = parseInt(req.params.id);
  let customer = await Customer.read(id);
  res.status(200).json(customer);

}

async function updateCustomer(req,res){

  const customerId = parseInt(req.params.id);
  const customerObject = req.body;

  let updatedCustomer = await Customer.update(customerId,customerObject);
  res.status(200).json(updatedCustomer);

}

async function deleteCustomer(req,res){

  const customerId = parseInt(req.params.id);
  let deletedCustomer = await Customer.delete(customerId);
  res.status(204).json(deletedCustomer);

}

module.exports = router;
