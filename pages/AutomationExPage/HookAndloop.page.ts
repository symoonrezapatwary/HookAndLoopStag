import { expect, Page } from "@playwright/test";




export default class AutomationEXPage {
    private page: Page;
    
    // static login: any;
    constructor(page: Page) {
        this.page = page;
        
    }

    private AutomationEx_page_elements = {

        
        userName:"//input[@placeholder='Username']",
        password:"(//input[@type='password'])[1]",
        LoginBTN:"(//span[text()='Log In'])[2]",
        LoginValidation:"(//span[text()='System Admin'])[1]",
        eventandCorses:"//a[@title='Events & Courses']",
        TestSymoonevnt:"//img[@alt='Test Event Symoon']",
        AddMember:"(//div[contains(@class,'flex w-full')]//a)[2]",
        Tickincreaser:"(//button[contains(@class,'button-plus rounded-r')])[1]",
        ProcceedTochkoutBTN:"//span[text()='Proceed to checkout']",
        checkout:"//button[text()='Proceed to checkout']",
        AdminPaybtn:"(//span[text()='Admin Pay'])[1]",
        ProccedBTN:"//span[text()='Click to proceed']",
        PayementSuccessmsg:"h2",
       


    }
    async userNameinput() {
        const ele = this.page.locator(this.AutomationEx_page_elements.userName)

        try {
            await this.page.waitForTimeout(5000)
            await ele.fill("admin")
            


        } catch (error) {
            throw new Error('Unable to find the username input field |  Error occured: ' + error)
        }
    }
    async passwordInput() {
        const ele = this.page.locator(this.AutomationEx_page_elements.password)

        try {
            await this.page.waitForTimeout(5000)
            await ele.fill("bri-S1subaru@")
            
            


        } catch (error) {
            throw new Error('Unable to find the password input field |  Error occured: ' + error)
        }
    }
    async loginClick() {
        const ele = this.page.locator(this.AutomationEx_page_elements.LoginBTN)

        try {
            await ele.click()
            


        } catch (error) {
            throw new Error('Unable to find the login button |  Error occured: ' + error)
        }
    }
    async loginValidation() {
        const ele = this.page.locator(this.AutomationEx_page_elements.LoginValidation)

        try {
            await ele.isVisible()
            


        } catch (error) {
            throw new Error('Login Unsuccessful |  Error occured: ' + error)
        }
    }
    async eventnavClick() {
        const ele = this.page.locator(this.AutomationEx_page_elements.eventandCorses)

        try {
            await ele.click()
            await this.page.waitForLoadState()
            


        } catch (error) {
            throw new Error('Unable to find Event and courses button |  Error occured: ' + error)
        }
    }
    async eventClick() {
        const ele = this.page.frameLocator('iframe').locator(this.AutomationEx_page_elements.TestSymoonevnt)

        try {
            
            await ele.click({force:true,delay:100,button:"left"})
            await this.page.waitForLoadState()
            
            
            


        } catch (error) {
            throw new Error('Unable to find Event |  Error occured: ' + error)
        }
    }
    async TickaddClick() {
        const ele = this.page.frameLocator('iframe').locator(this.AutomationEx_page_elements.AddMember)

        try {
            
            await ele.click()
            
            


        } catch (error) {
            throw new Error('Unable to find the ticket add button |  Error occured: ' + error)
        }
    }
    async TickincreaserClick() {
        const ele = this.page.frameLocator('iframe').locator(this.AutomationEx_page_elements.Tickincreaser)

        try {
            
            await ele.click()
            
            


        } catch (error) {
            throw new Error('Unable to find the ticket increaset button|  Error occured: ' + error)
        }
    }
    async ProcceedTochkoutClick() {
        const ele = this.page.frameLocator('iframe').locator(this.AutomationEx_page_elements.ProcceedTochkoutBTN)

        try {
            
            await ele.click()
            
            


        } catch (error) {
            throw new Error('Unable to Procceed to checkout button |  Error occured: ' + error)
        }
    }
    async chkoutClick() {
        const ele = this.page.frameLocator('iframe').locator(this.AutomationEx_page_elements.checkout)

        try {
            
            await ele.click()
            
            


        } catch (error) {
            throw new Error('Unable to Procceed to checkout button |  Error occured: ' + error)
        }
    }
    async AdminPayClick() {
        const ele = this.page.locator(this.AutomationEx_page_elements.AdminPaybtn)

        try {
            
            await ele.click()
            
            


        } catch (error) {
            throw new Error('Unable to Procceed to checkout button |  Error occured: ' + error)
        }
    }
    async ProcceedClick() {
        const ele = this.page.locator(this.AutomationEx_page_elements.ProccedBTN)

        try {
            
            await ele.click()
            await this.page.waitForLoadState()
            
            


        } catch (error) {
            throw new Error('Unable to Procceed to checkout button |  Error occured: ' + error)
        }
    }
    async PaymentSuccess() {
        const ele = this.page.locator(this.AutomationEx_page_elements.PayementSuccessmsg)

        try {
            
            await ele.isVisible()
            
            


        } catch (error) {
            throw new Error('Unable to Procceed to checkout button |  Error occured: ' + error)
        }
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

  
    

