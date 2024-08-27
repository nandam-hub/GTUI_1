import world from "../../../util/gw/world"
import { t } from "testcafe"
import { NormalCreateCheckWizard_New} from "./scenarioPages/other/NormalCreateCheckWizard_New"
import { validateTableRecord } from "../../../util/gw/helper"
const normalCreateCheckWizard_New = new NormalCreateCheckWizard_New()

export class CheckScenario {
    
    async createCheck()
    {
        normalCreateCheckWizard_New.primaryPayeeName.selectOptionByLabel(await t.ctx.name )
        normalCreateCheckWizard_New.type.selectOptionByLabel(world.dataMap.get('Type'))
        normalCreateCheckWizard_New.next.click()
        normalCreateCheckWizard_New.reserveLine.selectOptionByLabel(world.dataMap.get('ReserveLine'))
        normalCreateCheckWizard_New.costType.selectOptionByLabel(world.dataMap.get('CostType'))
        normalCreateCheckWizard_New.costCategory.selectOptionByLabel(world.dataMap.get('CostCategory'))
        normalCreateCheckWizard_New.paymentType.selectOptionByLabel(world.dataMap.get('paymentType'))
        normalCreateCheckWizard_New.amount.setValue(world.dataMap.get('Amount'))
        normalCreateCheckWizard_New.next.click()
        normalCreateCheckWizard_New.finsh.click()
    }

    async validateCheckDetails()
    {
        await t.expect((normalCreateCheckWizard_New.financialChecksHeader).component.exists).ok();
        await t.debug()
        await t.expect(await validateTableRecord("Status", world.dataMap.get('Status'), 2)).eql(world.dataMap.get('GrossAmount'))
    }
}
