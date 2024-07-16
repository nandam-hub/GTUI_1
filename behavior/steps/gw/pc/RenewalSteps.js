const { When } = require("@cucumber/cucumber")
import { NavigationScenario } from "../../../../ui/actions/gw/pc/NavigationScenario"
import { RenewalScenario } from "../../../../ui/actions/gw/pc/RenewalScenario"
import { CommercialProperty } from '../../../../ui/actions/gw/pc/LOBLogic/CommercialProperty'
import { HomeownersProduct } from '../../../../ui/actions/gw/pc/LOBLogic/HomeownersProduct'
import { SmallBusiness } from "../../../../ui/actions/gw/pc/LOBLogic/SmallBusiness"

const navigationScenario = new NavigationScenario()
const renewalScenario = new RenewalScenario()
const commercialProperty = new CommercialProperty()
const homeownersProduct = new HomeownersProduct()
const smallBusiness = new SmallBusiness()

When(/^the renewal is applied successfully/, async function () {
    await renewalScenario.verifyRenewal()
})

When(/^the user performs renewal on commercial policy/, async function (t) {
    await navigationScenario.openPolicy(t.ctx.PolicyNumber)
    await renewalScenario.initiatePolicyRenewal()
    await renewalScenario.editPolicyTransaction()
    await commercialProperty.coverageFilter()
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
    await homeownersProduct.coverageFilter()
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
    await smallBusiness.coverageFilter()
    await navigationScenario.renewalNext()
    await navigationScenario.renewalNext()
    await renewalScenario.renewalQuote()
    await renewalScenario.clickRenew()
    await renewalScenario.selectRenewalCode()
})
