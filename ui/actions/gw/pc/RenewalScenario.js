import { t } from "testcafe";
import { PolicyMenuActions } from "../../../../ui/pages/gw/generated/policysolutions/pages/navigation/menuActions/PolicyMenuActions.js"
import { NavigationScenario } from "./NavigationScenario.js";
import { Renewal_New } from "./scenarioPages/renewalWizard/Renewal_New.js";
import { RenewalWizard_RenewalPopup } from "../../../pages/gw/generated/policysolutions/pages/popup/Renewal/RenewalWizard_RenewalPopup.js";
import { JobComplete_New } from "./scenarioPages/other/jobComplete_New.js";
import world from "../../../../ui/util/gw/world"

const policyMenuActions = new PolicyMenuActions()
const navigationScenario = new NavigationScenario()
const renewal_New = new Renewal_New()
const renewalWizard_RenewalPopup = new RenewalWizard_RenewalPopup()
const jobComplete_New = new JobComplete_New()
export class RenewalScenario {

  async initiatePolicyRenewal() {
    await policyMenuActions.policyFilePolicyFileMenuActions.click()
    await policyMenuActions.policyFileMenuActions_NewWorkOrderPolicyFileMenuActions_RenewPolicy.click()
    await t.eval(() => location.reload(true))
  }

  async editPolicyTransaction() {
    await renewal_New.RenewalWizard_EditPolicyTransaction.click()
    await navigationScenario.renewalNext()
  }

  async clickRenew() {
    await renewal_New.RenewalWizard_BindOptions.click()
    await renewal_New.RenewalWizard_Renew.click()
  }

  async renewalQuote() {
    await renewal_New.RenewalWizard_Quote.click()
  }

  async selectRenewalCode() {
    await renewalWizard_RenewalPopup.renewalWizard_RenewalScreenRenewalCode.selectOptionByLabel(world.dataMap.get('RenewalCode'))
    await renewalWizard_RenewalPopup.renewalWizard_RenewalScreenUpdate.click()
  }

  async verifyRenewal() {
    await t.expect(jobComplete_New.jobComplete_Title.component.innerText).eql("Renewal Renewing")
    console.log("Renewal is Successful")
  }

  async gwHomeownersLine(section) {
    switch (section) {
      case ('AdditionalCoverges'):
        await renewal_New.RenewalWizardAdditionalCoverage.click()
        break;
      case ('SectionIICoverages'):
        await renewal_New.RenewalWizardSectionIICoverages.click()
        break;
      case ('Optional Coverages'):
        await renewal_New.RenewalWizardOptionalCoverages.click()
        break;
      case ('Exclusions&Conditions'):
        await renewal_New.RenewalWizardExclusionsConditions.click()
        break;
      default:
        await renewal_New.RenewalWizardGWHomeownersLine.click()
    }
  }

  async smallBusinessTabSelection(tabSection) {
    switch (tabSection) {
      case ('SmallBusiness'):
        await renewal_New.RenewalWizardSmallBusienssTab.click()
        break;
      case ('SmallBusinessLineCoverages'):
        await renewal_New.RenewalWizardSmallBusinessLineCoveragesTab.click()
        break;
      case ('SmallBusinessLineAdditionalCoverages'):
        await renewal_New.RenewalWizardSmallBusinessLineAdditionalCoveragesTab.click()
        break;
      case ('Exclusions&Conditions'):
        await renewal_New.RenewalWizardExclusionsConditionsTabSb.click()
        break;
      default:
        throw new Error('No matching tab found. Check input string.')
    }
  }
}