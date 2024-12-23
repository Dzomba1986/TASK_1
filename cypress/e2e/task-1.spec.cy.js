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
            epamSiteLocators.cookyConsentButton().click();
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.themeSwitcher().should('exist').and('have.length', 2);
            epamSiteLocators.themeSwitcher().eq(0).click();
            epamSiteLocators.themeTitle().should('have.text', 'Light Mode');
        })

        it('Switch language', () =>{
            epamSiteLocators.cookyConsentButton().click();
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.languageButton().should('exist').and('have.length', 2);
            epamSiteLocators.languageButton().eq(0).click();
            epamSiteLocators.languageUK().eq(0).should('have.text', 'Україна (Українська)');
            epamSiteLocators.languageUK().eq(0).click();

            //cy.url().should('eq','https://careers.epam.ua/')
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
            epamSiteLocators.cookyConsentButton().click();
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.aboutLink().eq(0).click();
            epamSiteLocators.contacUsButton().click();
            epamSiteLocators.submitButton().click();
            epamSiteLocators.firstNameError().should('be.visible');
            epamSiteLocators.lastNameError().should('be.visible');
            epamSiteLocators.emailError().should('be.visible');
            epamSiteLocators.phoneError().should('be.visible');
            //cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_comment_how_hear_about-error').scrollIntoView().eq(1).should('be.visible');
            //cy.get('[type="checkbox"]').eq(0).realHover();
            //cy.get('#new_form_gdprConsent-error').should('be.visible');
        })

        it('Check company logo', () =>{
            epamSiteLocators.cookyConsentButton().click();
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.aboutLink().eq(0).click();
            cy.url().should('eq', `${baseUrl}/about`);
            epamSiteLocators.epamLogo().should('be.visible').click();
            cy.url().should('eq', `${baseUrl}/`);
        })

        it('Check download report', () =>{
            epamSiteLocators.cookyConsentButton().click();
            epamSiteLocators.dropdownMenu().should('be.visible').click();
            epamSiteLocators.aboutLink().eq(0).click();
            cy.url().should('eq', `${baseUrl}/about`);
            epamSiteLocators.downloadDocButton().should('be.visible').click();
            epamSiteLocators.docRouth().should('exist');
        })
})