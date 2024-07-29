const { When } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { RenewalScenario } from "../../../../ui/actions/gw/pc/RenewalScenario"
import { coverageFilter } from '../../../../ui/util/gw/ActionHelper'

const navigationScenario = new NavigationScenario()
const renewalScenario = new RenewalScenario()

When(/^the renewal is applied successfully/, async function () {
    await renewalScenario.verifyRenewal()
})

When(/^the user performs renewal on commercial policy/, async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await coverageFilter()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When(/^the user performs renewal on homeowners policy/, async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await renewalScenario.gwHomeownersLine('AdditionalCoverges')
    await coverageFilter()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When(/^the user performs renewal on commercial umbrella and excess liability policy/, async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When(/^the user performs renewal on USAPersonalAuto policy/, async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})

When(/^the user performs renewal on small business policy/, async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await renewalScenario.smallBusinessTabSelection('SmallBusinessLineCoverages')
    await coverageFilter()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})