import { test as baseTest } from "@playwright/test";

type Symoon = {
    hey: string;
}


const fixture = baseTest.extend<Symoon>({
    hey: "I am ",

})

export const test = fixture;
export const assert = fixture.expect
export const describe = fixture.describe;