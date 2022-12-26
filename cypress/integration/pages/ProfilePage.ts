class ProfilePage {
  dropDownXpath =
    "//button[@class='relative flex flex-row items-center w-auto px-2 py-2 space-x-2 cursor-pointer focus:outline-none']";
  myProfileXpath = "//div[contains(text(),'My Profile')]";
  profileVisibilityXpath = "(//div[contains(text(),'Profile')])[2]";
  bioInputXpath = "//textarea[@placeholder='Write your Bio']";
  saveButtonXpath = "//button[contains(text(),'Save Changes')]";
  bioSelector = "#bio";
  inputNameXpath = "//input[@id='fullName']";
  nameSelector = "#fullName";
  profilePicSelector = "//input[@id='profilePic']";
  changePasswordTabXpath = "//div[contains(text(),'Change Password')]";
  currentPasswordSelector = "#currentPass";
  newPasswordSelector = "#newPass";
  confirmPasswordSelector = "#confirmPass";
  updatePasswordButtonXpath = "//button[contains(text(),'Update Password')]";

  selectAvatar() {
    cy.xpath(this.dropDownXpath).click();
  }

  selectMyProfile() {
    cy.xpath(this.myProfileXpath).click();
  }

  profileVisibility() {
    cy.xpath(this.profileVisibilityXpath).should("have.text", "Profile");
  }

  inputBio() {
    cy.xpath(this.bioInputXpath).clear({ force: true });
    cy.xpath(this.bioInputXpath).type("test bio");
  }

  saveButton() {
    cy.xpath(this.saveButtonXpath).click();
  }

  bioVisibility() {
    cy.get(this.bioSelector).should("be.visible");
  }

  inputName() {
    cy.xpath(this.inputNameXpath).clear({ force: true });
    cy.xpath(this.inputNameXpath).type("kumar pun");
  }

  nameVisibility() {
    cy.get(this.nameSelector).should("be.visible");
  }

  uploadPhoto() {
    const imagePath = "session1.jpeg";
    cy.get('input[type="file"]').attachFile(imagePath);
    cy.wait(4000);
  }

  profilePicVisibility() {
    cy.xpath(this.profilePicSelector).scrollIntoView();
  }

  selectChangePasswordTab() {
    cy.xpath(this.changePasswordTabXpath).click({ force: true });
  }

  inputCurrentPassword() {
    cy.get(this.currentPasswordSelector).type("qwertyuiop", { force: true });
  }

  inputNewPassword() {
    cy.get(this.newPasswordSelector).type("qwertyuiop", { force: true });
  }

  inputConfirmPassword() {
    cy.get(this.confirmPasswordSelector).type("qwertyuiop", { force: true });
  }

  updatePassword() {
    cy.xpath(this.updatePasswordButtonXpath).click();
  }

  passwordSuccess() {
    cy.xpath(this.updatePasswordButtonXpath).should("be.visible");
  }
}

export default new ProfilePage();
