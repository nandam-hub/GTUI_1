const { When, Then } = require("@cucumber/cucumber")
import { ContactScenario} from "../../../../ui/actions/gw/cc/ContactScenario"

const contactScenario = new ContactScenario()

When(/^the user update the contact details/, async function () {
    await contactScenario.editContact()
});

Then(/^the contact details are updated successfully/, async function () {
    await contactScenario.verifyContactDetails()
});