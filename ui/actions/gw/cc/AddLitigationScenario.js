import { t } from "testcafe"
import { validateTableRecord, generateRandomStringFunction } from '../../../util/gw/helper'
import { NewMatter } from "../../../pages/gw/generated/claimsolutions/pages/other/NewMatter"
import { ClaimMatters } from "../../../pages/gw/generated/claimsolutions/pages/claim/ClaimMatters"
import world from "../../../util/gw/world"

const claimMatters = new ClaimMatters()
const newMatter = new NewMatter()

export class AddLitigationScenario {

    async litigationValidation() {
        await t.expect(await validateTableRecord("Name", t.ctx.Name, 2)).eql(world.dataMap.get('CaseNumber'))
    }

    async addNewLitigation() {
        await claimMatters.claimMatterScreenClaimMatters_NewMatterButton.click();
        t.ctx.Name = generateRandomStringFunction(5);
        await newMatter.newMatterDVMatter_Name.setValue(t.ctx.Name);
        await newMatter.newMatterDVMatter_CaseNumber.setValue(world.dataMap.get('CaseNumber'));
        await newMatter.newMatterScreenUpdate.click();
    }
}