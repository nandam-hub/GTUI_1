import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput,PcfTextInput } from "@gtui/gt-ui-framework";
//import { AccountGroupMenuLinks } from "../../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks";
import { NewDirectBillPayment } from "../../../../pages/gw/generated/billingsolutions/pages/other/NewDirectBillPayment";


export class NewDirectBillPayment_Ext extends NewDirectBillPayment {
    overrideNewDirectBillPayment = PcfComponent('#NewDirectBillPayment-EditDBPaymentScreen-OverrideToolbar');
    overrideDistributionAmount = PcfTextInput ('#NewDirectBillPayment-EditDBPaymentScreen-DistributionAmountsLV-groups-0-0-OverrideAmount')
}