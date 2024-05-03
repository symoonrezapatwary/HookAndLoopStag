
import { test as baseTest } from "@playwright/test";
import BaseFunctions from "@base-function/baseFunctions";
import testData from "@testData/testData"

import AutomationExPage from "@pages/HookAndloop.page";
import NavigationPage from "@pages/Navigation.page";




const test = baseTest.extend<{
    
    testData: testData;
    BaseFunctions: BaseFunctions;
    AutomationExPage:AutomationExPage;
    NAvigationPage: NavigationPage;
    

}>({
    
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },

    AutomationExPage: 
    async ({ page }, use) => {
        await use(new AutomationExPage(page));
    },
    NAvigationPage: 
    async ({ page }, use) => {
        await use(new NavigationPage(page));
    },

})
export default test;
export const expect = test.expect;

