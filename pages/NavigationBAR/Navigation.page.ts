import { expect, Page } from "@playwright/test";




export default class NavigationPage {
    private page: Page;
    
    // static login: any;
    constructor(page: Page) {
        this.page = page;
        
    }
    private AutomationEx_page_elements = {
        SearchINputfield:"//input[@class='input-text search-input']",
        SearchButton:"//button[@title='Search']",
        ProductAvailabilityMSg:"//div[text()[normalize-space()='Your search returned no results.']]",
        VAlidproductAvailability:"//a[contains(.,'ENGINE TIMING TOOL SET BMW 1.8')]",
    }
    async Wrong_search() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SearchINputfield)

        try {
            await ele.fill("shagfh")


        } catch (error) {
            throw new Error('Unable to find the Search input field element from the Homepage |  Error occured: ' + error)
        }
    }
    async Click_searchbtn() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SearchButton)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Search button element from the Homepage |  Error occured: ' + error)
        }
    }
    async Check_For_TheAvailabilityMSG() {
        const ele = this.page.locator(this.AutomationEx_page_elements.ProductAvailabilityMSg)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the Alert element from the Homepage |  Error occured: ' + error)
        }
    }
    async Valid_search() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SearchINputfield)

        try {
            await ele.fill("BMW")


        } catch (error) {
            throw new Error('Unable to find the Search input field element from the Homepage |  Error occured: ' + error)
        }
    }
    async Check_For_TheVAlidAvailabilityMSG() {
        const ele = this.page.locator(this.AutomationEx_page_elements.VAlidproductAvailability)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the Alert element from the Homepage |  Error occured: ' + error)
        }
    }

}