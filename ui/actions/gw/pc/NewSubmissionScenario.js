import { Selector } from "testcafe";
import { NextSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/NextSubmissionWizard_Ext.js";
import { t } from "testcafe";
import { PolicyInfoScreen } from "../../../pages/gw/generated/policysolutions/pages/lOBWizardStepGroup/policyInfo/PolicyInfoScreen.js";
import { UALPersonalVehiclePopup_New } from "./scenarioPages/other/UALPersonalVehiclePopup_New.js";
import { NewAPDPolicyInvolvedPartyPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/New/NewAPDPolicyInvolvedPartyPopup.js";
import { NewSubmission_Ext } from "./scenarioPages/policy/NewSubmission_Ext.js";
import { generateRandomStringFunction } from '../../../util/gw/helper'
import { LOBWizardStepGroupSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { CLLCpBlanketPopup_New } from "./scenarioPages/navigation/submissionWizard/CLLCpBlanketPopup_New"
import { SubmissionWizard_New } from "./scenarioPages/navigation/submissionWizard/SubmissionWizard_New"
import { JobWizardInfoBarSubmissionWizard_Ext } from "./scenarioPages/navigation/submissionWizard/JobWizardInfoBarSubmissionWizard_Ext";
import { USAPersonalAuto } from "./LOBLogic/USAPersonalAuto"
import { JobComplete_New } from "./scenarioPages/other/JobComplete_New"
import { RatingCostDetailPopup } from "../../../../ui/pages/gw/generated/policysolutions/pages/popup/Rating/RatingCostDetailPopup"
import world from "../../../util/gw/world"


const nextSubmissionWizard_Ext = new NextSubmissionWizard_Ext()
const policyInfoScreen = new PolicyInfoScreen()
const uALPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()
const newAPDPolicyInvolvedPartyPopup = new NewAPDPolicyInvolvedPartyPopup()
const newSubmission_Ext = new NewSubmission_Ext()
const lOBWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const cLLCpBlanketPopup_New = new CLLCpBlanketPopup_New()
const submissionWizard_New = new SubmissionWizard_New()
const jobWizardInfoBarSubmissionWizard_Ext = new JobWizardInfoBarSubmissionWizard_Ext()
const uSAPersonalAuto = new USAPersonalAuto()
const jobComplete_New = new JobComplete_New()
const ratingCostDetailPopup = new RatingCostDetailPopup()

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
  }

  async personalVehicle(vehicleNum="1") {
    await submissionWizard_New.SubmissionWizard_AddPersonalVehicle.click()
    await uSAPersonalAuto.addVehicle()
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
    await t.takeScreenshot()
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

  async returnToQuote()
  {
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
    await lOBWizardStepGroupSubmissionWizard_Ext.UmbrellaLiabilityorExcessLiability.selectOptionByLabel(world.dataMap.get('UmbrellaLiabilityorExcessLiability'))
    await lOBWizardStepGroupSubmissionWizard_Ext.UmbrellaLiabilityUmbrellaCoverages.click()
  }

  async smallBusinessBusinessType() {
    console.log("On Small Business screen")
    await submissionWizard_New.submissionWizardBusinessType.selectOptionByLabel(world.dataMap.get('BusinessType'))
  }
}