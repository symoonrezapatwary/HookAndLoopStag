import test from "@fixtures/basePages"
import NavigationPage from "@pages/Navigation.page"
test("001 | Verify The search functionality by random character triggers to wrong input", async ({ page, NAvigationPage }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://www.gsfcarparts.com/?convert_optout=1')

    })
    await test.step('Input the wrong search', async () => {
        await NAvigationPage.Wrong_search()
    })
    await test.step('Click on the search button', async () => {
        await NAvigationPage.Click_searchbtn()
    await test.step('Check for the availabilityMSG', async () => {
            await NAvigationPage.Check_For_TheAvailabilityMSG()
        })


    })

})
test("002 | Verify The search functionality correct search parameter", async ({ page, NAvigationPage }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://www.gsfcarparts.com/?convert_optout=1')

    })
    await test.step('Input the wrong search', async () => {
        await NAvigationPage.Valid_search()
    })
    await test.step('Click on the search button', async () => {
        await NAvigationPage.Click_searchbtn()
    await test.step('Check for the availabilityMSG', async () => {
            await NAvigationPage.Check_For_TheVAlidAvailabilityMSG()
        })


    })

})