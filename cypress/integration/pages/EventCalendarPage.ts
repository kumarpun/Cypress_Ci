class EventCalendarPage {
    
    selectEventCalendarMenu() {
        cy.xpath("//div[contains(text(),'Events Calendar')]").click()
    }

    eventPageVisibility() {
        const dayjs = require('dayjs')
        const curentDate = dayjs().format('YYYY-MM-DD')  //Print todays date
        // cy.log(curentDate)
        const date = new Date(curentDate).toLocaleString('en-us',{month:'long', day:'numeric', year:'numeric'})
        cy.get('#fc-dom-1').contains(date);
    }

    selectWeek() {
        cy.get("[title='week view']").click();
    }

    weekVisibility() {
        cy.get('a').contains('Sun');
    }

    selectMonth() {
        cy.get("[title='month view']").click();
    }

    monthVisibility() {
        cy.get('a').contains('30');
    }
}
export default new EventCalendarPage();