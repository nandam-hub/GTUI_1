import { ClaimLossDetails } from "../../../pages/gw/generated/claimsolutions/pages/claim/claimLossDetailsGroup/ClaimLossDetails";
import { t } from 'testcafe'
import world from "../../../util/gw/world";

const claimLossDetails = new ClaimLossDetails()

export class ClaimLossDetailsScenario {
    async verifyClaimLossDetails() {
        //await claimLossDetails.claimLossDetailsClaimLossDetailsScreenLossDetailsPanelSetLossDetailsCardCVLossDetailsDVCatastrophe_CatastropheNumber.eql(world.dataMap.get('ClaimStatus'))
        await t.expect(claimLossDetails.claimLossDetailsClaimLossDetailsScreenLossDetailsPanelSetLossDetailsCardCVLossDetailsDVCatastrophe_CatastropheNumber.component.textContent).eql(world.dataMap.get('CatastropheNumber'))
    }
}