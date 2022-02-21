import loginData from "../../fixtures/users.json";

export class Helper {
  /**
   * When list of different users are added they are accumulated here
   * for later references if necessary
   *
   * @type {Object}
   */

  getLoginData(username) {
    return loginData[username];
  }
}