export class StaffMessageBoardPage {
    messageBoardMenuXpath = "//span[.='Message Board']";
    classDropdownXpath = "//div[1]/div[1]/div[1]/div[1][@class='ant-select-selector']";
    selectClassOptionXpath = "//div[@class='ant-select-item-option-content'][.='Class A']";
    setClassButtonXpath = "//button[.='Set Class']";
    messageBoardTextVisibilityXpath = "//h3[.='Message Board']";
    textareaPlaceholderSelector = "#newPostInput";
    postButtonXpath = "//button[.='POST']";
    postDataVisibilityXpath = "//div[2]/div/div[. = 'test from staff message board']";
    bannerTabXpath = "//span[.='BANNER']";
    arrowIconXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]/div[1]/div[1]";
    bannerXpath = "//div[33]//img";
    bannerPostedVisibilityXpath = "//div[1]/div[1]/div[1]/div[2]/div/div/div/div";
    feelingTabXpath = "//span[.='FEELING']";
    excitedFeelingXpath = "//span[. = 'excited']";
    feelingPostVisibilityXpath = "//div[1]/div[1]/div[1]/div[1]/div[1]/span/span/span";
    tagTabXpath = "//span[.='TAG']";
    searchStudentSelector = "#tagPost";
    selectStudentForTagXpath = "//span[.='Kumar']";
    tagSuccessVisibilityXpath = "//span/a[.='Kumar']";
    gifTabXpath = "//span[.='GIF']";
    inputSearchGifXpath = "//input[@placeholder='Search for a GIF...']";
    selectGifSelector = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/img[1]";
    gifVisibilityXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/img[1]";
    photoTabXpath = "//span[.='PHOTO']";
    imageSucessXpath = "//body[1]/div[1]/div[1]/div[2]/div[1]/main[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/img[1]";

    messageBoardMenu() {
        cy.xpath(this.messageBoardMenuXpath).click();
    }

    selectClass() {
        cy.xpath(this.classDropdownXpath).click();
        cy.xpath(this.selectClassOptionXpath).click();
    }

    setClass() {
        cy.xpath(this.setClassButtonXpath).click();
    }

    messageBoardTextVisibility() {
        cy.xpath(this.messageBoardTextVisibilityXpath).should("be.visible");
    }

    enterText() {
        cy.get(this.textareaPlaceholderSelector).type("test from staff message board");
    }

    postButton() {
        cy.xpath(this.postButtonXpath).click();
    }

    postDataVisibility() {
        cy.xpath(this.postDataVisibilityXpath).scrollIntoView().should("be.visible");
    }

    bannerTab() {
        cy.get(this.textareaPlaceholderSelector).click();
        cy.xpath(this.bannerTabXpath).click();
    }

    arrowIcon() {
        cy.xpath(this.arrowIconXpath).click();
    }

    selectBanner() {
        cy.xpath(this.bannerXpath).click({ force: true });
    }

    bannerPostedVisibility() {
        cy.xpath(this.bannerPostedVisibilityXpath).scrollIntoView().should("be.visible");
    }

    selectFeeling() {
        cy.get(this.textareaPlaceholderSelector).click();
        cy.xpath(this.feelingTabXpath).click();
        cy.xpath(this.excitedFeelingXpath).click();
    }

    feelingPostVisibility() {
        cy.xpath(this.feelingPostVisibilityXpath).scrollIntoView().should("be.visible");
    }

    tagTab() {
        cy.get(this.textareaPlaceholderSelector).click();
        cy.xpath(this.tagTabXpath).click();
    }

    searchStudent() {
        cy.get(this.searchStudentSelector).type("kumar");
    }

    selectStudentForTag() {
        cy.wait(1000);
        cy.xpath(this.selectStudentForTagXpath).click({ multiple: true, force: true });
    }

    tagSuccessVisibility() {
        cy.wait(1000);
        cy.xpath(this.tagSuccessVisibilityXpath).scrollIntoView().should("be.visible");
    }

    gifTab() {
        cy.get(this.textareaPlaceholderSelector).click();
        cy.xpath(this.gifTabXpath).click(); 
    }

    inputSearchGif() {
        cy.xpath(this.inputSearchGifXpath).type("Hari bansha"); 
        cy.xpath(this.inputSearchGifXpath).type("{enter}");
    }

    selectGif() {
        cy.wait(1000);
        cy.xpath(this.selectGifSelector).click();
    }

    gifSuccessVisibility() {
        cy.xpath(this.gifVisibilityXpath).scrollIntoView().should("be.visible");
    }

    selectPhotoTab() {
        cy.get(this.textareaPlaceholderSelector).click();
        cy.xpath(this.photoTabXpath).click();
    }

    uploadPhoto() {
        const imagePath = "1.jpg";
        cy.get('input[type="file"]').attachFile(imagePath);
    }

    imagePostSucess() {
        cy.wait(4000);
        cy.xpath(this.imageSucessXpath).scrollIntoView().should("be.visible");
    }
}