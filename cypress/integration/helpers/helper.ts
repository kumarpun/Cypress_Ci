import loginData from "../../fixtures/users.json";

const _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

class Helper {
  /**
   * When list of different users are added they are accumulated here
   * for later references if necessary
   *
   * @type {Object}
   */
  static _createdUsersList = {};

  /**
   * When user selects certain timezone then this variable is updated
   *
   * @type {String}
   */
  // static _lastSetTimezone = "";

  /**
   * Random string is generated using characters in this string
   *
   * @type {String}
   */
  static _characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";

  static addUserToCreatedList(username, signupData) {
    if (username === null)
      throw new Error(
        "Id of user type is required to add in created users list."
      );
    Helper._createdUsersList[username] = signupData;
  }

  static getUniqueCredentials(username) {
    var randomString = this.generateRandomString(5);
    var credentials = this.getLoginData(username);
    credentials["emailAddress"] = randomString + credentials["emailAddress"];
    return credentials;
  }

  // @Todo need to check if the created users list contains the credentials of the user, before reading from the fixture
  static getLoginData(username) {
    if (Helper._createdUsersList[username]) {
      return Helper._createdUsersList[username];
    }
    return loginData[username];
  }

  /**
   * Returns array of objects
   * Input: | test |  Output: [{test: "avc"}]
   *        | avc  |
   *
   * @param table cypress dataTable
   * @return array
   */
  static hashDataTable = (table) => {
    const copy = table.rawTable.slice(0);
    const keys = copy[0];
    const valuesArray = copy.slice(1);
    return valuesArray.map((values) => _lodash.default.zipObject(keys, values));
  };

  /**
   * Generates random string each time
   * @param length length of the result string
   * @return {string}
   */
  static generateRandomString(length): string {
    let outString: string = "";
    let inOptions: string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";

    for (let i = 0; i < length; i++) {
      outString += inOptions.charAt(
        Math.floor(Math.random() * inOptions.length)
      );
    }

    return outString;
  }

  /**
   * Takes input string where the first character is an operation.
   * For example, the input in feature file , | scheduling_date | +7 | means to add 7 days on the current date.
   * And | scheduling_date | -7 | means to subtract 7 days from the current date.
   *
   * returns a JSON object such as follows:
   * {"month": "Jan", "day":17}
   *
   * @param daysToAdd operand and number of days to add or subtract
   * @return {JSON object}
   */
  static getFormattedDate(daysToAdd) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const operation = daysToAdd.charAt(0);
    daysToAdd = daysToAdd.substring(1);

    const date = new Date();

    date.setDate(
      operation === "+"
        ? date.getDate() + parseInt(daysToAdd)
        : date.getDate() - parseInt(daysToAdd)
    );

    return {
      month: monthNames[date.getMonth()],
      day: date.getDate(),
    };
  }

  // static updateLastSetTimezone(newTimezone) {
  //   this._lastSetTimezone = newTimezone;
  //   return cy.log(this._lastSetTimezone);
  // }

  // static getNextImmediateTime() {
  //   cy.getTimezone().then((timezone) => {
  //     cy.log("Actual timezone: " + timezone);
  //   });
  // }
}

export default Helper;
