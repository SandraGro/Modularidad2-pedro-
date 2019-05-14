'use scrict'

const modelP2 = require('../models/modelPag2.js');
const pag2 = (req) => {
    var result = modelP2();
    return (JSON.stringify(result)); //
};

module.exports = pag2;
