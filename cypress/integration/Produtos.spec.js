/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Aero Daily Fitness Tee')
            .click()

    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 10

        cy.get('[class="product-block grid"]')
            .contains('Aero Daily Fitness Tee').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Green' , 2)

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'S', 'Brown' , 3)

    });


});