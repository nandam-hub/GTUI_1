const { When, Then } = require("@cucumber/cucumber")
import { VerifyAssociationScenario } from "../../../../ui/actions/gw/cc/VerifyAssociationScenario"

const verifyAssociationScenario = new VerifyAssociationScenario()

When(/^the user added association/, async function () {
    await verifyAssociationScenario.AddAssociation()
});

Then(/^the successfully validated association/, async function () {
    await verifyAssociationScenario.validateAssociation()
});