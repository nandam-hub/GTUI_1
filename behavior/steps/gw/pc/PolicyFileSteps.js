const { Then } = require('@cucumber/cucumber')
import { PolicyFileScenario } from '../../../../ui/actions/gw/pc/PolicyFileScenario'
import { NavigationScenario } from '../../../../ui/actions/gw/pc/NavigationScenario'
import { t } from 'testcafe'

const policyFileScenario = new PolicyFileScenario()
const navigationScenario = new NavigationScenario()

Then(/^locations are added successfully/, async function () {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await policyFileScenario.navigateLocationScreen()
    await policyFileScenario.verifyLocation()
})