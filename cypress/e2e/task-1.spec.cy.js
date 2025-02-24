import epamSiteLocators from "../POM/epamSiteLocators";
import "cypress-real-events/support";

describe ('Homework Task 1', () => {

    const baseUrl = Cypress.config('baseUrl');
   
         beforeEach ('Visit epam site', ()=>{
            cy.visit('/');
         })

         it('Check the correct title', () =>{
              epamSiteLocators.headerTitle().should('have.text', 'EPAM | Software Engineering & Product Development Services  ')
         })


         it('Check switch light/dark mode', () =>{
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.themeSwitcher().should('exist').and('have.length', 2);
            epamSiteLocators.themeSwitcher().eq(0).click();
            epamSiteLocators.themeTitle().should('have.text', 'Light Mode');
        })

        it('Switch language', () =>{
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.languageButton().should('exist').and('have.length', 2);
            epamSiteLocators.languageButton().eq(0).click();
            epamSiteLocators.languageUK().eq(0).should('have.text', 'Україна (Українська)');
            epamSiteLocators.languageUK().eq(0).click();
        })

        it('Policie list', () =>{
            epamSiteLocators.footerTitles().contains('policies').scrollIntoView().should('be.visible');
            epamSiteLocators.leftSectionPolicieList().contains('INVESTORS').should('be.visible');
            epamSiteLocators.leftSectionPolicieList().contains('OPEN SOURCE').should('be.visible');
            epamSiteLocators.leftSectionPolicieList().contains('PRIVACY POLICY').should('be.visible');
            epamSiteLocators.leftSectionPolicieList().contains('COOKIE POLICY').should('be.visible');
            epamSiteLocators.rightSectionPolicieList().contains('APPLICANT PRIVACY NOTICE').should('be.visible');
            epamSiteLocators.rightSectionPolicieList().contains('WEB ACCESSIBILITY').should('be.visible');
        })

        it('Switch location by region', () =>{
            epamSiteLocators.sectionTitleHeader().contains(' Locations').scrollIntoView().should('be.visible');
            epamSiteLocators.locationTabs().should('be.visible').and('have.length', 3);
            epamSiteLocators.locationTabs().contains('AMERICAS').should('be.visible');

            epamSiteLocators.locationTabs().contains('EMEA').should('be.visible').click();
            epamSiteLocators.locationCountryList().contains('Armenia').should('be.visible');

            epamSiteLocators.locationTabs().contains('APAC').should('be.visible').click();
            epamSiteLocators.locationCountryList().contains('India').should('be.visible');
    
        })

        it('Check search functionality', () =>{
            epamSiteLocators.searchIcon().should('be.visible').click();
            epamSiteLocators.searchInputField().should('be.visible').type('AI');
            epamSiteLocators.findButton().click();
            epamSiteLocators.searchResultsCounter().should('contain', 'results for "AI"');
        })

        it('Check form fields validation', () =>{
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.aboutLink().eq(0).click();
            epamSiteLocators.contacUsButton().click();
            epamSiteLocators.submitButton().click();
            epamSiteLocators.firstNameError().should('be.visible');
            epamSiteLocators.lastNameError().should('be.visible');
            epamSiteLocators.emailError().should('be.visible');
            epamSiteLocators.phoneError().should('be.visible');
            epamSiteLocators.howDidYouHearAboutError().should('be.visible');
            epamSiteLocators.consentCheckboxError().should('have.text', 'Please check this box if you want to proceed')
        })

        it('Check company logo', () =>{
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.aboutLink().eq(0).click();
            cy.url().should('eq', `${baseUrl}/about`);
            epamSiteLocators.epamLogo().should('be.visible').click();
            cy.url().should('eq', `${baseUrl}/`);
        })

        it('Check download report', () =>{
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.aboutLink().eq(0).click();
            cy.url().should('eq', `${baseUrl}/about`);
            epamSiteLocators.downloadDocButton().should('be.visible').click();
            epamSiteLocators.docRouth().should('exist');
        })
})