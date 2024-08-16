const { When, Then } = require("@cucumber/cucumber")
import { World } from "@cucumber/cucumber";
import { NavigationScenario } from "../../../../ui/actions/gw/bc/NavigationScenario";
import { SearchScenario } from "../../../../ui/actions/gw/bc/SearchScenario";
import { AccountSummaryScenario } from "../../../../ui/actions/gw/pc/AccountSummaryScenario";
import { clickTableRecord, searchTableRecord } from "../../../../ui/util/gw/helper";
import world from "../../../../ui/util/gw/world";
import { t } from "testcafe"


const navigationScenario = new NavigationScenario()
const accountSummaryScenario = new AccountSummaryScenario()
const searchScenario = new SearchScenario()

When(/^the user loads the policy with policy number/, async function () {
    await navigationScenario.navigateSearchPolicyScreen()
    await searchScenario.searchWithPolicy(world.dataMap.get('PolicyNumber'))
});