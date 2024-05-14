import { expect, Page } from "@playwright/test";




export default class NavigationPage {
    private page: Page;
    
    // static login: any;
    constructor(page: Page) {
        this.page = page;
        
    }
    private AutomationEx_page_elements = {
        Menubar:"//span[@class='action nav-toggle']"
    }
    async Menuclick() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Menubar)

        try {
            await ele.click({force:true,delay:100})


        } catch (error) {
            throw new Error('Unable to find the Search input field element from the Homepage |  Error occured: ' + error)
        }
    }
    

}