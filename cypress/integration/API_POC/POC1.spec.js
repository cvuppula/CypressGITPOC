// npm run cypress:open

/*describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
        //cy.visit('https://example.cypress.io/commands/aliasing')
        cy.visit('https://petstore.swagger.io/')
    })
})*/

/* describe('Pet Stote POC using Cypress', () => {
    it('GET - findByStatus - Available', () => {
        cy.request('https://petstore.swagger.io/v2/pet/findByStatus?status=available').
        then((response) => {
            expect(response.body).to.have.property('code', 200)
        } ) 
        
    })
  }) */

  describe('Pet Stote POC using Cypress', () => {
    it('GET - findByStatus - Available', () => {        
        cy.request({
            method: 'GET',
            followRedirect: false, log:true, 
            url: 'https://petstore.swagger.io/v2/pet/2',
            headers: {
                'accept': 'application/json'
            },
            response:[]
        }).then((res) => {
            cy.log(res.body);
            assert.equal(res.status, 200);
            expect(res.body).to.not.be.null;
            expect(res.body.category).to.have.property('name','woof');
            expect(res).to.have.property('duration');
        })
    })

})    

describe('Pet Stote POC using Cypress', () => {
        it('GET - StoreOrder', () => {        
            cy.request({
                method: 'GET',
                followRedirect: false, log:true, 
                url: 'https://petstore.swagger.io/v2/store/order/2',
                headers: {
                    'accept': 'application/json'
                },
                response:[]
            }).then((res) => {
                cy.log(res.body);
                assert.equal(res.status, 200);
                expect(res.body).to.not.be.null;
                expect(res.body).to.have.property('complete',false);
                expect(res).to.have.property('duration');
            })

        })
})


