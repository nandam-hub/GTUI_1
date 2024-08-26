import { Selector, t } from "testcafe"
import { returnDataFromTable } from "../../../util/gw/helper";
import world from "../../../util/gw/world";
import { ClaimMenuLinks } from "../../../pages/gw/generated/claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks";
import { SIDetails } from "../../../pages/gw/generated/claimsolutions/pages/claim/claimLossDetailsGroup/SIDetails";

const claimMenuLinks = new ClaimMenuLinks();
const sIDetails = new SIDetails();
export class SpecialInvestigationDetailsScenario {
    
    async updateSIDDetails() {
        await claimMenuLinks.claim_ClaimLossDetailsGroupClaimLossDetailsGroup_SIDetails.click();
        await sIDetails.sIDetailsScreenEdit.click();
        await this.updateGeneralSIDQuestionnaire(0, 'yes')
        await this.updateGeneralSIDQuestionnaire(1, 'yes')
        await this.updateGeneralSIDQuestionnaire(2, 'yes')
        await this.updateGeneralSIDQuestionnaire(3, 'yes')
        await this.updateGeneralSIDQuestionnaire(4, 'yes')
        await this.updateGeneralSIDQuestionnaire(5, 'yes')
        await this.updateGeneralSIDQuestionnaire(6, 'yes')
        await this.updateGeneralSIDQuestionnaire(7, 'yes')
        await this.updateGeneralSIDQuestionnaire(8, 'yes')
        await this.updateGeneralSIDQuestionnaire(9, 'yes')
        await this.updateGeneralSIDQuestionnaire(11, 'yes')
        await this.updateGeneralSIDQuestionnaire(12, 'yes')
        await this.updateGeneralSIDQuestionnaire(13, 'yes')
        await sIDetails.sIUTotalScoreSIinfo_SIescalateSIU.selectOptionByLabel(world.dataMap.get('Review'));
        await sIDetails.sIUTotalScoreSIinfo_SIEscalateSIUNote.setValue(world.dataMap.get('Reason'));
        await sIDetails.sIDetailsScreenUpdate.click();
    }
    async validateSID() {
        await t.expect((await returnDataFromTable(6, 2))).contains("Special Investigation")
        await t.wait(1000);
    }
    async updateGeneralSIDQuestionnaire(questionNo, radioInput) {
        if (radioInput == 'yes')
            radioInput = 0
        else
            radioInput = 1
        let sIDRadioGroup = (`#SIDetails-SIDetailsScreen-SectionTwo-0-QuestionSetLV-${questionNo}-QuestionRowSet-QuestionRangeRadioInput_${radioInput}`);
        await t.click(sIDRadioGroup)
    }
}