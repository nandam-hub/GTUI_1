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

//Function to check and uncheck checkbox
export async function checkBox(fieldName, dataMap = null) {
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
            if (await dataMap.has(fieldName)) {
                checkAction = dataMap.get(fieldName)
                if (checkAction === 'check' || checkAction === 'update') {
                    if (!(await ModIdentifier.vehicle[camelFieldName].isChecked()))
                        await ModIdentifier.vehicle[camelFieldName].click()
                }
                if (checkAction === 'uncheck' && (await ModIdentifier.vehicle[camelFieldName].isChecked()))
                    await ModIdentifier.vehicle[camelFieldName].click()
            }
            break;

        case ('Building'):
            if (await dataMap.has(fieldName)) {
                checkAction = dataMap.get(fieldName)
                if ((checkAction === 'check' || checkAction === 'update') && !(await ModIdentifier.building[camelFieldName].isChecked()))
                    await ModIdentifier.building[camelFieldName].click()
                if (checkAction === 'uncheck' && (await ModIdentifier.building[camelFieldName].isChecked()))
                    await ModIdentifier.building[camelFieldName].click()
            }
            break;

        case ('Location'):
            if (await dataMap.has(fieldName)) {
                checkAction = dataMap.get(fieldName)
                if (checkAction === 'check' || checkAction === 'update') {
                    if (!(await ModIdentifier.building[camelFieldName].isChecked()))
                        await ModIdentifier.building[camelFieldName].click()
                }
                if (checkAction === 'uncheck' && (await ModIdentifier.building[camelFieldName].isChecked()))
                    await ModIdentifier.building[camelFieldName].click()
            }
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}

//Function to type in input box
export async function textInput(fieldName, dataMap = null) {
    //To convert pascal casing input to camel casing as per css standard
    camelFieldName = pascalToCamel(fieldName)

    switch (t.ctx.module) {
        case ('Coverage'):
            if (world.coverageDataMap.has(fieldName))
                await ModIdentifier.coverage[camelFieldName].setValue(world.coverageDataMap.get(fieldName))
            break;
        case ('Vehicles'):
            if (await dataMap.has(fieldName))
                await ModIdentifier.vehicle[camelFieldName].setValue(await dataMap.get(fieldName))
            break;
        case ('Building'):
            if (await dataMap.has(fieldName))
                await ModIdentifier.building[camelFieldName].setValue(await dataMap.get(fieldName))
            break;
        case ('Location'):
            if (await dataMap.has(fieldName))
                await ModIdentifier.building[camelFieldName].setValue(await dataMap.get(fieldName))
            break;
        case ('Drivers'):
            if (await dataMap.has(fieldName))
                await ModIdentifier.driver[camelFieldName].setValue(await dataMap.get(fieldName))
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}

//Function to select value from dropdown by label
export async function selectInput(fieldName, dataMap = null) {
    //To convert pascal casing input to camel casing as per css standard
    camelFieldName = pascalToCamel(fieldName)

    switch (t.ctx.module) {
        case ('Coverage'):
            if (world.coverageDataMap.has(fieldName))
                await ModIdentifier.coverage[camelFieldName].selectOptionByLabel(world.coverageDataMap.get(fieldName))
            break;
        case ('Vehicles'):
            if (dataMap.has(fieldName))
                await ModIdentifier.vehicle[camelFieldName].selectOptionByLabel(dataMap.get(fieldName))
            break;
        case ('Building'):
            if (dataMap.has(fieldName))
                await ModIdentifier.building[camelFieldName].selectOptionByLabel(dataMap.get(fieldName))
            break;
        case ('Location'):
            if (dataMap.has(fieldName))
                await ModIdentifier.building[camelFieldName].selectOptionByLabel(await dataMap.get(fieldName))
            break;
        case ('Drivers'):
            if (dataMap.has(fieldName)) {
                await ModIdentifier.driver[camelFieldName].click()
                await ModIdentifier.driver[camelFieldName].selectOptionByLabel(dataMap.get(fieldName))
            }
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}