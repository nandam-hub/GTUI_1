import { AccountGroupMenuLinks } from '../../../../ui/pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks'
import { AccountsTabBar_Ext } from './scenarioPages/navigation/AccountsTabBar_Ext';
import world from "../../../util/gw/world.js"

const accountGroupMenuLinks = new AccountGroupMenuLinks();
const accountsTabBar_Ext = new AccountsTabBar_Ext()

export class NavigationScenario {

  async navigateToInvoices() {
    await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailInvoices.click();
  }

  async navigateToAccountScreen() {
    await accountsTabBar_Ext.accountsTab_ExpandButton.click()
    await accountsTabBar_Ext.accountsTab_AccountNumberSearchInput.setValue(world.dataMap.get('AccountNumber'))
    await accountsTabBar_Ext.accountSearch_Button.click()
   }
}