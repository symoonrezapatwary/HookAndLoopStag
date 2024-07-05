import test from "@fixtures/basePages"

import { devices } from "@playwright/test";


test("001 | Verify The Event Tickets chcekout functionalities are working fine", async ({ page, SigninPage, }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('http://justgo-mvc5.justgo.com/')

    })
    await test.step('Username Input', async () => {
        await SigninPage.userNameinput()

    })
    await test.step('Password Input', async () => {
        await SigninPage.passwordInput()

    })
    await test.step('Log In Button Click', async () => {
        await SigninPage.loginClick()

    })
    await test.step('Log In Validation', async () => {
        await SigninPage.loginValidation()
       

    })
    await test.step('evnt and courses click', async () => {
        await SigninPage.eventnavClick()
        
        

    })
    await test.step('eventclick', async () => {
        
        await SigninPage.eventClick()
        
        

    })
    await test.step('Member ticket Add', async () => {
        
        await SigninPage.TickaddClick()
        await SigninPage.TickincreaserClick()
        
        

    })
    await test.step('Verify the checkout functionalities', async () => {
        
        await SigninPage.ProcceedTochkoutClick()
        await SigninPage.chkoutClick()
        await page.waitForLoadState()
        

    })
    await test.step('Verify the Payment functionalities', async () => {
        
        await SigninPage.AdminPayClick()
        await SigninPage.ProcceedClick()
        await page.waitForLoadState()
        await page.waitForTimeout(6000)
        

    })
    await test.step('Validate payment Successful', async () => {
        
        await SigninPage.PaymentSuccess()
        await page.waitForTimeout(3000)
        

    })


})
