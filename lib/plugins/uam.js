'use strict';

var _ = require('lodash')
  , moment = require('moment')
  , times = require('../times');

function init(ctx) {
  var translate = ctx.language.translate;

  var uam = {
    name: 'uam'
    , label: 'Un-Announced-Meal'
    , pluginType: 'pill-minor'
  };

  uam.setProperties = function setProperties(sbx) {
    sbx.offerProperty('uam', function setUAM ( ) {
      return 42;
    });
  };

  uam.getEventTypes = function getEventTypes (sbx) {
    return [
      {
        val: 'UAM calculated meal'
        , name: 'UAM calculated meal'
        , bg: false, insulin: false, carbs: true, prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
      }
    ];
  };

  uam.updateVisualisation = function updateVisualisation(sbx) {
    sbx.pluginBase.updatePillText(sbx, {
      value: 'UAM ist toll!'
      , label: 'UAM'
      , info: [
        {
          label: 'test info label',
          value: 'test info value'
        }
      ]
    });
  };

  return uam;
}

module.exports = init;
