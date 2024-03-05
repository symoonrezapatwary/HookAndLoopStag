import { expect, Page } from "@playwright/test";




export default class AutomationEXPage {
    private page: Page;
    
    // static login: any;
    constructor(page: Page) {
        this.page = page;
        
    }

    private AutomationEx_page_elements = {
        Homepage: "//img[@alt='Website for automation practice']",
        AddToCartBTN: "(//a[@data-product-id='2'])[1]",
        cartBTn: "//u[text()='View Cart']",
        CartPage: "//table[@id='cart_info_table']",
        ProceedTochekOut: "//a[contains(text(),'Proceed To Checkout')]",
        register: "//u[text()='Register / Login']",
        Nameinput: "//input[@data-qa='signup-name']",
        EmailInput: "//input[@data-qa='signup-email']",
        AlreadyExitMail:"//p[text()='Email Address already exist!']",
        SignUpBTN: "//button[@data-qa='signup-button']",
        title: "(//input[@type='radio'])[1]",
        Password: "//input[@type='password']",
        Days: "//select[@id='days']",
        Option1: "(//option[normalize-space()='1'])[1]",
        Months: "//select[@data-qa='months']",
        jan: "//option[text()='December']",
        Years: "//select[@data-qa='years']",
        Year1999: "//option[text()='2001']",
        NewsSettler: "(//input[@type='checkbox'])[1]",
        Special_Offer: "(//input[@type='checkbox'])[2]",
        First_Name: "//input[@data-qa='first_name']",
        Last_Name: "//input[@data-qa='last_name']",
        Country: "//select[@data-qa='country']",
        india: "//option[text()='United States']",
        State: "//input[@data-qa='state']",
        City: "//input[@data-qa='city']",
        ZipCode: "//input[@data-qa='zipcode']",
        Mobile: "//input[@data-qa='mobile_number']",
        Create_AccountBTn: "//button[@data-qa='create-account']",
        Company: "//input[@data-qa='company']",
        Address: "//input[@data-qa='address']",
        Account_created: "//b[text()='Account Created!']",
        ContinueBTN: "//a[@data-qa='continue-button']",
        VerifyUserName: "//b[text()='Symoon']",
        cartNav: "//a[contains(text(),'Cart')]",
        AddressDetails: "//ul[contains(@class,'address item')]",
        CartInfo: "//div[@class='table-responsive cart_info']",
        commenttext: "//label[text()='If you would like to add a comment about your order, please write it in the field below.']/following::textarea",
        Place_order: "//a[contains(text(),'Place Order')]",
        Name_on_Card: "//input[@data-qa='name-on-card']",
        cardNo: "//input[@data-qa='card-number']",
        Cvc: "//input[@data-qa='cvc']",
        MM: "//input[@placeholder='MM']",
        year: "//input[@placeholder='YYYY']",
        payndconfirm: "//button[text()='Pay and Confirm Order']",
        orderSuccess: "//div[text()[normalize-space()='Your order has been placed successfully!']]",


    }//Checking the visibility of the Logo from the Home Page
    async HomePageVisibility() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Homepage)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the LOGO element from the Homepage |  Error occured: ' + error)
        }
    }
    // Click on the add to cart button
    async AddTocartClick() {
        const ele = this.page.locator(this.AutomationEx_page_elements.AddToCartBTN)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the add to cart button element |  Error occured: ' + error)
        }
    }
    //Click on the cart button
    async CartbTnClick() {
        const ele = this.page.locator(this.AutomationEx_page_elements.cartBTn)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the cart button element |  Error occured: ' + error)
        }
    }
    // cart page visibility

    async CartPageVisibility() {
        const ele = this.page.locator(this.AutomationEx_page_elements.CartPage)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the cart page element |  Error occured: ' + error)
        }
    }
    // Click on the procceed to chekout button
    async ProcceedTochkOut_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.ProceedTochekOut)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the procceed to chekout hyperlink  element |  Error occured: ' + error)
        }
    }
    //Click 'Register / Login' button
    async Register_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.register)

        try {
            await ele.click()


        } catch (error) {
            throw new Error("Unable to find the 'Register / Login' element |  Error occured: " + error)
        }
    }
    //Name input for sign up
    async Name_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Nameinput)

        try {
            await ele.fill("Symoon")


        } catch (error) {
            throw new Error('Unable to find Name input element |  Error occured: ' + error)
        }
    }


    private async generateRandomEmail() {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let email = '';
        for (let i = 0; i < 10; i++) {
            email += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        email += '@example.com';
        return email;
    }

    //Email input for sign up
    async Email_Input() {
        const email = await this.generateRandomEmail();
       

        try {
            
            await this.page.fill("//input[@data-qa='signup-email']", email)
           


        } catch (error) {
            throw new Error('Unable to find Email input element |  Error occured: ' + error)
        }
    }
  
    // SignUp button Click
    async SignUpBTN_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SignUpBTN)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the sign up button element |  Error occured: ' + error)
        }
    }
    // Title click
    async Title_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.title)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the title radio element |  Error occured: ' + error)
        }
    }
    // Password input
    async SignupPassword_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Password)

        try {
            await ele.fill("symoon@23")


        } catch (error) {
            throw new Error('Unable to find the Password input field element |  Error occured: ' + error)
        }
    }
    // Days click
    async Days_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Days)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the days element |  Error occured: ' + error)
        }
    }
    // Day 1 click
    async Select_day() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Option1)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the option 1 element |  Error occured: ' + error)
        }
    }
    // Months click
    async Months_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Months)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Months element |  Error occured: ' + error)
        }
    }
    // january click
    async Select_Month() {
        const ele = this.page.locator(this.AutomationEx_page_elements.jan)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the option 1 element |  Error occured: ' + error)
        }
    }
    // Years click
    async Years_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Years)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the years element |  Error occured: ' + error)
        }
    }
    // 1999 click
    async YearSelection() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Year1999)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the option element |  Error occured: ' + error)
        }
    }
    // Newsletter Checkbox click
    async Newsletter_Chkbx_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.NewsSettler)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the  Newsletter Checkbox element |  Error occured: ' + error)
        }
    }
    // Special offer Checkbox click
    async Specialoffr_Chkbx_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Special_Offer)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the  Special offer Checkbox element |  Error occured: ' + error)
        }
    }
    // First Name input
    async First_name_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.First_Name)

        try {
            await ele.fill("Symoon")


        } catch (error) {
            throw new Error('Unable to find the First Name input  element |  Error occured: ' + error)
        }
    }
    // Last Name input
    async Last_name_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Last_Name)

        try {
            await ele.fill("Reza")


        } catch (error) {
            throw new Error('Unable to find the Last Name input  element |  Error occured: ' + error)
        }
    }
    // Country dropdown Click
    async Country_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Country)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Country dropdown element |  Error occured: ' + error)
        }
    }
    // Select Country
    async Select_Country() {
        const ele = this.page.locator(this.AutomationEx_page_elements.india)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Country option element |  Error occured: ' + error)
        }
    }

    // State Input
    async State_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.State)

        try {
            await ele.fill("Mumbai")


        } catch (error) {
            throw new Error('Unable to find the State input element |  Error occured: ' + error)
        }
    }
    // City Input
    async City_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.City)

        try {
            await ele.fill("Mumbai")


        } catch (error) {
            throw new Error('Unable to find the City input element |  Error occured: ' + error)
        }
    }

    // Zip Code Input
    async ZIP_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.ZipCode)

        try {
            await ele.fill("400001")


        } catch (error) {
            throw new Error('Unable to find the ZIP input element |  Error occured: ' + error)
        }
    }
    // Mobile Nnumber Input
    async Mobile_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Mobile)

        try {
            await ele.fill("022 6774 5678")


        } catch (error) {
            throw new Error('Unable to find the Mobile Nnumber Input element |  Error occured: ' + error)
        }
    }
    // Create account button click
    async CreateAccount_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Create_AccountBTn)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Create account button element |  Error occured: ' + error)
        }
    }
    // Company Input
    async Company_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Company)

        try {
            await ele.fill("kinetik")


        } catch (error) {
            throw new Error('Unable to find the Create account button element |  Error occured: ' + error)
        }
    }
    // Address Input
    async Address_Input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Address)

        try {
            await ele.fill("Avvai Shanmugam Salai, Royapettah, Chennai, Tamil Nadu,")


        } catch (error) {
            throw new Error('Unable to find the Address Input element |  Error occured: ' + error)
        }
    }
    // Verify Account created
    async AccountCreated_verify() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Account_created)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the Account Created element |  Error occured: ' + error)
        }
    }
    // Click on the continue button
    async ContinueBtn_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.ContinueBTN)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Continue button element |  Error occured: ' + error)
        }
    }
    // verify logged in as user
    async verift_User() {
        const ele = this.page.locator(this.AutomationEx_page_elements.VerifyUserName)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the logged in user name element |  Error occured: ' + error)
        }
    }
    // Click on the cart button from the navigation bar
    async cartNav_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.cartNav)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the logged in user name element |  Error occured: ' + error)
        }
    }
    // Verify Address details 
    async verify_Address() {
        const ele = this.page.locator(this.AutomationEx_page_elements.AddressDetails)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the Address details  element |  Error occured: ' + error)
        }
    }
    // Verify Review Order
    async verify_review_cartinfo() {
        const ele = this.page.locator(this.AutomationEx_page_elements.CartInfo)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the Review Order  element |  Error occured: ' + error)
        }
    }
    // input comment
    async Comment_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.commenttext)

        try {
            await ele.fill("Test Comment")


        } catch (error) {
            throw new Error('Unable to find the comment text area element |  Error occured: ' + error)
        }
    }
    // place order button click
    async Place_order_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Place_order)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Place order button element |  Error occured: ' + error)
        }
    }
    // name on card input
    async Name_on_card_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Name_on_Card)

        try {
            await ele.fill("Symoon Reza")


        } catch (error) {
            throw new Error('Unable to find the name on card input element |  Error occured: ' + error)
        }
    }
    // card number input
    async cardNo_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.cardNo)

        try {
            await ele.fill("4242424242424242")


        } catch (error) {
            throw new Error('Unable to find the card number input element |  Error occured: ' + error)
        }
    }
    // cvc input
    async CVC_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Cvc)

        try {
            await ele.fill("300")


        } catch (error) {
            throw new Error('Unable to find the cvc input element |  Error occured: ' + error)
        }
    }
    // MM input
    async MM_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.MM)

        try {
            await ele.fill("02")


        } catch (error) {
            throw new Error('Unable to find the MM input element |  Error occured: ' + error)
        }
    }
    // Year input
    async Year_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.year)

        try {
            await ele.fill("2025")


        } catch (error) {
            throw new Error('Unable to find the year input element |  Error occured: ' + error)
        }
    }
    // Pay And confirm click
    async payndconfirm_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.payndconfirm)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the pay and confirm button element |  Error occured: ' + error)
        }
    }
    // verify your order has been placed successfully message
    async Verify_orderSuccess() {
        const ele = this.page.locator(this.AutomationEx_page_elements.orderSuccess)

        try {
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the your order has been placed successfully message element |  Error occured: ' + error)
        }
    }
}
