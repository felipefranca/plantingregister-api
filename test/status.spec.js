
const chai = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos

//const status = require('../src/controllers/status'); // Arquivo a ser testado
chai.use(subSet);

const statusSchema = {
    name: name => name
}

describe('Testing status functions', () => {

    it('awesome',() => {
        chai.expect("a").to.containSubset("a");
    });


});
