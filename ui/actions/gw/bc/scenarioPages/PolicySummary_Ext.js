import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { PolicySummary } from "../../../../pages/gw/generated/billingsolutions/pages/policyGroup/policyOverview/PolicySummary";

const policySummary = new PolicySummary();
export class PolicySummary_Ext extends PolicySummary
{
    ProducerName=PcfComponent('#PolicyGroup-PolicyInfoBar-ProducerName > div.gw-label.gw-infoValue');



}