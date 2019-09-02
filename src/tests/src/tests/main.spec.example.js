/**
 * describe -> blocos de testes de metodos
 * context -> criar contextos para testes (only -> força para o teste rodar so o contexto)
 * it -> 'should happen blabla' -> teste (onde fica o teste). (skip -> pula o teste)
 *
 * ------------------------------ params -----------------------
 * reporter -> nyan, progress e doc (saida dos testes)
 * 'bail' -> trava no primeiro erro que quebrar
 *
 * ------------------------------ hooks ------------------------
 * before -> comando que roda uma vez antes do 1º bloco
 * after -> comando que roda uma vez depois do º bloco
 * beforeEach -> roda toda vez antes de cada bloco
 * afterEach -> roda depois de cada bloco
 */

 var expect = require('chai').expect;
describe('Main', () => {
    var arr = [];
    beforeEach(function() {
        arr = [1, 2, 3];
    });

    it('Should have a size of 4 when push another value to the array', function() {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('SHould remove the value 3 when use pop in the array', function() {
        var removedItem = arr.pop();

        expect(removedItem).to.equal(3);
    });

    it('Should have a size of 2 when pop a value from the array', function() {
      arr.pop();
      expect(arr).to.lengthOf(2);
    });
});
