const { When, Then } = require("@cucumber/cucumber")
import { t } from "testcafe";
import { FnolScenario } from "../../../../ui/actions/gw/cc/FNOLScenario";
import { SearchScenario } from "../../../../ui/actions/gw/cc/SearchScenario";
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { searchTableRecord, findTable } from "../../../../ui/util/gw/helper";
import { ClaimSummaryScenario } from "../../../../ui/actions/gw/cc/ClaimSummaryScenario";
import { ClaimLossDetailsScenario } from "../../../../ui/actions/gw/cc/ClaimLossDetailsScenario";
import { ClaimHistoryScenario } from "../../../../ui/actions/gw/cc/ClaimHistoryScenario";

const fnolScenario = new FnolScenario()
const searchScenario = new SearchScenario()
const navigationScenario = new NavigationScenario()
const claimSummaryScenario = new ClaimSummaryScenario()
const claimLossDetailsScenario = new ClaimLossDetailsScenario()
const claimHistoryScenario = new ClaimHistoryScenario()

When('the user creates new FNOL', async function () {
    await navigationScenario.navigateToNewClaimWizard()
    await fnolScenario.searchOrCreatePolicy()
    await fnolScenario.newPerson()
    await fnolScenario.clickNext()
    await fnolScenario.addBasicInformation()
    await fnolScenario.clickNext()
    await fnolScenario.addPropertyClaimInformation()
    await fnolScenario.clickNext()
    await fnolScenario.clickNext()
    await fnolScenario.saveAndAssignClaim()
    await fnolScenario.readClaimNumber()
});

When('the user create new FNOL for USAPersonalAuto', async function () {
    await navigationScenario.navigateToNewClaimWizard()
    await fnolScenario.searchOrCreatePolicy()
    await fnolScenario.newPerson()
    await fnolScenario.clickNext()
    await fnolScenario.addBasicInformation()
    await fnolScenario.clickNext()
    await fnolScenario.addAutoClaimInformation()
    await fnolScenario.clickNext()
    await fnolScenario.clickNext()
    await fnolScenario.saveAndAssignClaim()
    await fnolScenario.readClaimNumber()
});

When('the user search with claim number', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo);
});

Then('the FNOL is added successfully', async function () {
    await searchScenario.claimSimpleSearch(t.ctx.claimNo)
    await searchTableRecord(3, t.ctx.claimNo)
    await claimSummaryScenario.verifySummaryHeader()
});

When('the user creates new claim with rental', async function () {
    await navigationScenario.navigateToNewClaimWizard()
    await fnolScenario.searchOrCreatePolicy()
    await fnolScenario.newPerson()
    await fnolScenario.addVehicleWithCoverage(2)
    await fnolScenario.clickNext()
    await fnolScenario.addBasicInformation()
    await fnolScenario.selectInvolvedVehicle()
    await fnolScenario.clickNext()
    await fnolScenario.addAutoClaimInformation()
    await fnolScenario.clickNext()
    await fnolScenario.selectRentalServices()
    await fnolScenario.addNewVendorCompany()
    await fnolScenario.clickNext()
    await fnolScenario.saveAndAssignClaim()
    await fnolScenario.readClaimNumber()
});

Then('claim is created with rental service', async function () {
    await fnolScenario.validateRentalServices()
  });

Then('the catastrophe is displayed in loss details', async function () {
    await navigationScenario.navigateToLossDetails()
    await claimLossDetailsScenario.verifyCatastropheDetails()
});

Then('the activities on the claim is updated in claim history screen', async function () {
    await navigationScenario.navigateToClaimHistoryScreen()
    await claimHistoryScenario.validateNewClaimSaved()
    await claimHistoryScenario.validateAssignedTo()
});

When('the user closes the claim', async function () {
   await fnolScenario.closeClaim()
});

Then('claim is closed successfully', async function () {
    await navigationScenario.openClaim(t.ctx.claimNo)
    await claimSummaryScenario.verifyClaimStatus()
});
