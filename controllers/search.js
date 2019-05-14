'use scrict'

const modelSearch = require('../models/modelSearch.js');
const url = require('url');
const fs = require('fs');
const path = require('path');
const appDir = path.dirname(require.main.filename);

const x = path.join('/views', 'view.html');

const htmlRender = (html, data) => {
    let parsedHtml = html.toString('utf8');

    for (key in data) {
        let exp = "{{" + key + "}}";
        let reg = new RegExp(exp, 'g');
        parsedHtml = parsedHtml.replace(reg, data[key]);
    }
    return parsedHtml;
};

const Search = (req) => {
    let miUrl = url.parse(req.url, true);
    var result = modelSearch();
    var termino = miUrl.query.nombre;

    const resultFilter = result.filter((alumno) => {
        if (alumno.nombre === termino) {
            return alumno;
        }
    });

    //leyendo la vista

    const view = fs.readFileSync(appDir + x).toString('utf8');
    const parsedHtml = htmlRender(view, resultFilter[0]);
    return parsedHtml;
    // return (JSON.stringify(resultFilter)); //esto me regresa el sring del JSON sin html
};


module.exports = Search;