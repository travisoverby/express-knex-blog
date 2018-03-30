'use strict';

const path = require('path');
const express = require('express');
const router = express.Router();

const controller = require(path.join(__basePath, 'controllers', 'index'));

router.get('/', controller.index);

module.exports = router;
