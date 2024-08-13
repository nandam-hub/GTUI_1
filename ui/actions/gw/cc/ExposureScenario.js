import { FNOLWizard_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/FNOLWizard_Ext"
import { dateFunction, splitFunction, generateRandomStringFunction, validateTableRecord } from "../../../../ui/util/gw/helper"
import { NewContactPopup } from "../../../../ui/pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup"
import { NewClaimSaved_Ext } from "./scenarioPages/other/NewClaimSaved_Ext"
import world from "../../../../ui/util/gw/world"
import { t } from "testcafe"
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { NewExposure_Ext } from "./scenarioPages/other/NewExposure_Ext"
import { NewInjuryIncidentPopup } from "../../../pages/gw/generated/claimsolutions/pages/popup/New/NewInjuryIncidentPopup"

const fNOLWizard_Ext = new FNOLWizard_Ext();
const newContactPopup = new NewContactPopup()
const newClaimSaved_Ext = new NewClaimSaved_Ext()
const claimMenuActions_Ext = new ClaimMenuActions_Ext()
const newExposure_Ext = new NewExposure_Ext()
const newInjuryIncidentPopup = new NewInjuryIncidentPopup()

export class ExposureScenario {
    async selectBodilyInjury() {
        await t.hover(claimMenuActions_Ext.newExposureMenuItemSetByCoverageTypeU.component)
        await claimMenuActions_Ext.newExposureMenuItemSetByCoverageTypeUninsuredMotoristBodilyInjury.click()
    }

    async selectMedicalPayments() {
        await t.hover(claimMenuActions_Ext.newExposureMenuItemSetByCoverageTypeM.component)
        await claimMenuActions_Ext.newExposureMenuItemSetByCoverageTypeMedicalPayments.click()
    }

    async newExposure() {
        await newExposure_Ext.newExposureDVClaimantPickerExt.selectNthOption(world.dataMap.get('Claimant'))
        await newExposure_Ext.newExposureInjuryIncidentMenuIcon.click()
        await newExposure_Ext.newExposureNewExposureScreenNewExposureDVBIDamageInputSetInjury_IncidentBodilyInjuryDamageDV_NewIncidentMenuItem.click()
    }

    async injuryIncident() {
        await newInjuryIncidentPopup.newInjuryIncidentPopupNewInjuryIncidentScreenInjuryIncidentDVInjuryIncidentInputSetLossParty.selectOptionByValue(world.dataMap.get('LossParty'))
        await newInjuryIncidentPopup.newInjuryIncidentScreenUpdate.click()
    }

    async clickOnUpdate() {
        await newExposure_Ext.newExposureScreenUpdate.click()
    }

    async validateBILiabilityExposure() {
        await t.expect(await validateTableRecord("Type", "Bodily Injury", 6)).eql(world.dataMap.get('Status'))
    }

    async validateMedicalPaymentsExposure() {
        await t.expect(await validateTableRecord("Type", "Med Pay", 6)).eql(world.dataMap.get('Status'))
    }
}