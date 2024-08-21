import { Selector } from "testcafe";
import { NextSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/NextSubmissionWizard_Ext.js";
import { t } from "testcafe";
import { PolicyInfoScreen } from "../../../pages/gw/generated/policysolutions/pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen.js";
import { UALPersonalVehiclePopup_New } from "./scenarioPages/other/UALPersonalVehiclePopup_New.js";
import { NewAPDPolicyInvolvedPartyPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/New/NewAPDPolicyInvolvedPartyPopup.js";
import { NewSubmission_Ext } from "./scenarioPages/policy/NewSubmission_Ext.js";
import { generateRandomStringFunction, validateTableRecord, enterDataInTable, performClickInTable, performHoverInTable } from '../../../util/gw/helper'
import { LOBWizardStepGroupSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { CLLCpBlanketPopup_New } from "./scenarioPages/navigation/submissionWizard/CLLCpBlanketPopup_New"
import { SubmissionWizard_New } from "./scenarioPages/navigation/submissionWizard/SubmissionWizard_New"
import { JobWizardInfoBarSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/JobWizardInfoBarSubmissionWizard_Ext";
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New"
import { RatingCostDetailPopup } from "../../../../ui/pages/gw/generated/policysolutions/pages/popup/Rating/RatingCostDetailPopup"
import { USAPersonalAuto } from "../../../util/gw/USAPersonalAuto"
import { GoCommercialProperty } from "../../../util/gw/GoCommercialProperty.js";
import { CLLLocationPopup_New } from "./scenarioPages/popup/CLLCP/CLLLocationPopup_New.js";
import world from "../../../util/gw/world"
import { WebMessageWorksheet_New } from "./scenarioPages/popup/Organization/WebMessageWorksheet_New.js";
import { PolicyInfoScreen_Ext } from "./scenarioPages/IOBWizardStepGroup/policyInfo/PolicyInfoScreen_Ext.js";
import { selectInput, textInput, checkBox } from "../../../util/gw/ActionHelper.js";

const nextSubmissionWizard_Ext = new NextSubmissionWizard_Ext()
const policyInfoScreen = new PolicyInfoScreen()
const uALPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()
const newAPDPolicyInvolvedPartyPopup = new NewAPDPolicyInvolvedPartyPopup()
const newSubmission_Ext = new NewSubmission_Ext()
const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const cLLCpBlanketPopup_New = new CLLCpBlanketPopup_New()
const submissionWizard_New = new SubmissionWizard_New()
const jobWizardInfoBarSubmissionWizard_Ext = new JobWizardInfoBarSubmissionWizard_Ext()
const jobComplete_New = new JobComplete_New()
const ratingCostDetailPopup = new RatingCostDetailPopup()
const usaPersonalAuto = new USAPersonalAuto()
const webMessageWorksheet_New = new WebMessageWorksheet_New()
const goCommercialProperty = new GoCommercialProperty()
const cllLocationPopup_New = new CLLLocationPopup_New()
const policyInfoScreen_Ext = new PolicyInfoScreen_Ext()

export class NewSubmissionScenario {
  async selectProduct() {
    await t.click(Selector('td').withExactText(world.dataMap.get('ProductName')).parent().child('td:nth-child(1)'))
  }
  async clickNext() {
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
  }

  async policyInfo() {
    console.log("On Policy Info screen")
    await policyInfoScreen.accountInfoInputSetOrganizationType.selectOptionByLabel(world.dataMap.get('OrganizationType'))
  }

  async usaPersonalAutoStandardCoverages() {
    await submissionWizard_New.SubmissionWizard_LineStandardCoveragesTab.click()
    if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
      t.ctx.module = 'Coverage'
      console.log(`The current module is ${t.ctx.module}`)
      await checkBox("LiabilityBodilyInjuryAndPropertyDamage")
      await selectInput("LiabilityBodilyInjuryAndPropertyDamageAutoLiabilityPackage")
      await checkBox("PropertyProtectionInsurance")
      await selectInput("PropertyProtectionInsurancePropertyProtectionLimits")
    }
  }

  async personalVehicle(vehicleNum = "1") {
    await submissionWizard_New.SubmissionWizard_AddPersonalVehicle.click()
    await usaPersonalAuto.addVehicle()
    console.log(`Added ${vehicleNum} vehicle(s) successfully`)
  }

  async vehicleDriver() {
    await uALPersonalVehiclePopup_New.UALPersonalVehiclePopup_VehicleDriverExposureCardTab.click()
    await uALPersonalVehiclePopup_New.UALPersonalVehiclePopup_AddDriver.click()
    await uALPersonalVehiclePopup_New.UALPersonalVehiclePopup_PolicyDriverMenuIcon.click()
    await uALPersonalVehiclePopup_New.UALPersonalVehiclePopup_NewPerson.click()
    await newAPDPolicyInvolvedPartyPopup.newAPDPolicyInvolvedPartyPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetFirstName.setValue(generateRandomStringFunction(5))
    await newAPDPolicyInvolvedPartyPopup.newAPDPolicyInvolvedPartyPopupContactDetailScreenNewPolicyContactRoleDetailsCVPolicyContactDetailsDVPolicyContactRoleNameInputSetGlobalPersonNameInputSetLastName.setValue(generateRandomStringFunction(5))
    await newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_LinkAddressMenuMenuIcon.click()
    await t.hover(newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_Address)
      .click(newAPDPolicyInvolvedPartyPopup.NewAPDPolicyInvolvedPartyPopup_PrimaryAddress)
    await nextSubmissionWizard_Ext.ok_Button.click()
    console.log('Added Driver in Personal Vehicle screen')
    await nextSubmissionWizard_Ext.ok_Button.click()
  }

  async verifyQuote() {
    await t.wait(3000)
    let status = await nextSubmissionWizard_Ext.Quotedstatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }

  async saveQuote() {
    t.ctx.QuoteNumber = await submissionWizard_New.submissionWizard_QuoteNumber.component.textContent
    console.log(t.ctx.QuoteNumber, 'Submission is quoted successfully')
  }

  async bindPolicy() {
    await t.wait(2000)
    await submissionWizard_New.submissionWizard_Bind.click()
    await t.setNativeDialogHandler(() => true);
    await submissionWizard_New.submissionWizard_BindOptions.click()
  }
  async verifyIssue() {
    const status = await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_IssueStatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission Bound')
  }

  async viewSubmission() {
    await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_Viewsubmission.click()
    await t.wait(1000)
    await t.takeScreenshot()
  }

  async viewPolicy() {
    await jobComplete_New.jobComplete_ViewPolicyHyperLink.click()
    await t.wait(1000)
  }

  async initiateNewSubmissionPolicy(accountNumber) {
    console.log("On New Submissions screen")
    await newSubmission_Ext.newSubmissionAccountNumber.setValue(accountNumber)
    await newSubmission_Ext.accountSelectAccount.click()
  }

  async addCpBlanket(nthOption = 1) {
    await submissionWizard_New.submissionWizard_AddCPBlanket.click()
    await cLLCpBlanketPopup_New.CLLCpBlanketPopup_Location.selectNthOption(nthOption)
    await cLLCpBlanketPopup_New.CLLCpBlanketPopup_ok.click()
    await nextSubmissionWizard_Ext.submissionWizardNext.click()
    await t.wait(2000)
  }

  async quote() {
    await t.wait(2000)
    await submissionWizard_New.submissionWizard_Quote.click()
  }

  async returnToQuote() {
    await submissionWizard_New.submissionWizard_Premium.click()
    await ratingCostDetailPopup.ratingCostDetailPopup__crumb__.click()
  }

  async verifyQuote() {
    await t.wait(2000)
    const status = await submissionWizard_New.submissionWizard_QuoteStatus.component.textContent
    console.log(status)
    await t.expect(status).eql('Submission (Quoted)')
  }

  async issuePolicy() {
    if (await submissionWizard_New.submissionWizard_Bind.component.exists)
      await submissionWizard_New.submissionWizard_Bind.click()
    await t.setNativeDialogHandler(() => true);
    await submissionWizard_New.submissionWizard_IssuePolicy.click()
    t.ctx.PolicyNumber = await jobWizardInfoBarSubmissionWizard_Ext.jobWizardInfoBar_PolicyNumber.component.textContent
    console.log("The newly created policy number is: " + t.ctx.PolicyNumber)
  }

  async policyRenewal() {
    await newSubmission_Ext.policyMenuAction_Renewal.click()
    await t.eval(() => location.reload(true))
    await newSubmission_Ext.editPolicyTransaction_Btn.click()
  }

  async gWHomeownersLineScreen() {
    await submissionWizard_New.submissionWizardRefusalType.selectOptionByLabel(world.dataMap.get('RefusalType'))
  }

  async commercialUmbrellaAccessliability() {
    console.log("On Commercial Umbrella And Excess Liability screen")
    await lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilityorExcessLiability.selectOptionByLabel(world.dataMap.get('UmbrellaLiabilityorExcessLiability'))
    await lOBWizardStepGroupSubmissionWizard_Ext.umbrellaLiabilityUmbrellaCoverages.click()
    if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
      t.ctx.module = 'Coverage'
      console.log(`The current module is ${t.ctx.module}`)
      await checkBox("UmbrellaLiability")
      await selectInput("UmbrellaLiabilityOccurrenceLimit")
      await selectInput("UmbrellaLiabilityAggregateLimit")
      await selectInput("UmbrellaLiabilityProductandCompletedOperationsAggregateLImit")
      await selectInput("UmbrellaLiabilityUmbrellaCoverageForm")
      await selectInput("UmbrellaLiabilitySelfInsuredRetention")
    }
  }

  async smallBusinessBusinessType() {
    console.log("On Small Business screen")
    await submissionWizard_New.submissionWizardBusinessType.selectOptionByLabel(world.dataMap.get('BusinessType'))
  }

  async verifyingRefusalTypeErrorMsg() {
    await t.expect(await submissionWizard_New.submissionWizard_RefusalType_ErrorMsg.component.innerText).contains(world.dataMap.get('RefusalTypeErrorMessage'))
  }

  async verifyingHomeownersCoverageErrorMsg() {
    await t.expect(await webMessageWorksheet_New.webMessageWorksheet_NoCoverageError.component.innerText).eql(world.dataMap.get('CoverageErrorMessage'))
  }
  async addLocation(locationNum = "1") {
    await submissionWizard_New.submissionWizardAddLocation.click()
    await cllLocationPopup_New.cllLocationPopupAddress.selectOptionByLabel(world.dataMap.get('Address1'))
    await cllLocationPopup_New.cllLocationPopupAddLocationMenu.click()
    await cllLocationPopup_New.cllLocationPopupNewLocation.click()
    await goCommercialProperty.addLocation()
    console.log(`Added ${locationNum} location(s) successfully`)
  }

  async addBuilding(buildingNum = "1") {
    await cllLocationPopup_New.cllLocationPopupAddBuilding.click()
    await goCommercialProperty.addBuidling()
    console.log(`Added ${buildingNum} buidling(s) successfully`)
    await cllLocationPopup_New.cllLocationPopupOk.click()
  }

  async addDrivers(driverNum = "1") {
    await policyInfoScreen.namedInsuredsLV_tbAddContactsButton.click()
    await policyInfoScreen_Ext.newPersonMenuItem.click()
    await usaPersonalAuto.addDriver()
    console.log(`Added ${driverNum} driver(s) successfully`)
  }

  async addDriversInPersonalAutoScreen(driverNum = 1) {
    if (typeof (driverNum) !== 'number')
      driverNum = Number.parseInt(driverNum.replace(/["]/g, ""))
    for (let i = 1; i <= driverNum; i++) {
      await submissionWizard_New.submissionWizardUALPolicyDriverMVRListAdd.click()
      await enterDataInTable(1, `${i}`)
      await performClickInTable(world.dataMap.get('PolicyDriverMenuIcon'))
      await performHoverInTable(world.dataMap.get('AvailableContacts'))
      await performClickInTable(world.dataMap.get('OtherContact'))
    }
  }

  async validatedAddedDriversInPolicyFile(driverNum = 1) {
    if (typeof (driverNum) !== 'number')
      driverNum = Number.parseInt(driverNum.replace(/["]/g, ""))
    for (let i = 1; i <= driverNum; i++) {
      await t.expect(await validateTableRecord(world.dataMap.get('ColumnIdentifier'), `${i}`, 6)).contains(world.dataMap.get(`Driver${i}`))
    }
  }

  async commercialPropertyCoverage(){
    if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
      t.ctx.module = 'Coverage'
      console.log(`The current module is ${t.ctx.module}`)
      await checkBox("EachLossCausedByWind")
      await textInput("EachLossCausedByWindLimit")
      await textInput("EachLossCausedByWindDeductible")
      await checkBox("ContentsOfOtherStructures")
      await textInput("ContentsOfOtherStructuresLimit")
      await textInput("ContentsOfOtherStructuresDeductible")
      await checkBox("OutsideObjectsAndStructures")
      await textInput("OutsideObjectsAndStructuresLimit")
      await textInput("OutsideObjectsAndStructuresDeductible")
    }
  }
}