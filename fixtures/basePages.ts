
import { test as baseTest } from "@playwright/test";
import BaseFunctions from "@base-function/baseFunctions";
import testData from "@testData/testData"

import AutomationExPage from "@pages/AutomationEx.page";



const test = baseTest.extend<{
    
    testData: testData;
    BaseFunctions: BaseFunctions;
    AutomationExPage:AutomationExPage;

}>({
    
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },

    AutomationExPage: 
    async ({ page }, use) => {
        await use(new AutomationExPage(page));
    },
   

})
export default test;
export const expect = test.expect;

