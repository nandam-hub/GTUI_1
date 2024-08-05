import { textInput, selectInput, loadPcfCategory } from './ActionHelper'
import { CLLLocationPopup_New } from '../../actions/gw/pc/scenarioPages/popup/CLLCP/CLLLocationPopup_New'
import world from "./world"
import { t } from 'testcafe'

const cllLocationPopup_New = new CLLLocationPopup_New()

export class GoCommercialProperty {

    //To load building data from json input and add single or multiple building
    async addBuidling() {
        const pcfType = await loadPcfCategory()

        if (!(world.buildingDataMap === undefined) && Array.from(world.buildingDataMap.keys()).length > 0) {
            t.ctx.module = 'Building'
            console.log(`The current module is ${t.ctx.module}`)
            let i = 0

            for (const [key, value] of world.buildingDataMap) {
                for (const dataKey of Object.keys(value)) {
                    t.ctx.BuildingData = value[dataKey]
                    if (pcfType.selectInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await selectInput(dataKey)
                    }
                    else if (pcfType.textInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await textInput(dataKey)
                    }
                    else{
                        throw new Error(`${dataKey} is NOT present in pcfCategory.json file`)
                    }
                }
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
        const pcfType = await loadPcfCategory()

        if (!(world.locationDataMap === undefined) && Array.from(world.locationDataMap.keys()).length > 0) {
            t.ctx.module = 'Location'
            console.log(`The current module is ${t.ctx.module}`)
            let i = 0

            for (const [key, value] of world.locationDataMap) {
                for (const dataKey of Object.keys(value)) {
                    t.ctx.LocationData = value[dataKey]
                    if (pcfType.selectInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await selectInput(dataKey)
                    }
                    else if (pcfType.textInput.includes(dataKey)) {
                        console.log(`${dataKey} is present`)
                        await textInput(dataKey)
                    }
                    else{
                        throw new Error(`${dataKey} is NOT present in pcfCategory.json file`)
                    }
                }
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