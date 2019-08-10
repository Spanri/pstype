"use strict";
import express from 'express';
import api from './api';
// import * as a from '../../dist';

const router = express.Router();

/** @see module:Глобальные методы */
/** @module Глобальные методы */

/**
 * Общая информация о сервере и проекте + версия.
 * @name Общая информация
 * @route {GET} /
 */

router.use('/api', api);

router.use('/static', express.static(__dirname + '/dist'))

router.get('/', (req, res) => {
  res.sendFile(__dirname, '/dist/index.html');
});

// router.get('/', (req, res, next) => {
//   res.json({
//     name: "PSType API",
//     madeBy: "Anna, Valya",
//     versionOfServer: "0.1.1",
//     versionOfClient: "0.0.1"
//   });
// });

export default router;
