import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput } from "@gtui/gt-ui-framework";
//import { AccountGroupMenuLinks } from "../../../../pages/gw/generated/billingsolutions/pages/navigation/menuLinks/AccountGroupMenuLinks";
import { AccountGroupMenuActions } from "../../../../pages/gw/generated/billingsolutions/pages/navigation/menuActions/AccountGroupMenuActions";


export class AccountGroupMenuActions_Ext extends AccountGroupMenuActions {
    accountDetailMenuActionsPayments = PcfComponent('#AccountGroup-AccountDetailMenuActions-AccountDetailMenuActions_Payments-AccountDetailMenuActions_NewDirectBillPayment > div > div.gw-label');
    accountDetailMenuActionsNewPayment = PcfComponent ('#AccountGroup-AccountDetailMenuActions-AccountDetailMenuActions_Payments > div.gw-action--inner.gw-hasDivider > div.gw-label')

}