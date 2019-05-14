'use scrict'

const modelP3 = require('../models/modelPag3.js');
const pag3 = (req) => {
    var result = modelP3();
    return (JSON.stringify(result)); //función para convertir json en string
};

module.exports = pag3;
