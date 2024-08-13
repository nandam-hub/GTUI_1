const { When, Then } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/cc/NavigationScenario";
import { ExposureScenario } from "../../../../ui/actions/gw/cc/ExposureScenario";
import { navigateAndClickSubmenu } from "../../../../ui/util/gw/helper";

const navigationScenario = new NavigationScenario()
const exposureScenario = new ExposureScenario()

When(/^the user creates BI Liability exposure/, async function () {
    await navigationScenario.ClickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type', 'U'], 'Uninsured Motorist - Bodily Injury')
    await exposureScenario.newExposure()
    await exposureScenario.injuryIncident()
    await exposureScenario.clickOnUpdate()
});

When(/^the user creates medical payments exposure/, async function () {
    await navigationScenario.ClickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type', 'M'], 'Medical Payments')
    await exposureScenario.newExposure()
    await exposureScenario.injuryIncident()
    await exposureScenario.clickOnUpdate()
});

When(/^the user creates property exposure/, async function () {
    await navigationScenario.ClickClaimMenuAction()
    await navigateAndClickSubmenu(['Choose by Coverage Type'], 'Building Coverage')
    await exposureScenario.newExposureProperty()
    await exposureScenario.propertyIncident()
    await exposureScenario.clickOnUpdate()
});

Then(/^the user validates BI Liability exposure/, async function () {
    await exposureScenario.validateBILiabilityExposure()
});

Then(/^the user validates medical payments exposure/, async function () {
    await exposureScenario.validateMedicalPaymentsExposure()
});

Then(/^the user validates property exposure/, async function () {
    await exposureScenario.validatePropertyExposure()
});