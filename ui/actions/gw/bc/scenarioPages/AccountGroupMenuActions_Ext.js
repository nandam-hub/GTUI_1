import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { AccountGroupMenuActions } from "../../../../pages/gw/generated/billingsolutions/pages/navigation/menuActions/AccountGroupMenuActions";

const accountGroupMenuActions = new AccountGroupMenuActions();
export class AccountGroupMenuActions_Ext extends AccountGroupMenuActions{
CreateDisbursementDetailDV_amount = PcfTextInput('#AccountCreateDisbursementWizard-CreateDisbursementDetailScreen-CreateDisbursementDetailDV-amount');
effectiveDate=PcfTextInput('#AccountCreateDisbursementWizard-CreateDisbursementDetailScreen-CreateDisbursementDetailDV-effectiveDate');
CreateDisbursementDetailDV_reason=PcfSelectInput('#AccountCreateDisbursementWizard-CreateDisbursementDetailScreen-CreateDisbursementDetailDV-reason');
AccountCreateDisbursementWizard_Next = PcfButton('#AccountCreateDisbursementWizard-Next')
Finish=PcfButton('#AccountCreateDisbursementWizard-Finish');
DisbursementPendingDV_pending=PcfComponent('#AccountCreateDisbursementWizard-CreateDisbursementDetailScreen-DisbursementPendingDV-pending');




}