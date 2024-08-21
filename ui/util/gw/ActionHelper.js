import { LOBWizardStepGroupSubmissionWizard_Ext } from "../../actions/gw/pc/scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { UALPersonalVehiclePopup_New } from "../../actions/gw/pc/scenarioPages/other/UALPersonalVehiclePopup_New";
import { CLLLocationPopup_New } from "../../actions/gw/pc/scenarioPages/popup/CLLCP/CLLLocationPopup_New";
import { NewAdditionalNamedInsuredPopup_Ext } from "../../actions/gw/pc/scenarioPages/popup/New/NewAdditionalNamedInsuredPopup_Ext";
import world from "./world"
import { pascalToCamel } from "./helper";
import { t } from "testcafe";
const fs = require('fs').promises;

let pcfCategory;
let camelFieldName;
const lobWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const ualPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()
const cllLocationPopup_New = new CLLLocationPopup_New()
const newAdditionalNamedInsuredPopup_Ext = new NewAdditionalNamedInsuredPopup_Ext()

const ModIdentifier = {
    coverage: lobWizardStepGroupSubmissionWizard_Ext,
    vehicle: ualPersonalVehiclePopup_New,
    building: cllLocationPopup_New,
    driver: newAdditionalNamedInsuredPopup_Ext
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
    // TODO: How are we setting action for modules other than coverage
    let checkAction = 'check'
    //To convert pascal casing input to camel casing as per css standard
    camelFieldName = pascalToCamel(fieldName)

    switch (t.ctx.module) {
        case ('Coverage'):
            if (world.coverageDataMap.has(fieldName)) {
                checkAction = world.coverageDataMap.get(fieldName)
                if ((checkAction === 'check' || checkAction === 'update') && !(await ModIdentifier.coverage[camelFieldName].isChecked())) {
                    // if (!(await ModIdentifier.coverage[camelFieldName].isChecked()))
                    await ModIdentifier.coverage[camelFieldName].click()
                }
                if (checkAction === 'uncheck' && (await ModIdentifier.coverage[camelFieldName].isChecked()))
                    await ModIdentifier.coverage[camelFieldName].click()
            }
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
            if (world.coverageDataMap.has(fieldName))
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
        case ('Drivers'):
            await ModIdentifier.driver[camelFieldName].setValue(t.ctx.DriverData)
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
            if (world.coverageDataMap.has(fieldName))
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
        case ('Drivers'):
            await ModIdentifier.driver[camelFieldName].click()
            await ModIdentifier.driver[camelFieldName].selectOptionByLabel(t.ctx.DriverData)
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}