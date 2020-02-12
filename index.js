'use strict';

var moment = require('moment');
// import moment from 'moment' this is the same thing as the above line of code, but the above line is older version of doing this. 

/**
 * Returns a div element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};