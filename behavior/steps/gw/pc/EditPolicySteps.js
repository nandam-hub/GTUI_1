const { When, Then } = require("@cucumber/cucumber")
import { EditPolicyScenario } from "../../../../ui/actions/gw/pc/EditPolicySceneario"

const editPolicyScenario  = new EditPolicyScenario ();

Then(/^the user perform the edit policy transaction of GoCommercialPropertyLine/, async function () {
    await editPolicyScenario.editPolicy()
});

Then(/^the policy is successfully edited in GoCommercialPropertyLine/, async function () {
    await editPolicyScenario.validateEditStatus()
});