import { AddActivityPage_New } from "../../../../ui/actions/gw/pc/scenarioPages/account/AddActivityPage_New";
import { t } from "testcafe"
import world from "../../../util/gw/world"

const addActivityPage_New = new AddActivityPage_New()

export class AddActivityScenario {

    async addActivity() {
        await addActivityPage_New.actionsMenu.click();
        await addActivityPage_New.newActivity.click();
        await addActivityPage_New.newActivity.click();
        await addActivityPage_New.interviewOption.click();
        await addActivityPage_New.interviewOption.click();
        await addActivityPage_New.meetwithInsuredOption.click();
        await addActivityPage_New.securityLevel.selectOptionByLabel(world.dataMap.get('SecurityLevel'));
        await t.click(addActivityPage_New.radioOptionMandatory.component.withText(world.dataMap.get('Mandatory')))
        await t.click(addActivityPage_New.radioOptionRecurring.component.withText(world.dataMap.get('Recurring')))
        await addActivityPage_New.okButton.click();
    }

    async activityValidation() {
        await t.expect(addActivityPage_New.activitiesAdded.component.textContent).eql('Meet with Insured')
    }
}