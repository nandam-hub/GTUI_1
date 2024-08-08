
import { textInput, selectInput, loadPcfCategory } from './ActionHelper'
import { UALPersonalVehiclePopup_New } from '../../actions/gw/pc/scenarioPages/other/UALPersonalVehiclePopup_New'
import { NewAdditionalNamedInsuredPopup } from '../../pages/gw/generated/policysolutions/pages/popup/New/NewAdditionalNamedInsuredPopup'
import { PolicyInfoScreen_Ext } from '../../actions/gw/pc/scenarioPages/IOBWizardStepGroup/policyInfo/PolicyInfoScreen_Ext'
import { SubmissionWizard_New } from '../../actions/gw/pc/scenarioPages/navigation/submissionWizard/SubmissionWizard_New'
import world from "./world"
import { t } from 'testcafe'

const ualPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()
const submissionWizard_New = new SubmissionWizard_New()
const newAdditionalNamedInsuredPopup = new NewAdditionalNamedInsuredPopup()
const policyInfoScreen_Ext = new PolicyInfoScreen_Ext()

export class USAPersonalAuto {

    //To load vehicle data from json input and add single or multiple vehicle
    async addVehicle() {
        const pcfType = await loadPcfCategory()

        if (!(world.vehicleDataMap === undefined) && Array.from(world.vehicleDataMap.keys()).length > 0) {
            t.ctx.module = 'Vehicles'
            console.log(`The current module is ${t.ctx.module}`)
            let i = 0

            for (const [key, value] of world.vehicleDataMap) {
                for (const dataKey of Object.keys(value)) {
                    t.ctx.VehicleData = value[dataKey]
                    if (pcfType.selectInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await selectInput(dataKey)
                    }
                    else if (pcfType.textInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await textInput(dataKey)
                    }
                    else {
                        throw new Error(`${dataKey} is NOT present in pcfCategory.json file`)
                    }
                }
                await ualPersonalVehiclePopup_New.UALPersonalVehiclePopup_Ok.click()
                i++
                if (i < world.vehicleDataMap.size) {
                    await submissionWizard_New.SubmissionWizard_AddPersonalVehicle.click()
                    console.log("ADDING NEXT VEHICLE")
                }
            }
        }
        else {
            console.log(`Vehicle Data is ${world.vehicleDataMap}`)
            throw new Error('world.vehicleDataMap is undefined or empty')
        }
    }

    //To load driver data from json input and add single or multiple driver
    async addDriver() {
        const pcfType = await loadPcfCategory()

        if (!(world.driverDataMap === undefined) && Array.from(world.driverDataMap.keys()).length > 0) {
            t.ctx.module = 'Drivers'
            console.log(`The current module is ${t.ctx.module}`)
            let i = 0

            for (const [key, value] of world.driverDataMap) {
                for (const dataKey of Object.keys(value)) {
                    t.ctx.DriverData = value[dataKey]
                    if (pcfType.selectInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await selectInput(dataKey)
                    }
                    else if (pcfType.textInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await textInput(dataKey)
                    }
                    else {
                        throw new Error(`${dataKey} is NOT present in pcfCategory.json file`)
                    }
                }
                await newAdditionalNamedInsuredPopup.newAdditionalNamedInsuredPopupContactDetailScreenForceDupCheckUpdate.click()
                i++
                if (i < world.driverDataMap.size) {
                    await policyInfoScreen_Ext.namedInsuredsLV_tbAddContactsButton.click()
                    await policyInfoScreen_Ext.newPersonMenuItem.click()
                    console.log("ADDING NEXT DRIVER")
                }
            }
        }
        else {
            console.log(`Driver Data is ${world.vehicleDataMap}`)
            throw new Error('world.driverDataMap is undefined or empty')
        }
    }
}
