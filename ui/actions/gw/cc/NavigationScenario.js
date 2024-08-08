import { ClaimTabBar_Ext } from "./scenarioPages/navigation/tabBar/ClaimTabBar_Ext"
import { SearchTabBar_Ext } from "./scenarioPages/search/claimSearchesGroup/SearchTabBar_Ext"
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import {t} from "testcafe"

const claimTabBar_Ext = new ClaimTabBar_Ext()
const searchTabBar_Ext = new SearchTabBar_Ext()
const claimMenuActions_Ext = new ClaimMenuActions_Ext()

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

  async navigateCoverageType() {
    await claimMenuActions_Ext.claimClaimMenuActions.click()
    await t.hover(claimMenuActions_Ext.newExposureMenuItemSetByCoverageType.component)
  }

  async navigateToAdvanceSearch() {
    await searchTabBar_Ext.tabBarSearchChevron.click()
    await searchTabBar_Ext.claimSearchesExpandButton.click()
    await searchTabBar_Ext.claimSearchesExpandButton.click()
    await searchTabBar_Ext.tabBarSearchTabSearch_ClaimSearchesGroupClaimSearchesGroup_ClaimSearch.click()
  }
}