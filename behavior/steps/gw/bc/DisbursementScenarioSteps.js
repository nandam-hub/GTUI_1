const { When, Then } = require("@cucumber/cucumber");
import { DisbursementScenario } from "../../../../ui/actions/gw/bc/DisbursementScenario.js";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario.js";

const disbursementScenario = new DisbursementScenario();
const navigationScenario = new NavigationScenario();

When(/^the user creates a disbursement/, async function (t) {
    await navigationScenario.navigateToNewpaymet();
    await disbursementScenario.newPaymentDetails();
    await navigationScenario.navigateToDisbursement();
    await disbursementScenario.disbursementDetails();
})

Then(/^the disbursement created successfully/, async function (t) {
    await disbursementScenario.validateDisbursement();
})

When(/^the user navigates to producer tab/, async function (t) {
    await disbursementScenario.producerDetails();
})

Then(/^the commision statement is displayed/, async function (t) {
    await disbursementScenario.displayedCommissionStatement();
})

When(/^the user runs automatic disbursement batch job/, async function (t) {
    await navigationScenario.navigateToBatchProcessInfoScreen()
    await disbursementScenario.automaticDisbursementBatchJob()
})

When(/^the user loads the disbursement screen/, async function (t) {
    await navigationScenario.navigateToAccountScreenWithNewPolicy(t.ctx.AccountNumber)
    await disbursementScenario.clickOnDisbursementMenu()
})

Then(/^automatic disbursement is created successfully/, async function (t) {
    await disbursementScenario.validateAutomaticDisbursement()
})