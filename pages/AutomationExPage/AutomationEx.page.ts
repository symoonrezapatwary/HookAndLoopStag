import { expect, Page } from "@playwright/test";




export default class AutomationEXPage {
    private page: Page;
    
    // static login: any;
    constructor(page: Page) {
        this.page = page;
        
    }

    private AutomationEx_page_elements = {
        VRM_Input: "//input[@placeholder='ENTER REG']",
        GO_Button:"//span[text()='Go']",
        EmptyVRMAlert:"//div[text()='Vehicle could not be found']",
        SelectVRM1drpdwn:"(//select[@class='vrm-select'])[1]",
        SelectVRM1Option:"(//option[@value='BMW'])[1]",
        SelectVRM2dropdown:"(//select[@class='vrm-select'])[2]",
        SelecModelOption:"//option[text()='3 SERIES']",
        SelectYEarDRpdwn:"(//select[@class='vrm-select'])[3]",
        YearOption:"//option[text()='2021']",
        SelectEngineDropdown:"//select[@name='engine']",
        EngineOption:"//option[text()='2.0 318i']",
        SelectBodydrpdwn:"//select[@name='body']",
        BodyOption:"//option[text()='Saloon']",
        SelectHPdrpdwn:"//select[@name='kw_hp']",
        HPOPtion:"//option[text()='140/190']",

       


    }//Checking the visibility of the Logo from the Home Page
    async VRM_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.VRM_Input)

        try {
            await ele.fill("FL55ylj")


        } catch (error) {
            throw new Error('Unable to find the VRM element from the Homepage |  Error occured: ' + error)
        }
    }
    async Go_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.GO_Button)

        try {
            await ele.dblclick()


        } catch (error) {
            throw new Error('Unable to find the Go Button element from the Homepage |  Error occured: ' + error)
        }
    }
    async VRM_EmptyInput() {
        const ele = this.page.locator(this.AutomationEx_page_elements.VRM_Input)

        try {
            await ele.fill("      ")


        } catch (error) {
            throw new Error('Unable to find the VRM element from the Homepage |  Error occured: ' + error)
        }
    }
    async VRM_WrongInput() {
        const ele = this.page.locator(this.AutomationEx_page_elements.VRM_Input)

        try {
            await ele.fill("123456")


        } catch (error) {
            throw new Error('Unable to find the VRM element from the Homepage |  Error occured: ' + error)
        }
    }
    async VRM_WrongAlert() {
        const ele = this.page.locator(this.AutomationEx_page_elements.EmptyVRMAlert)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the  Wrong Alert from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectMakeDRpdown() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SelectVRM1drpdwn)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the dropdown element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectMakeDRpdownOption() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SelectVRM1Option)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await ele.dblclick()


        } catch (error) {
            throw new Error('Unable to find the option element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectModelDRpdown() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SelectVRM2dropdown)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the model dropdown element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectModelOption() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SelecModelOption)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the option element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectYearDRopdown() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SelectYEarDRpdwn)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the year dropdown element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectYearOption() {
        const ele = this.page.locator(this.AutomationEx_page_elements.YearOption)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the year option element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectEngineDRopdown() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SelectEngineDropdown)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the engine dropdown element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectEngineOption() {
        const ele = this.page.locator(this.AutomationEx_page_elements.EngineOption)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the engine option element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectBodyDRopdown() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SelectBodydrpdwn)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the body dropdown element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectBodyOption() {
        const ele = this.page.locator(this.AutomationEx_page_elements.BodyOption)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the body option element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectHPDRopdown() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SelectHPdrpdwn)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the HP dropdown element from the Homepage |  Error occured: ' + error)
        }
    }
    async SelectHpOption() {
        const ele = this.page.locator(this.AutomationEx_page_elements.HPOPtion)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the HP option element from the Homepage |  Error occured: ' + error)
        }
    }


    // private async generateRandomEmail() {
    //     const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    //     let email = '';
    //     for (let i = 0; i < 10; i++) {
    //         email += characters.charAt(Math.floor(Math.random() * characters.length));
    //     }
    //     email += '@example.com';
    //     return email;
    // }

    // //Email input for sign up
    // async Email_Input() {
    //     const email = await this.generateRandomEmail();
    //     const ele= this.page.locator(this.AutomationEx_page_elements.EmailINput)
       

    //     try {
            
    //         // await this.page.fill("//input[@data-qa='signup-email']", email)
    //         await ele.fill(email)
           


    //     } catch (error) {
    //         throw new Error('Unable to find Email input element |  Error occured: ' + error)
    //     }
    }
  
    

