import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput } from "@gtui/gt-ui-framework";
import { AccountGroupMenuLinks } from "../../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks";

export class AccountGroupMenuLinks_Ext extends AccountGroupMenuLinks {
    accountScreenNumber = PcfComponent('#AccountGroup-AccountInfoBar-AccountNumber > div.gw-label.gw-infoValue');
}