require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe('descrição geral', () => {
  it('Verificar se o nome da personagem correspondente a 720 é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    expect(character.name).toBe('Wonder Woman');
  });
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter();

    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
  it('Verifica se retorna erro ao executar a função sem parâmetro', async () => {
    const failRequest = await fetchCharacter(10);

    expect(failRequest).toBe("Invalid id");
  });
});