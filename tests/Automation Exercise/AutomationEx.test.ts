import test, { expect } from "@fixtures/basePages"
import functions from "@helper-function/functions";
import BaseFunctions from "base-function/baseFunctions";
import { readFileSync } from "fs";
const authFile = 'user.json'

test("001 | Verify the navigation to the URL", async ({ page, AutomationExPage,testData,browser,functions }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://automationexercise.com/')

    })
    await test.step('Verify that home page is visible successfully', async () => {
        await AutomationExPage.HomePageVisibility()

    })
    await test.step('Add products to cart', async () => {
        await AutomationExPage.AddTocartClick()

    })
    await test.step('Click on the cart button', async () => {
        await AutomationExPage.CartbTnClick()

    })
    await test.step('Click on the cart button', async () => {
        await AutomationExPage.CartPageVisibility()

    })
    await test.step('Click Proceed To Checkout', async () => {
        await AutomationExPage.ProcceedTochkOut_click()

    })
    await test.step("Click 'Register / Login' button", async () => {
        await AutomationExPage.Register_click()

    })
    await test.step("Fill all details in Sign up and create account", async () => {
        await AutomationExPage.Name_Input()
        await AutomationExPage.Email_Input()
        await AutomationExPage.SignUpBTN_Click()
        await AutomationExPage.Title_Click()
        await AutomationExPage.SignupPassword_input()
        await AutomationExPage.Days_Click()
        //await AutomationExPage.Select_day()
        await AutomationExPage.Months_Click()
        //await AutomationExPage.Select_Month()
        await AutomationExPage.Years_Click()
        //await AutomationExPage.YearSelection()
        await AutomationExPage.Newsletter_Chkbx_Click()
        await AutomationExPage.Specialoffr_Chkbx_Click()
        await AutomationExPage.First_name_Input()
        await AutomationExPage.Last_name_Input()
        await AutomationExPage.Company_Input()
        await AutomationExPage.Address_Input()
        await AutomationExPage.Country_Click()
        //await AutomationExPage.Select_Country()
        await AutomationExPage.State_Input()
        await AutomationExPage.City_Input()
        await AutomationExPage.ZIP_Input()
        await AutomationExPage.Mobile_Input()
        await AutomationExPage.CreateAccount_Click()


    })
    await test.step("Verify 'ACCOUNT CREATED!' and click 'Continue' button", async () => {
        await AutomationExPage.AccountCreated_verify()
        await AutomationExPage.ContinueBtn_Click()

    })
    await test.step("Verify ' Logged in as username' at top", async () => {
        await AutomationExPage.verift_User()

    })
    await test.step('Click on the cart button', async () => {
        await AutomationExPage.cartNav_Click()

    })
    await test.step('Click Proceed To Checkout', async () => {
        await AutomationExPage.ProcceedTochkOut_click()

    })
    await test.step('Verify Address Details and Review Your Order', async () => {
        await AutomationExPage.verify_Address()
        await AutomationExPage.verify_review_cartinfo()


    })
    await test.step("Enter description in comment text area and click 'Place Order'", async () => {
        await AutomationExPage.Comment_input()
        await AutomationExPage.Place_order_click()



    })
    await test.step("Enter payment details: Name on Card, Card Number, CVC, Expiration date", async () => {
        await AutomationExPage.Name_on_card_input()
        await AutomationExPage.cardNo_input()
        await AutomationExPage.CVC_input()
        await AutomationExPage.MM_input()
        await AutomationExPage.Year_input()





    })
    await test.step("Click 'Pay and Confirm Order' button'", async () => {
        await AutomationExPage.payndconfirm_click()



    })
    await test.step("Verify the success message 'Your order has been placed successfully!'", async () => {
        await AutomationExPage.Verify_orderSuccess()



    })




})

