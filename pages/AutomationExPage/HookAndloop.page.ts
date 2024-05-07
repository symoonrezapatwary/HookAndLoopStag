import { expect, Page } from "@playwright/test";




export default class AutomationEXPage {
    private page: Page;
    
    // static login: any;
    constructor(page: Page) {
        this.page = page;
        
    }

    private AutomationEx_page_elements = {

        Nav_Brands:"//span[text()='Brands']",
        DuraGrip_Brand:"//span[@wz_dt_ref='true']",
        SewON:"(//dd[@class='brands odd']//span)[1]",
        AddToCartbtn:"//button[@title='Add to Cart']",
        BlackClr:"(//div[@class='swatch-option color'])[1]",
        Width:"//div[@aria-label='6']",
        Both:"//div[@aria-label='Both']",
        Checkout:"//span[text()='Checkout']",
        ChkoutEmail:"(//input[@name='username'])[2]",
        FirstName:"(//span[text()='First Name']/following::input)[1]",
        LastName:"(//span[text()='Last Name']/following::input)[1]",
        Address:"(//span[text()='Street Address: Line 1']/following::input)[1]",
        CountryDrpdwn:"(//div[@class='control']//select)[1]",
        germanyClick:"//option[@data-title='Germany']",
        City:"input[name='city']",
        Zip:"input[name='postcode']",
        PhoneInput:"//input[@inputmode='numeric']",
        Statedrpdwn:"AD5IKOR",
        Berlin:"//option[@data-title='Berlin']",
        priorityMall:"//table[@class='table-checkout-shipping-method']",
        nextbtn:"//span[text()='Next']",
        CardnoInput:"//input[@title='Credit Card Number']",
        CVC:"//input[@title='Card Verification Number']",
        PlaceOrder:"(//button[@title='Place Order'])[1]",
        No:"//body[contains(@class,'pl-thm-raveinfosys pl-thm-raveinfosys-hookandloop')]",
        OrderSuccess:"page-title-wrapper",
        VelcroSewon:"(//dd[@class='velcro even']//span)[1]",
        velcrocolor:"//div[@class='swatch-option image']",
         VelcroLoop:"//div[@aria-label='Loop']",
        duragripPeelSteal:"(//dd[@class='brands odd']//span)[2]",
        RubberClic:"//div[@aria-label='Rubber']",
        pealBlack:"//div[@aria-label='Black']",
        velcroPealandseal:"(//dd[@class='velcro even']//span)[2]",
        fourinch:"//div[@aria-label='4']",
        coins:"(//span[text()='Coins'])[3]",
        coinswidth:"//div[@aria-label='1 7/8']",

       


    }
    async Bands_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Nav_Brands)

        try {
            await ele.click()
            


        } catch (error) {
            throw new Error('Unable to find the Brands Button Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async DuraGripBands_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.DuraGrip_Brand)

        try {
            await ele.hover()


        } catch (error) {
            throw new Error('Unable to find the DuraGripBrands Button Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async Sewon_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.SewON)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Sew On Button Element from the Nav Bar |  Error occured: ' + error)
        }
    }
    async Width_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Width)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click({force:true,delay:100})


        } catch (error) {
            throw new Error('Unable to find the Width Element from the PDP |  Error occured: ' + error)
        }
    }
    async BlackClr_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.BlackClr)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the the black color Element from the PDP |  Error occured: ' + error)
        }
    }
    async Both_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Both)

        try {
            await ele.click({force:true})


        } catch (error) {
            throw new Error('Unable to find the the Both(Hook & Loop) Element from the PDP |  Error occured: ' + error)
        }
    }
    async AddToCartBTN_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.AddToCartbtn)

        try {
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Add To Cart Button Element from the PDP |  Error occured: ' + error)
        }
    }
    async ChkOutBTN_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Checkout)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Add To Checkout Button Element from the PDP |  Error occured: ' + error)
        }
    }
    async Email_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.ChkoutEmail)

        try {
            await this.page.waitForTimeout(10000)
            await ele.isVisible()
            await ele.dblclick({force:true, delay:100})
            await ele.fill("Test@test.com")
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the Email Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async FirstName_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.FirstName)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("John")


        } catch (error) {
            throw new Error('Unable to find the First Name Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async LastName_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.LastName)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("David")


        } catch (error) {
            throw new Error('Unable to find the last Name Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async Address_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Address)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("Test Dummy address")


        } catch (error) {
            throw new Error('Unable to find the Address Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async CountryDrpdown_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.CountryDrpdwn)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            //await ele.click()


        } catch (error) {
            throw new Error('Unable to find the Country dropdown Element from the PDP |  Error occured: ' + error)
        }
    }
    async Countryoption_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.germanyClick)

        try {
            await this.page.waitForTimeout(6000)
            await ele.isVisible()
            await this.page.waitForTimeout(6000)
            await ele.dblclick({force:true, delay:200,button:"left"})
            await this.page.waitForTimeout(10000)
            await ele.dblclick({force:true, delay:200,button:"left"})
            


        } catch (error) {
            throw new Error('Unable to find the country Option Element from the PDP |  Error occured: ' + error)
        }
    }
    async StateDrpdwn_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Statedrpdwn)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})


        } catch (error) {
            throw new Error('Unable to find the country Option Element from the PDP |  Error occured: ' + error)
        }
    }
    async Stateoption_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Berlin)

        try {
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})


        } catch (error) {
            throw new Error('Unable to find the country Option Element from the PDP |  Error occured: ' + error)
        }
    }
    async City_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.City)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("Berlin")
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the City Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async Zip_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.Zip)

        try {
             await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("10178")
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the ZIP Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async Phone_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.PhoneInput)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("+49 30 822275893")
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the Phone Input Element from the PDP |  Error occured: ' + error)
        }
    }
    async PriorityMAll_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.priorityMall)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.dblclick({force:true, delay:200})
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the priority mall Element from the Shipping deatils page |  Error occured: ' + error)
        }
    }
    async NextBTN_Click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.nextbtn)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await this.page.waitForTimeout(3000)


        } catch (error) {
            throw new Error('Unable to find the Next button Element from the Shipping deatils page |  Error occured: ' + error)
        }
    }
   
    async handleDropdown(dropdownSelector: string, optionValue: string) {
        // Locate the dropdown element
        const dropdown = await this.page.$(dropdownSelector);
        if (!dropdown) {
            throw new Error(`Dropdown element with selector ${dropdownSelector} not found.`);
        }

        // Select the option from the dropdown by its value
        await dropdown.selectOption({ value: optionValue });
    }
    async countrydropdown(){
        try {
            await this.handleDropdown("(//div[@class='control']//select)[1]", "DE");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async StateDropdown(dropdownSelector: string, optionValue: string) {
        // Locate the dropdown element
        const dropdown = await this.page.$(dropdownSelector);
        if (!dropdown) {
            throw new Error(`Dropdown element with selector ${dropdownSelector} not found.`);
        }

        // Select the option from the dropdown by its value
        await dropdown.selectOption({ value: optionValue });
    }
    async Handlestatedropdown(){
        try {
            await this.handleDropdown("(//select[@class='select'])[2]", "82");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async Card_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.CardnoInput)

        try {
            await this.page.waitForTimeout(6000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("5424000000000015")


        } catch (error) {
            throw new Error('Unable to find the card number Input Element from the checkout |  Error occured: ' + error)
        }
    }
    async MonthDropdown(dropdownSelector: string, optionValue: string) {
        // Locate the dropdown element
        const dropdown = await this.page.$(dropdownSelector);
        if (!dropdown) {
            throw new Error(`Dropdown element with selector ${dropdownSelector} not found.`);
        }

        // Select the option from the dropdown by its value
        await dropdown.selectOption({ value: optionValue });
    }
    async Handlemonthdropdown(){
        try {
            await this.handleDropdown("//select[@class='select month']", "2");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async YearDropdown(dropdownSelector: string, optionValue: string) {
        // Locate the dropdown element
        const dropdown = await this.page.$(dropdownSelector);
        if (!dropdown) {
            throw new Error(`Dropdown element with selector ${dropdownSelector} not found.`);
        }

        // Select the option from the dropdown by its value
        await dropdown.selectOption({ value: optionValue });
    }
    async Handleyeardropdown(){
        try {
            await this.handleDropdown("//select[@class='select year']", "2025");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    async Cvc_input() {
        const ele = this.page.locator(this.AutomationEx_page_elements.CVC)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})
            await ele.fill("300")


        } catch (error) {
            throw new Error('Unable to find the card number Input Element from the checkout |  Error occured: ' + error)
        }
    }
    async PLace_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.PlaceOrder)

        try {
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})


        } catch (error) {
            throw new Error('Unable to find the Place order button Element from the checkout |  Error occured: ' + error)
        }
    }
    async No_click() {
        const ele = this.page.locator(this.AutomationEx_page_elements.No)

        try {  
            await this.page.waitForTimeout(3000)
            await ele.isVisible()
            await this.page.waitForTimeout(3000)
            await ele.click({force:true, delay:100})


        } catch (error) {
            throw new Error('Unable to find the No button Element from the checkout |  Error occured: ' + error)
        }
    }
    async OrderSuccess() {
        const ele = this.page.locator(this.AutomationEx_page_elements.OrderSuccess)

        try {
            await this.page.waitForTimeout(6000)
            await ele.isVisible()


        } catch (error) {
            throw new Error('Unable to find the Oder success Element from the checkout |  Error occured: ' + error)
        }
    }
    async isValidURL(url: string) :Promise<boolean>{
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
        
    }
    
    // Example usage:
    async URLValid(){
    const url = 'https://dev2.hookandloop.com/checkout/onepage/success/';
    if (await this.isValidURL(url)) {
        console.log('Valid URL');
    } else {
        console.log('Invalid URL');
    }
}
async velcroSewonClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.VelcroSewon)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on Element from the checkout |  Error occured: ' + error)
    }
}
async velcroSewoncolorClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.velcrocolor)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on color Element from the checkout |  Error occured: ' + error)
    }
}
async velcroSewonloopClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.VelcroLoop)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on loop Element from the checkout |  Error occured: ' + error)
    }
}
async DuragripPealandstealClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.duragripPeelSteal)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on loop Element from the checkout |  Error occured: ' + error)
    }
}
async rubberClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.RubberClic)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on loop Element from the checkout |  Error occured: ' + error)
    }
}
async pealblackClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.pealBlack)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro sew on loop Element from the checkout |  Error occured: ' + error)
    }
}
async VelcropealClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.velcroPealandseal)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro peal and stick Element from the checkout |  Error occured: ' + error)
    }
}
async fourinchClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.fourinch)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the Velcro 4 inch Element from the checkout |  Error occured: ' + error)
    }
}
async coinsClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.coins)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(3000)


    } catch (error) {
        throw new Error('Unable to find the coins Element from the checkout |  Error occured: ' + error)
    }
}
async coinswidthClick() {
    const ele = this.page.locator(this.AutomationEx_page_elements.coinswidth)

    try {
        await this.page.waitForTimeout(6000)
        await ele.isVisible()
        await this.page.waitForTimeout(3000)
        await ele.click({force:true,delay:100})
        await this.page.waitForTimeout(6000)


    } catch (error) {
        throw new Error('Unable to find the Velcro 4 inch Element from the checkout |  Error occured: ' + error)
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

  
    

