export class StaffCommentPage {
    commentIconXpath = "//div[1]/div[1]/div[2]/div[2]/span[2]/div/span/span[. = ' Comment']";
    commentAreaSelector = "#mentions";
    commentedTextVisibilityXpath = "//div[2]/div[1]/div/div/div/div/div[. = 'test comment']";
    imgaeIconSelector = "#Path_149";
    postButtonXpath = "//button[.='Post']";
    commentImageSuccessXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[4]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/img[1]";
    feelingIconSelector = "#icon-felling";
    emojiXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/section[1]/div[2]/section[3]/ul[1]/li[1]/button[1]/span[1]";
    emojiCommentVisibilityXpath = "//div[2]/div/div/div[1]/span/a[. = 'Automation Principal']";
    imageSucessXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/img[1]";

    selectCommentIcon() {
        cy.xpath(this.commentIconXpath).click();
    }

    enterComment() {
        cy.get(this.commentAreaSelector).type("test comment");
        cy.get(this.commentAreaSelector).type("{enter}");
    }

    commentedTextVisibility() {
        cy.xpath(this.commentedTextVisibilityXpath).scrollIntoView().should("be.visible");
    }

    selectImageIcon() {
        cy.get(this.imgaeIconSelector).click({ force: true });
    }

    postButton() {
        cy.xpath(this.postButtonXpath).click();
    }

    commentImageSuccess() {
        cy.wait(4000);
        cy.xpath(this.imageSucessXpath).scrollIntoView().should("be.visible");
    }

    selectFeelingIcon() {
        cy.get(this.feelingIconSelector).click();
    }

    selectEmoji() {
        cy.wait(2000);
        cy.xpath(this.emojiXpath).click();
        cy.get(this.commentAreaSelector).type("{enter}");
    }

    emojiCommentVisibility() {
        cy.wait(3000);
        cy.xpath(this.emojiCommentVisibilityXpath).scrollIntoView().should("be.visible");
    }
}