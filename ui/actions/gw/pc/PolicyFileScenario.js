import { PolicyMenuActions_Ext } from "./scenarioPages/navigation/menuActions/PolicyMenuActions_Ext";
import world from "../../../util/gw/world";
import { t } from "testcafe";

const policyMenuActions_Ext = new PolicyMenuActions_Ext()
export class PolicyFileScenario {
    async navigateLocationScreen() {
        await policyMenuActions_Ext.policyFileMenuActions_GoCommercialProperty.click()
        await policyMenuActions_Ext.policyFileMenuActions_Location.click()
    }

    async verifyLocation() {
        await t.expect(policyMenuActions_Ext.policyFileMenuActions_AddressLink.component.textContent).eql(`${world.dataMap.get('LocationAdded')}`)
    }
}