
import { test as baseTest } from "@playwright/test";
import BaseFunctions from "@base-function/baseFunctions";
import testData from "@testData/testData"


import SigninPage from "@pages/SigninPage";




const test = baseTest.extend<{
    
    testData: testData;
    BaseFunctions: BaseFunctions;
    SigninPage:SigninPage;
 
    

}>({
    SigninPage: async ({ page }, use) => {
        await use(new SigninPage(page));
    },

    
    testData: async ({ page }, use) => {
        await use(new testData(page));
    },

   

})
export default test;
export const expect = test.expect;

