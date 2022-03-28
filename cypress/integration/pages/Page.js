import { StaffLoginPage } from "./StaffLoginPage";
import { DashboardPage } from "./dashboardPage";
import { HelpRequestPage } from "./helpRequestPage";
import { StudentHelpRequestPage } from "./studentHelpRequestPage";
import { StaffMessageBoardPage } from "./staffMessageBoardPage";
import { StaffCommentPage } from "./staffCommentPage";
import { StrikePage } from "./staffStrikePage";
import { StaffChatPage } from "./StaffChatPage";

export class AppPage {
  // school
  login = new StaffLoginPage();
  dashboard = new DashboardPage();
  helpRequest = new HelpRequestPage();
  staffMessageboard = new StaffMessageBoardPage();
  staffComment = new StaffCommentPage();
  strike = new StrikePage();
  staffChat = new StaffChatPage();
  // class
  studentHelp = new StudentHelpRequestPage();
}