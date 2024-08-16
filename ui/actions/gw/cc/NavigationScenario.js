import { ClaimTabBar_Ext } from "./scenarioPages/navigation/tabBar/ClaimTabBar_Ext"
import { SearchTabBar_Ext } from "./scenarioPages/search/claimSearchesGroup/SearchTabBar_Ext"
import { ClaimMenuLinks } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks"
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { ClaimMenuLinks_Ext } from "../../../../ui/actions/gw/cc/scenarioPages/claim/ClaimMenuLinks_Ext"
import {t} from "testcafe"

const claimMenuLinks = new ClaimMenuLinks()
const claimTabBar_Ext = new ClaimTabBar_Ext()
const searchTabBar_Ext = new SearchTabBar_Ext()
const claimMenuActions_Ext = new ClaimMenuActions_Ext()
const claimMenuLinks_Ext = new ClaimMenuLinks_Ext()


export class NavigationScenario {

  async navigateToNewClaimWizard() {
    await claimTabBar_Ext.tabBarClaimChevron.click()
    await claimTabBar_Ext.claimTabClaimTab_FNOLWizard.click()
  }

  async clickNext() {
    await nextSubmissionWizard.submissionWizardNext.click()
  }

  async openClaim(claimNumber) {
    await claimTabBar_Ext.tabBarClaimChevron.click();
    await claimTabBar_Ext.claimTabClaimTab_FindClaim.setValue(claimNumber);
    await claimTabBar_Ext.claimTabSearch.click();
  }

  async navigateSearchPolicyScreen() {
    await searchTabBar_Ext.tabBarSearchTab.click()
    console.log('On Search Claims Screen')
  }

  async navigateClaimWorkplan()
  {
    await claimMenuLinks.menuLinksClaim_ClaimWorkplan.click()
  }
  //TODO: We can remove this method as this is replaced by navigateAndClickSubmenu helper
  async navigateCoverageType() {
    await claimMenuActions_Ext.claimClaimMenuActions.click()
    await t.hover(claimMenuActions_Ext.newExposureMenuItemSetByCoverageType.component)
  }

  async ClickClaimMenuAction() {
    await claimMenuActions_Ext.claimClaimMenuActions.click()
  }

  async navigateToAdvanceSearch() {
    await searchTabBar_Ext.tabBarSearchChevron.click()
    await searchTabBar_Ext.claimSearchesExpandButton.click()
    await searchTabBar_Ext.claimSearchesExpandButton.click()
    await searchTabBar_Ext.tabBarSearchTabSearch_ClaimSearchesGroupClaimSearchesGroup_ClaimSearch.click()
  }

  async navigateToAssocaite() {
    await claimMenuLinks_Ext.claimLossDetailsGroup.click()
    await claimMenuLinks_Ext.claim_ClaimLossDetailsGroupClaimLossDetailsGroup_ClaimAssociations.click()
  }

  async navigateToLossDetails() {
    await claimMenuLinks_Ext.claimLossDetailsGroup.click()
  }

  async navigateToClaimHistoryScreen() {
    await claimMenuLinks_Ext.menuLinksClaim_ClaimHistory.click()
  }
}