
class epamSite{
      
        get cookyConsentButton() {
          return cy.get('#onetrust-accept-btn-handler');
        }

        get dropdownMenu() {
            return cy.get('.hamburger-menu__button');
        }

        get aboutLink() {
            return cy.get('[href="/about"]');
        }

        get downloadDocButton(){
            return cy.get('[href="https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_Q4_EOY.pdf"]');
        }

        get docRouth() {
            return cy.readFile('/Users/Nenad_Damjanovic/Desktop/SQE_TASK_1/cypress/downloads/EPAM_Corporate_Overview_Q4_EOY.pdf');
        }

        get epamLogo() {
            return cy.get('[class="header__logo header__logo-light"]');
        }

        get contacUsButton() {
            return cy.get('[class="button__content button__content--desktop"]').contains('CONTACT US');
        }

        get submitButton() {
            return cy.get('[type="submit"]');
        }

        get firstNameError() {
            return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name-error');
        }

        get lastNameError() {
            return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name-error');
        }

        get emailError() {
            return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email-error');
        }

        get phoneError() {
            return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone-error');
        }

        get searchIcon() {
            return cy.get('[class="search-icon dark-icon header-search__search-icon"]');
        }

        get searchInputField() {
            return cy.get('#new_form_search');
        }

        get findButton() {
            return cy.get('.bth-text-layer');
        }

        get searchResultsCounter() {
            return cy.get('.search-results__counter');
        }

        get sectionTitleHeader() {
            return cy.get('.museo-sans-light');
        }

        get locationTabs() {
            return cy.get('[role="tab"]');
        }

        get locationCountryList() {
            return cy.get('[class="locations-viewer-23__country-title list"]');
        }

        get footerTitles() {
            return cy.get('[class="heading large-preheader"]');
        }

        get leftSectionPolicieList() {
            return cy.get('[class="ul policies-left"] li');
        }

        get rightSectionPolicieList() {
            return cy.get('[class="ul policies-right"] li');
        }

        get languageButton() {
            return cy.get('.location-selector__button-language');
        }

        get languageUK() {
            return  cy.get('[lang="uk"]');
        }

        get themeSwitcher() {
            return  cy.get('.theme-switcher');
        }

        get themeTitle() {
            return  cy.get('[class="theme-switcher-label light-mode-label-text body-text-small"]');
        }

        get headerTitle() {
            return  cy.get('head title');
        }
}


module.exports = new epamSite();