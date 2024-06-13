import test from "@fixtures/basePages"

import { devices } from "@playwright/test";


test("001 | Verify The Event Tickets chcekout functionalities are working fine", async ({ page, AutomationExPage }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://britishgymnastics-sandbox-development.justgo.com/Account.mvc/SignIn')

    })
    await test.step('Username Input', async () => {
        await AutomationExPage.userNameinput()

    })
    await test.step('Password Input', async () => {
        await AutomationExPage.passwordInput()

    })
    await test.step('Log In Button Click', async () => {
        await AutomationExPage.loginClick()

    })
    await test.step('Log In Validation', async () => {
        await AutomationExPage.loginValidation()
       

    })
    await test.step('evnt and courses click', async () => {
        await AutomationExPage.eventnavClick()
        
        

    })
    await test.step('eventclick', async () => {
        
        await AutomationExPage.eventClick()
        
        

    })
    await test.step('Member ticket Add', async () => {
        
        await AutomationExPage.TickaddClick()
        await AutomationExPage.TickincreaserClick()
        
        

    })
    await test.step('Verify the checkout functionalities', async () => {
        
        await AutomationExPage.ProcceedTochkoutClick()
        await AutomationExPage.chkoutClick()
        await page.waitForLoadState()
        

    })
    await test.step('Verify the Payment functionalities', async () => {
        
        await AutomationExPage.AdminPayClick()
        await AutomationExPage.ProcceedClick()
        await page.waitForLoadState()
        

    })
    await test.step('Validate payment Successful', async () => {
        
        await AutomationExPage.PaymentSuccess()
        

    })


})
