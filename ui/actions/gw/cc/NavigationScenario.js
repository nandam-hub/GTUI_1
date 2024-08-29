import { ClaimTabBar_Ext } from "./scenarioPages/navigation/tabBar/ClaimTabBar_Ext"
import { SearchTabBar_Ext } from "./scenarioPages/search/claimSearchesGroup/SearchTabBar_Ext"
import { ClaimMenuLinks } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks"
import { ClaimMenuActions_Ext } from "./scenarioPages/navigation/menuActions/ClaimMenuActions_Ext"
import { AddressBookTabBar } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/tabBar/AddressBookTabBar"
import { NewClaimSaved } from "../../../../ui/pages/gw/generated/claimsolutions/pages/other/NewClaimSaved"
import { navigateAndClickSubmenu } from "../../../../ui/util/gw/helper";
import { ClaimMenuLinks_Ext } from "./scenarioPages/navigation/menuLinks/ClaimMenuLinks_Ext"
import { t } from "testcafe"

const claimMenuLinks = new ClaimMenuLinks()
const claimTabBar_Ext = new ClaimTabBar_Ext()
const searchTabBar_Ext = new SearchTabBar_Ext()
const claimMenuActions_Ext = new ClaimMenuActions_Ext()
const addressBookTabBar = new AddressBookTabBar()
const newClaimSaved = new NewClaimSaved()
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

  async navigateClaimWorkplan() {
    await claimMenuLinks.menuLinksClaim_ClaimWorkplan.click()
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

  async navigateToLitigation() {
    await claimMenuLinks_Ext.menuLinksClaim_ClaimMatters.click()
  }

  async navigateToAddressBookSearch() {
    await addressBookTabBar.tabBarAddressBookTab.click()
  }

  async goToClaim() {
    await newClaimSaved.newClaimSavedDVGoToClaim.click()
  }

  async navigateToContacts() {
    await claimMenuLinks_Ext.partiesInvolved.click()
    await navigateAndClickSubmenu(['Contacts'])
  }

  async navigateToCheck(){
    await claimMenuActions_Ext.claimClaimMenuActions.click()
    await navigateAndClickSubmenu(['Check'])
  }
  
  async navigateToReserve() {
    await claimMenuActions_Ext.claimMenuActions_NewTransactionClaimMenuActions_NewTransaction_ReserveSet.click()
  }
}