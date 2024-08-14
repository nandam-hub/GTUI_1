import { t } from "testcafe";
import { PolicyGroupMenuLinks } from "../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/PolicyGroupMenuLinks";
import { PolicyDetailCommissions_Ext } from "./scenarioPages/PolicyDetailCommissions_Ext";
import world from "../../../util/gw/world";

const policyGroupMenuLinks = new PolicyGroupMenuLinks()
const policyDetailCommissions_Ext = new PolicyDetailCommissions_Ext()

export class CommissionsScenario {
    async clickOnCommissionsScreen() {
        await policyGroupMenuLinks.menuLinksPolicyGroup_PolicyDetailCommissions.click()
    }

    async validateCommissionRate() {
        await t.expect(await policyDetailCommissions_Ext.policyDetailCommissionsCommissionRate.component.innerText).eql(world.dataMap.get('CommissionRate'))
    }
}