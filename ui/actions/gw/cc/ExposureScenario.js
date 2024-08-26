import world from "../../../../ui/util/gw/world"
import { t } from "testcafe"
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { NewExposure_Ext } from "./scenarioPages/other/NewExposure_Ext"
import { NewInjuryIncidentPopup } from "../../../pages/gw/generated/claimsolutions/pages/popup/New/NewInjuryIncidentPopup"
import { NewFixedPropertyIncidentPopup } from "../../../pages/gw/generated/claimsolutions/pages/popup/New/NewFixedPropertyIncidentPopup"
import { ClaimExposures_Ext } from "./scenarioPages/claim/ClaimExposures_Ext"
import { validateTableRecord } from "../../../util/gw/helper"

const claimMenuActions_Ext = new ClaimMenuActions_Ext()
const newExposure_Ext = new NewExposure_Ext()
const newInjuryIncidentPopup = new NewInjuryIncidentPopup()
const newFixedPropertyIncidentPopup = new NewFixedPropertyIncidentPopup()
const claimExposures_Ext = new ClaimExposures_Ext()

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

    async newExposureProperty() {
        await newExposure_Ext.newExposureClaimant_Picker.selectNthOption(world.dataMap.get('Claimant'))
        await newExposure_Ext.newExposurePropertyIncidentMenuIcon.click()
        await newExposure_Ext.newExposureNewExposureScreenNewExposureDVNewClaimPropertyDamageDVNewClaimIncidentInputSetProperty_IncidentNewClaimPropertyDamageDV_NewIncidentMenuItem.click()
    }

    async injuryIncident() {
        await newInjuryIncidentPopup.newInjuryIncidentPopupNewInjuryIncidentScreenInjuryIncidentDVInjuryIncidentInputSetLossParty.selectOptionByValue(world.dataMap.get('LossParty'))
        await newInjuryIncidentPopup.newInjuryIncidentScreenUpdate.click()
    }

    async propertyIncident() {
        await newFixedPropertyIncidentPopup.newFixedPropertyIncidentPopupNewFixedPropertyIncidentScreenFixPropIncidentDetailDVFixedPropertyIncidentDVCCAddressInputSetglobalAddressContainerAddress_Picker.selectNthOption(world.dataMap.get('PropertyName'))
        await newFixedPropertyIncidentPopup.newFixedPropertyIncidentScreenUpdate.click()
    }

    async clickOnUpdate() {
        await newExposure_Ext.newExposureScreenUpdate.click()
    }

    async validateExposure(exposureType, columnIndex=6) {
        await t.expect(await validateTableRecord("Type", exposureType, columnIndex)).eql(world.dataMap.get('Status'))
    }

    async selectExposure(){
        await claimExposures_Ext.claimExposuresScreenClaimExposures_BICheckBox.click()
        await claimExposures_Ext.claimExposuresScreenClaimExposures_MedPayCheckBox.click()
    }

    async verifyExposureHeader() {
        await t.expect((claimExposures_Ext.claimExposuresScreenClaimExposures_Header).component.exists).ok();
    }
}