import { textInput } from './ActionHelper'
import { CLLLocationPopup_New } from '../../actions/gw/pc/scenarioPages/popup/CLLCP/CLLLocationPopup_New'
import world from "./world"
import { t } from 'testcafe'

const cllLocationPopup_New = new CLLLocationPopup_New()

export class GoCommercialProperty {

    //To load building data from json input and add single or multiple building
    async addBuilding() {
        if (!(world.buildingDataMap === undefined) && Array.from(world.buildingDataMap.keys()).length > 0) {
            t.ctx.module = 'Building'
            console.log(`The current module is ${t.ctx.module}`)
            let i = 0
            for (const [key,value] of world.buildingDataMap) {
                const currentBuildingMap = new Map(Object.entries(value))
                await textInput('BuildingDescription', currentBuildingMap)
                await textInput('YearBuilt', currentBuildingMap)

                await cllLocationPopup_New.cllCPBuildingPopupOk.click()
                i++
                if (i < world.buildingDataMap.size) {
                    await cllLocationPopup_New.cllLocationPopupAddBuilding.click()
                    console.log("ADDING NEXT BUILDING")
                }
            }
        }
        else {
            console.log(`Building Data is ${world.buildingDataMap}`)
            throw new Error('world.buildingDataMap is undefined or empty')
        }
    }

    //To load building data from json input and add single or multiple building
    async addLocation() {
        if (!(world.locationDataMap === undefined) && Array.from(world.locationDataMap.keys()).length > 0) {
            t.ctx.module = 'Location'
            console.log(`The current module is ${t.ctx.module}`)
            let i = 0
            for (const [key,value] of world.locationDataMap) {
                const currentLocationMap = new Map(Object.entries(value))
                await textInput('CllLocationPopupAddress1', currentLocationMap)
                await textInput('CllLocationPopupCity', currentLocationMap)
                await textInput('CllLocationPopupZipCode', currentLocationMap)

                await cllLocationPopup_New.cllLocationPopupLocationOk.click()
                i++
                if (i < world.locationDataMap.size) {
                    await cllLocationPopup_New.cllLocationPopupAddLocationMenu.click()
                    await cllLocationPopup_New.cllLocationPopupNewLocation.click()
                    console.log("ADDING NEXT LOCATION")
                }
            }
        }
        else {
            console.log(`Location Data is ${world.locationDataMap}`)
            throw new Error('world.locationDataMap is undefined or empty')
        }
    }
}