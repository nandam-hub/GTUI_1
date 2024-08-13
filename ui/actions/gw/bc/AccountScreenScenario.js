import { AccountsTabBar_Ext } from './scenarioPages/navigation/AccountsTabBar_Ext';
import { AccountScreen_New } from "../../gw/bc/scenarioPages/AccountScreen_New"
import { t } from "testcafe";
import world from "../../../util/gw/world.js"

const accountsTabBar_Ext = new AccountsTabBar_Ext()
const accountScreen_New = new AccountScreen_New()

export class AccountScreenScenario {
    async validateAccountScreen(){
      await t.expect(await accountScreen_New.accountScreenNumber.component.textContent).eql(world.dataMap.get('AccountNumber'))
}
  }



