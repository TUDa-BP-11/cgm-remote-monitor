'use strict';

var _ = require('lodash')
  , moment = require('moment')
  , times = require('../times');

function init(ctx) {
  var translate = ctx.language.translate;

  var uam = {
    name: 'uam'
    , label: 'Un-Announced-Meal'
    , pluginType: 'pill-status'
  };

  return uam;
}

module.exports = init;
