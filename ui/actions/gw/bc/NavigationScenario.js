import { AccountGroupMenuLinks } from '../../../../ui/pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks'
import { SearchTabBar } from '../../../pages/gw/generated/billingsolutions/pages/navigation/tabBar/SearchTabBar';
import { SearchGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/SearchGroupMenuLinks';
import { PolicyGroupMenuLinks } from '../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/PolicyGroupMenuLinks';

const accountGroupMenuLinks = new AccountGroupMenuLinks();
const searchTabBar = new SearchTabBar()
const searchGroupMenuLinks = new SearchGroupMenuLinks()
const policyGroupMenuLinks = new PolicyGroupMenuLinks()

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
}