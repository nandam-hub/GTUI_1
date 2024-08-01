import { PcfButton, PcfCheckBox, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework"

export class UALPersonalVehiclePopup_New {
    bodyType = PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-BodyType')
    vIN = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-VIN')
    year = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Year')
    make = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Make')
    model = PcfTextInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-Model')
    licenseState = PcfSelectInput('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-LicenseState')
    UALPersonalVehiclePopup_AddDriver = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-Add')
    UALPersonalVehiclePopup_PolicyDriverMenuIcon = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-0-PolicyDriver-PolicyDriverMenuIcon')
    UALPersonalVehiclePopup_NewPerson = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-UALVehicleDriverListPanelSet-0-PolicyDriver-1-ContactType')
    UALPersonalVehiclePopup_VehicleDriverExposureCardTab = PcfButton('#UALPersonalVehiclePopup-UALPersonalVehiclePanelSet-VehicleDriverExposureCardTab')
    UALPersonalVehiclePopup_Ok = PcfButton('#UALPersonalVehiclePopup-Update')
}