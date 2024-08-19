const { When, Then } = require("@cucumber/cucumber");
import world from "../../../../ui/util/gw/world.js"
import { DisbursementStatusScenario } from "../../../../ui/actions/gw/bc/scenarioPages/DisbursementStatusScenario";
import { returnDataFromTable } from "../../../../ui/util/gw/helper";
import { startsWith } from "lodash";

const disbursementStatusScenario = new DisbursementStatusScenario();

When(/^the user creates a disbursement/, async function (t) {
    await disbursementStatusScenario.newpaymentDetails();
    await disbursementStatusScenario.disbursementDetails();
})

Then(/^the disbursement created successfully/, async function (t) {
    await t.expect(world.dataMap.get('DisbursedAmount')).contains(await returnDataFromTable(7))
})
console.log("disbursement successful")


//commission statement//
When(/^the user navigates to producer tab/, async function (t) {
    await disbursementStatusScenario.producerDetails();
})
Then(/^the user validates commission statement/, async function (t) {
    await t.expect((await returnDataFromTable(1)).startsWith('10')).ok("text didnot start with 10")
})







