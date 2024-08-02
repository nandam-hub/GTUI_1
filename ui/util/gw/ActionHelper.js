import { LOBWizardStepGroupSubmissionWizard_Ext } from "../../actions/gw/pc/scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { UALPersonalVehiclePopup_New } from "../../actions/gw/pc/scenarioPages/other/UALPersonalVehiclePopup_New";
import { CLLLocationPopup_New } from "../../actions/gw/pc/scenarioPages/popup/CLLCP/CLLLocationPopup_New";
import world from "./world"
import { pascalToCamel } from "./helper";
import { t } from "testcafe";
const fs = require('fs').promises;

let pcfCategory;
let camelFieldName;
const lobWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const ualPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()
const cllLocationPopup_New = new CLLLocationPopup_New()

const ModIdentifier = {
    coverage: lobWizardStepGroupSubmissionWizard_Ext,
    vehicle: ualPersonalVehiclePopup_New,
    building: cllLocationPopup_New
};

export async function loadPcfCategory() {
    try {
        const data = await fs.readFile('ui/testdata/pc/pcfCategory.json', 'utf8');
        pcfCategory = JSON.parse(data);
        return pcfCategory
    } catch (error) {
        console.error('Error reading the pcfCategory JSON file:', error);
    }
}

//Function to check and uncheck checkbox
export async function checkBox(fieldName) {
    const checkAction = world.coverageDataMap.get(fieldName)
    //To convert pascal casing input to camel casing as per css standard
    camelFieldName = pascalToCamel(fieldName)

    switch (t.ctx.module) {
        case ('Coverage'):
            if (checkAction === 'check' || checkAction === 'update') {
                if (!(await ModIdentifier.coverage[camelFieldName].isChecked()))
                    await ModIdentifier.coverage[camelFieldName].click()
            }
            if (checkAction === 'uncheck' && (await ModIdentifier.coverage[camelFieldName].isChecked()))
                await ModIdentifier.coverage[camelFieldName].click()
            break;

        case ('Vehicles'):
            if (checkAction === 'check' || checkAction === 'update') {
                if (!(await ModIdentifier.vehicle[camelFieldName].isChecked()))
                    await ModIdentifier.vehicle[camelFieldName].click()
            }
            if (checkAction === 'uncheck' && (await ModIdentifier.vehicle[camelFieldName].isChecked()))
                await ModIdentifier.vehicle[camelFieldName].click()
            break;

        case ('Building'):
            if (checkAction === 'check' || checkAction === 'update') {
                if (!(await ModIdentifier.building[camelFieldName].isChecked()))
                    await ModIdentifier.building[camelFieldName].click()
            }
            if (checkAction === 'uncheck' && (await ModIdentifier.building[camelFieldName].isChecked()))
                await ModIdentifier.building[camelFieldName].click()
            break;

        case ('Location'):
            if (checkAction === 'check' || checkAction === 'update') {
                if (!(await ModIdentifier.building[camelFieldName].isChecked()))
                    await ModIdentifier.building[camelFieldName].click()
            }
            if (checkAction === 'uncheck' && (await ModIdentifier.building[camelFieldName].isChecked()))
                await ModIdentifier.building[camelFieldName].click()
            break;

        default:
            throw new Error('Incorrect module provided')
    }
}

//Function to type in input box
export async function textInput(fieldName) {
    //To convert pascal casing input to camel casing as per css standard
    camelFieldName = pascalToCamel(fieldName)

    switch (t.ctx.module) {
        case ('Coverage'):
            await ModIdentifier.coverage[camelFieldName].setValue(world.coverageDataMap.get(fieldName))
            break;
        case ('Vehicles'):
            await ModIdentifier.vehicle[camelFieldName].setValue(t.ctx.VehicleData)
            break;
        case ('Building'):
            await ModIdentifier.building[camelFieldName].setValue(t.ctx.BuildingData)
            break;
        case ('Location'):
            await ModIdentifier.building[camelFieldName].setValue(t.ctx.LocationData)
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}

//Function to select value from dropdown by label
export async function selectInput(fieldName) {
    //To convert pascal casing input to camel casing as per css standard
    camelFieldName = pascalToCamel(fieldName)

    switch (t.ctx.module) {
        case ('Coverage'):
            await ModIdentifier.coverage[camelFieldName].selectOptionByLabel(world.coverageDataMap.get(fieldName))
            break;
        case ('Vehicles'):
            await ModIdentifier.vehicle[camelFieldName].selectOptionByLabel(t.ctx.VehicleData)
            break;
        case ('Building'):
            await ModIdentifier.building[camelFieldName].selectOptionByLabel(t.ctx.BuildingData)
            break;
        case ('Location'):
            await ModIdentifier.building[camelFieldName].selectOptionByLabel(t.ctx.LocationData)
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}

//To load the coverage data from json input and to perform action on provided coverage
export async function coverageFilter() {
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
            else{
                throw new Error(`${key} is NOT present in pcfCategory.json file`)
            }
        }
    }
    else {
        console.log(`Coverage Data is ${world.coverageDataMap}`)
        throw new Error('world.coverageDataMap is undefined or empty')
    }
}