
import { checkBox, textInput, selectInput, loadPcfCategory } from './ActionHelper'
import { UALPersonalVehiclePopup_New } from '../scenarioPages/other/UALPersonalVehiclePopup_New'
import { SubmissionWizard_New } from '../scenarioPages/navigation/submissionWizard/SubmissionWizard_New'
import world from "../../../../util/gw/world"
import { t } from 'testcafe'

const ualPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()
const submissionWizard_New = new SubmissionWizard_New()

export class USAPersonalAuto {

    //To load the coverage data from json input and to perform action on provided coverage
    async coverageFilter() {
        const pcfType = await loadPcfCategory()
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            t.ctx.module = 'Coverage'
            console.log(`The current module is ${t.ctx.module}`)

            for (const [key, value] of world.coverageDataMap) {
                if (pcfType.selectInput.includes(key)) {
                    console.log(`${key} is present`)
                    await selectInput(key)
                }
                else if (pcfType.textInput.includes(key)) {
                    console.log(`${key} is present`)
                    await textInput(key)
                }
                else if (pcfType.checkBox.includes(key)) {
                    console.log(`${key} is present`)
                    await checkBox(key)
                }
            }
        }
        else {
            console.log(`Coverage Data is ${world.coverageDataMap}`)
            throw new Error('world.coverageDataMap is undefined or empty')
        }
    }

    //To load vehicle data from json input and add single or multiple vehicle
    async addVehicle() {
        const pcfType = await loadPcfCategory()
        console.log(pcfType)
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
                }
                await ualPersonalVehiclePopup_New.UALPersonalVehiclePopup_Ok.click()
                i++
                if (i < world.vehicleDataMap.size) {
                    await submissionWizard_New.SubmissionWizard_AddPersonalVehicle.click()
                    console.log("Adding next Vehicle")
                }
            }
        }
        else {
            console.log(`Vehicle Data is ${world.vehicleDataMap}`)
            throw new Error('world.vehicleDataMap is undefined or empty')
        }
    }
}
