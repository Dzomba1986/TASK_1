
class epamSite{
      
        cookyConsentButton() {
          return cy.get('#onetrust-accept-btn-handler');
        }

        dropdownMenu() {
            return cy.get('.hamburger-menu__button');
        }

        aboutLink() {
            return cy.get('[href="/about"]');
        }

        downloadDocButton(){
            return cy.get('[href="https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_Q4_EOY.pdf"]');
        }

        docRouth() {
            return cy.readFile('/Users/Nenad_Damjanovic/Desktop/SQE_TASK_1/cypress/downloads/EPAM_Corporate_Overview_Q4_EOY.pdf');
        }

        epamLogo() {
            return cy.get('[class="header__logo header__logo-light"]');
        }

        contacUsButton() {
            return cy.get('[class="button__content button__content--desktop"]').contains('CONTACT US');
        }

        submitButton() {
            return cy.get('[type="submit"]');
        }

        firstNameError() {
            return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_first_name-error');
        }

        lastNameError() {
            return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_last_name-error');
        }

        emailError() {
            return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_email-error');
        }

        phoneError() {
            return cy.get('#_content_epam_en_about_who-we-are_contact_jcr_content_content-container_section_section-par_form_constructor_user_phone-error');
        }

        howDidYouHearAboutError() {
            return cy.get("div[class='dropdown-list-ui validation-field'] span[class='select2 select2-container select2-container--default form-component__field']");
        }

        consentCheckboxError() {
            return cy.get('[id="new_form_gdprConsent-error"]');
        }

        searchIcon() {
            return cy.get('[class="search-icon dark-icon header-search__search-icon"]');
        }

        searchInputField() {
            return cy.get('#new_form_search');
        }

        findButton() {
            return cy.get('.bth-text-layer');
        }

        searchResultsCounter() {
            return cy.get('.search-results__counter');
        }

        sectionTitleHeader() {
            return cy.get('.museo-sans-light');
        }

        locationTabs() {
            return cy.get('[role="tab"]');
        }

        locationCountryList() {
            return cy.get('[class="locations-viewer-23__country-title list"]');
        }

        footerTitles() {
            return cy.get('[class="heading large-preheader"]');
        }

        leftSectionPolicieList() {
            return cy.get('[class="ul policies-left"] li');
        }

        rightSectionPolicieList() {
            return cy.get('[class="ul policies-right"] li');
        }

        languageButton() {
            return cy.get('.location-selector__button-language');
        }

        languageUK() {
            return  cy.get('[lang="uk"]');
        }

        themeSwitcher() {
            return  cy.get('.theme-switcher');
        }

        themeTitle() {
            return  cy.get('[class="theme-switcher-label light-mode-label-text body-text-small"]');
        }

        headerTitle() {
            return  cy.get('head title');
        }
}


module.exports = new epamSite();