import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { PolicySummary } from "./PolicySummary";

export class PolicySummary_Ext extends PolicySummary {
    producerName = PcfComponent('#PolicyGroup-PolicyInfoBar-ProducerName > div.gw-label.gw-infoValue');
}