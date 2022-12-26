class SocialLoginPage {

    visitGoogleLoginPage() {
        // return cy.visit(Cypress.config("googleLoginUrl"));
        cy.clearCookies()
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
          });
        cy.visit("https://accounts.google.com/o/oauth2/auth/identifier?response_type=code&client_id=483304068749-ajt0haip4rsd2f2810u966vt9968qbdv.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fenthuziastic-production.firebaseapp.com%2F__%2Fauth%2Fhandler&state=AMbdmDm-9I0_9go8yufsdFqlw19OtP4XrHuIFaSw2oL6LOKLNuMD01s6Zw5RoUrJhJ262pMzvxDj-8IajvPqgOvMi0dvvdNeJhsOEY3sfm0aFIiEvfI7WhlYKx0y1-U5_mVL4OiFSq5P66dHsl_USxunM4SfnfbIjcLBscUKLmkmQqoefAyG7TwM2yyKbKD7aP5lk2lCwJYPlwOriybH1YOkX-Kf-0EUijkihrOU5QMzx6gzUb6hXWiq0zvxqqLvRBNKkzvpqkUgqO7jkhTiJFFnXuvkd4zZHEhXHV-WsD0okLLUrn83hGx_XnTpI01rMuaRy_wox5Q8lX68rYU_TDo7&scope=openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20profile&context_uri=https%3A%2F%2Fenthu.com&flowName=GeneralOAuthFlow&hl=en");

   
            // cy.get("#identifierId").type("kumar@enthu.com");
            // cy.xpath("//span[contains(text(),'Next')]").click();

            //             cy.get("#password").type("Test@1234");
            //             cy.xpath("//span[contains(text(),'Next')]").click();


        // cy.location().then((loc) => {
        //     if (!loc.href.includes("https://myaccount.google.com")) {
        //         cy.get("#identifierId").type("kumar@enthu.com");
        //         cy.get("#identifierNext").click();
        //         cy.get("#password").type("qwertyuiop");
        //         cy.get("#submit").click();
        //     }
        // cy.get("#identifierId").type("cumarpun1234@gmail.com");
        // cy.xpath("//span[contains(text(),'Next')]").click();
        // cy.location().then((loc) => {
        //     if (!loc.href.includes("https://myaccount.google.com")) {
        //         cy.get("#identifierId").type("kumar@enthu.com");
        //         cy.get("#identifierNext").click();
        //         cy.get("#password").type("qwertyuiop");
        //         cy.get("#submit").click();
        //     }
        // });
        // cy.request({
        //     method: 'POST',
        //     url: 'https://www.googleapis.com/oauth2/v4/token',
        //     body: {
        //       grant_type: '1//04ZycHOxrmjqUCgYIARAAGAQSNwF-L9Iri3_6yY_Zrad0RYSMTHMAT9EWF2sIj728PI01Tkzbfb9X9Z_uhAVaKb9SU0IVtJcv7zI',
        //       client_id: '36710680461-de4trgakh8pmmi5s4pph6nobnih5kfb7.apps.googleusercontent.com',
        //       client_secret: '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',
        //       refresh_token: 'ya29.a0AVA9y1v7A8XA1QLxdTWjAUqqWzPtzlzQ9GlO9gCjZgmT1EUtGcN_3XJXEcLlptH7fYbAIiopUAmLZU0jei1hupbrTOPp_ZqbHKkVKO8kNIuPNoSqjIzo8WnxG1hr_Fqp-SyxJx1NICM4vcqrebt_dw0pwscEaCgYKATASARASFQE65dr8gOOZK6C_Ugt6RBhGD1Gv8w0163',
        //     },
        //   }).then(({ body }) => {
        //     const { id_token } = body
        //     cy.request('POST', '/api/login', { jwt: id_token })
        //     .then( ({ body: { accessToken } }) => {
        //       cy.setCookie('trello_token', accessToken)
        //     })
        //   })

    }
}

export default new SocialLoginPage();