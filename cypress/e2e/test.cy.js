/* global cy */
describe('Pokedex', function() {
  it('page Ivysaur can be opened', function() {
    cy.visit('http://localhost:5000/pokemon/ivysaur')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})