describe("User-Onboarding", ()=>{
    
    const fname = ()=>cy.get("input[name=fname]")
    const lname = ()=>cy.get("input[name=lname]")
    const email = ()=>cy.get("input[name=email]")
    const password = ()=>cy.get("input[name=password]")
    const tos = ()=>cy.get("input[name=tos]")
    const submit = ()=>cy.get("button[id=submit]")

    beforeEach(() => {
        cy.visit('http://localhost:3000/')

        fname().should("exist")
        lname().should("exist")
        email().should("exist")
        password().should("exist")
        tos().should("exist")
        submit().should("exist")
    })
    


    it("Check Values",()=>{
        fname().should("have.value", "")
        lname().should("have.value", "")
        email().should("have.value", "")
        password().should("have.value", "")
        tos().should("not.be.checked")
        submit().should("be.disabled")
    })

    it("Check Submissions",()=>{
        fname()
            .type("Yo mama")
            .should("have.value", "Yo mama")
        
        lname()
            .type("Yo mama")
            .should("have.value", "Yo mama")
        
        email()
            .type("Yomama@yomama.com")
            .should("have.value", "Yomama@yomama.com")

        password()
            .type("1234567890")
            .should("have.value", "1234567890")
        
        tos()
            .check()
            .should("be.checked")
        
        submit()
            .should("not.be.disabled")
            .click()
            .should("be.disabled")
    })

    it("Check Values post submission",()=>{
        fname().should("have.value", "")
        lname().should("have.value", "")
        email().should("have.value", "")
        password().should("have.value", "")
        tos().should("not.be.checked")
        submit().should("be.disabled")
    })

})