import { AddActivityPage_New } from "../../../../ui/actions/gw/pc/scenarioPages/account/AddActivityPage_New";
import { AccountMenuActions_Ext } from "./scenarioPages/navigation/menuActions/AccountMenuActions";
import { Summary_Ext} from "../../../actions/gw/pc/scenarioPages/account/Summary_Ext"
import { t } from "testcafe"
import world from "../../../util/gw/world"

const addActivityPage_New = new AddActivityPage_New()
const accountMenuActions_Ext = new AccountMenuActions_Ext()
const summary_Ext = new Summary_Ext()

export class AddActivityScenario {

    async addActivity() {
        await accountMenuActions_Ext.actionsMenu.click();
        await accountMenuActions_Ext.newActivity.click();
        await accountMenuActions_Ext.newActivity.click();
        await accountMenuActions_Ext.interviewOption.click();
        await accountMenuActions_Ext.interviewOption.click();
        await accountMenuActions_Ext.meetwithInsuredOption.click();
        await addActivityPage_New.securityLevel.selectOptionByLabel(world.dataMap.get('SecurityLevel'));
        await t.click(addActivityPage_New.radioOptionMandatory.component.withText(world.dataMap.get('Mandatory')))
        await t.click(addActivityPage_New.radioOptionRecurring.component.withText(world.dataMap.get('Recurring')))
        await addActivityPage_New.okButton.click();
    }

    async activityValidation() {
        await t.expect(summary_Ext.activitiesAdded.component.textContent).eql('Meet with Insured')
    }
}