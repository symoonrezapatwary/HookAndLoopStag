import test from "@fixtures/basePages"



test("001 | Verify The VRM Field is working properly", async ({ page, AutomationExPage }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://www.gsfcarparts.com/?convert_optout=1')

    })
    await test.step('Input the vrm Code', async () => {
        await AutomationExPage.VRM_Input();
    })
    await test.step('Click on the Go button', async () => {
        await AutomationExPage.Go_Click()



    })

})
test("002 | Verify The VRM Field with empty input and click on the go button", async ({ page, AutomationExPage }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://www.gsfcarparts.com/?convert_optout=1')

    })
    await test.step('Input the wrong vrm Code', async () => {
        await AutomationExPage.VRM_EmptyInput();
        await AutomationExPage.Go_Click();
        await AutomationExPage.VRM_WrongInput();
        await AutomationExPage.VRM_WrongAlert()



    })

})
test("003 | Verify The VRM Field with wrong input and click on the go button", async ({ page, AutomationExPage }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://www.gsfcarparts.com/?convert_optout=1')

    })
    await test.step('Input the wrong vrm Code', async () => {
        await AutomationExPage.VRM_WrongInput();
        await test.step('Click on the Go Button', async () => {
            await AutomationExPage.Go_Click();
        })
        await test.step('Check for wrong VRM Alert', async () => {
            await AutomationExPage.VRM_WrongAlert()
        })

    })

})
test.only("004 | Verify The manual vehicle selection is working properly", async ({ page, AutomationExPage }) => {
    await test.step('Navigate to the Url', async () => {
        await page.goto('https://www.gsfcarparts.com/?convert_optout=1')

    })
    await test.step('Click on the Make dropdown', async () => {
        await AutomationExPage.SelectMakeDRpdown();
    })
    await test.step('Click on the "BMW" OPtion', async () => {
        await AutomationExPage.SelectMakeDRpdownOption()
    })
    await test.step('Click on the Model dropdown', async () => {
        await AutomationExPage.SelectModelDRpdown();
    })
    await test.step('Click on the "3 Series" OPtion', async () => {
        await AutomationExPage.SelectModelOption();
    })
    await test.step('Verify the year dropdowns Functionalities', async () => {
        await AutomationExPage.SelectYearDRopdown()
        await AutomationExPage.SelectYearOption()
    })
    await test.step('Verify the Engine dropdowns Functionalities', async () => {
        await AutomationExPage.SelectEngineDRopdown()
        await AutomationExPage.SelectEngineOption()
    })
    await test.step('Verify the Body dropdowns Functionalities', async () => {
        await AutomationExPage.SelectBodyDRopdown()
        await AutomationExPage.SelectBodyOption()
    })
    await test.step('Verify the HP dropdowns Functionalities', async () => {
        await AutomationExPage.SelectHPDRopdown()
        await AutomationExPage.SelectHpOption()
    })


})


