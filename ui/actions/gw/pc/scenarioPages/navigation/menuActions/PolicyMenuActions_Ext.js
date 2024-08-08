import { PcfComponent } from "@gtui/gt-ui-framework";
import { PolicyMenuActions } from "../../../../../../pages/gw/generated/policysolutions/pages/navigation/menuActions/PolicyMenuActions";

export class PolicyMenuActions_Ext extends PolicyMenuActions {
    policyFileMenuActions_GoCommercialProperty = PcfComponent('#PolicyFile-PolicyFileAcceleratedMenuActions-PolicyMenuItemSet-PolicyMenuItemSet_GOCommercialPropertyLine')
    policyFileMenuActions_Location = PcfComponent('#PolicyFile-PolicyFileAcceleratedMenuActions-PolicyMenuItemSet-PolicyMenuItemSet_GOCommercialPropertyLine-PolicyMenuItemSet_CLLLocation')
    policyFileMenuActions_AddressLink = PcfComponent('#PolicyFile_CLLLocation-PolicyFile_CLLLocationScreen-PolicyFile_CLLLocationScreen-CLLLocationListPanelSet-0-AddressOfLocation')
    policyFileUALPersonalAutoLine = PcfComponent('#PolicyFile-PolicyFileAcceleratedMenuActions-PolicyMenuItemSet-PolicyMenuItemSet_UALPersonalAutoLine')
    policyFileUALPersonalAutoMenu = PcfComponent('#PolicyFile-PolicyFileAcceleratedMenuActions-PolicyMenuItemSet-PolicyMenuItemSet_UALPersonalAutoLine-PolicyMenuItemSet_UALUsaPersonalAuto')
}