import { PcfButton, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';

export class CLLLocationPopup_New {
    cllLocationPopupAddBuilding = PcfButton('#CLLLocationPopup-CLLLocationPanelSet-CLLCPBuildingListPanelSet-AddCPBuilding')
    cllCPBuildingPopupOk = PcfButton('#CLLCPBuildingPopup-Update')
    cllLocationPopupOk = PcfButton('#CLLLocationPopup-Update')
    cllLocationPopupAddress = PcfSelectInput('#CLLLocationPopup-CLLLocationPanelSet-AddressOfLocation')
    BuildingDescription = PcfTextInput('#CLLCPBuildingPopup-CLLCPBuildingPanelSet-BuildingDesc')
    YearBuilt = PcfTextInput('#CLLCPBuildingPopup-CLLCPBuildingPanelSet-YearBuilt')
}