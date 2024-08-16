import { AccountGroupMenuLinks } from '../../../../ui/pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks'
import { SearchTabBar } from '../../../pages/gw/generated/billingsolutions/pages/navigation/tabBar/SearchTabBar';
import { SearchGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/SearchGroupMenuLinks';
import { PolicyGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/PolicyGroupMenuLinks';

const accountGroupMenuLinks = new AccountGroupMenuLinks();
const searchTabBar = new SearchTabBar()
const searchGroupMenuLinks = new SearchGroupMenuLinks()
const policyGroupMenuLinks = new PolicyGroupMenuLinks()

import { AccountsTabBar_Ext } from './scenarioPages/navigation/AccountsTabBar_Ext';
import world from "../../../util/gw/world.js"

const accountGroupMenuLinks = new AccountGroupMenuLinks();
const accountsTabBar_Ext = new AccountsTabBar_Ext()

export class NavigationScenario {

  async navigateToInvoices() {
    await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailInvoices.click();
  }

  async navigateSearchPolicyScreen() {
    await searchTabBar.tabBarSearchTab.click()
    await searchGroupMenuLinks.menuLinksSearchGroup_PolicySearch.click()
    console.log('On Search Policy Screen')
  }

  async navigateToCommissionsScreen() {
    await policyGroupMenuLinks.menuLinksPolicyGroup_PolicyDetailCommissions.click()
  }

  async navigateToAccountScreen() {
    await accountsTabBar_Ext.accountsTab_ExpandButton.click()
    await accountsTabBar_Ext.accountsTab_AccountNumberSearchInput.setValue(world.dataMap.get('AccountNumber'))
    await accountsTabBar_Ext.accountSearch_Button.click()
   }
}