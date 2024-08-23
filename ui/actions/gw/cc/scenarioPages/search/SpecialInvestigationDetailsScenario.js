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

    async updateSIDDetails() {
        await claimMenuLinks.claim_ClaimLossDetailsGroupClaimLossDetailsGroup_SIDetails.click();
        await sIDetails.sIDetailsScreenEdit.click();
        await this.updateGeneralSIUQuestionnaire(0, 'yes')
        await this.updateGeneralSIUQuestionnaire(1, 'yes')
        await this.updateGeneralSIUQuestionnaire(2, 'yes')
        await this.updateGeneralSIUQuestionnaire(3, 'yes')
        await this.updateGeneralSIUQuestionnaire(4, 'yes')
        await this.updateGeneralSIUQuestionnaire(5, 'yes')
        await this.updateGeneralSIUQuestionnaire(6, 'yes')
        await this.updateGeneralSIUQuestionnaire(7, 'yes')
        await this.updateGeneralSIUQuestionnaire(8, 'yes')
        await this.updateGeneralSIUQuestionnaire(9, 'yes')
        await this.updateGeneralSIUQuestionnaire(11, 'yes')
        await this.updateGeneralSIUQuestionnaire(12, 'yes')
        await this.updateGeneralSIUQuestionnaire(13, 'yes')
        await sIDetails.sIUTotalScoreSIinfo_SIescalateSIU.selectOptionByLabel(world.dataMap.get('Review'));
        await sIDetails.sIUTotalScoreSIinfo_SIEscalateSIUNote.setValue(world.dataMap.get('Reason'));
        await sIDetails.sIDetailsScreenUpdate.click();
    }

    async validateSID() {
        await t.expect((await returnDataFromTable(6, 2))).contains("Special Investigation")
        await t.wait(1000);
    }

    async updateGeneralSIUQuestionnaire(questionNo, radioInput) {

        if (radioInput == 'yes')
            radioInput = 0
        else
        radioInput = 1
        let sIDRadioGroup = (`#SIDetails-SIDetailsScreen-SectionTwo-0-QuestionSetLV-${questionNo}-QuestionRowSet-QuestionRangeRadioInput_${radioInput}`);
        await t.click(sIDRadioGroup)
    }
}