import { StaffLoginPage } from "./StaffLoginPage";
import { DashboardPage } from "./dashboardPage";
import { HelpRequestPage } from "./helpRequestPage";
import { StudentHelpRequestPage } from "./studentHelpRequestPage";

export class AppPage {
  // school
  login = new StaffLoginPage();
  dashboard = new DashboardPage();
  helpRequest = new HelpRequestPage();
  // class
  studentHelp = new StudentHelpRequestPage();
}
