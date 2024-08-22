import { Selector, t } from "testcafe"
import { ClaimMenuLinks_Ext } from "../claim/ClaimMenuLinks_Ext"
import { ClaimMenuLinks } from "../../../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks";
import { SIDetails } from "../../../../../pages/gw/generated/claimsolutions/pages/claim/claimLossDetailsGroup/SIDetails";
import { returnDataFromTable } from "../../../../../util/gw/helper";
import world from "../../../../../util/gw/world";

const claimMenuLinks_Ext = new ClaimMenuLinks_Ext();
const claimMenuLinks = new ClaimMenuLinks();
const sIDetails = new SIDetails();

export class SpecialInvestigationDetailsScenario {

    async sIDetailsScreen() {
        await claimMenuLinks.claim_ClaimLossDetailsGroupClaimLossDetailsGroup_SIDetails.click();
        await sIDetails.sIDetailsScreenEdit.click();
        await this.specialInvestigation(0, 'yes')
        await this.specialInvestigation(1, 'yes')
        await this.specialInvestigation(2, 'yes')
        await this.specialInvestigation(3, 'yes')
        await this.specialInvestigation(4, 'yes')
        await this.specialInvestigation(5, 'yes')
        await this.specialInvestigation(6, 'yes')
        await this.specialInvestigation(7, 'yes')
        await this.specialInvestigation(8, 'yes')
        await this.specialInvestigation(9, 'yes')
        await this.specialInvestigation(11, 'yes')
        await this.specialInvestigation(12, 'yes')
        await this.specialInvestigation(13, 'yes')
        await sIDetails.sIUTotalScoreSIinfo_SIescalateSIU.selectOptionByLabel(world.dataMap.get('Review'));
        await sIDetails.sIUTotalScoreSIinfo_SIEscalateSIUNote.setValue(world.dataMap.get('Reason'));
        await sIDetails.sIDetailsScreenUpdate.click();
    }

    async validateSid() {
        await t.expect((await returnDataFromTable(6, 2))).contains("Special Investigation")
    }

    async specialInvestigation(questionno, radio) {

        if (radio == 'yes')
            radio = 0
        else
            radio = 1
        let Button = (`#SIDetails-SIDetailsScreen-SectionTwo-0-QuestionSetLV-${questionno}-QuestionRowSet-QuestionRangeRadioInput_${radio}`);
        await t.click(Button)
    }
}