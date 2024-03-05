
import { test as baseTest } from "@playwright/test";
import functions from "@helper-function/functions";
import BaseFunctions from "@base-function/baseFunctions";
import testData from "@testData/testData"

import AutomationExPage from "@pages/AutomationEx.page";



const test = baseTest.extend<{
    functions: functions;
    testData: testData;
    BaseFunctions: BaseFunctions;
    AutomationExPage:AutomationExPage;

}>({
    functions: async ({ page }, use) => {
        await use(new functions(page));
    },
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

