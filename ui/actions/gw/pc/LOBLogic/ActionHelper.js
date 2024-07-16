import { LOBWizardStepGroupSubmissionWizard_Ext } from "../scenarioPages/navigation/submissionWizard/LOBWizardStepGroupSubmissionWizard_Ext"
import { UALPersonalVehiclePopup_New } from "../scenarioPages/other/UALPersonalVehiclePopup_New";
import world from "../../../../util/gw/world"
import { t } from "testcafe";
const fs = require('fs').promises;

let pcfCategory;
const lobWizardStepGroupSubmissionWizard_Ext = new LOBWizardStepGroupSubmissionWizard_Ext()
const ualPersonalVehiclePopup_New = new UALPersonalVehiclePopup_New()

const ModIdentifier = {
    coverage: lobWizardStepGroupSubmissionWizard_Ext,
    vehicle: ualPersonalVehiclePopup_New
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
    switch (t.ctx.module) {
        case ('Coverage'):
            if (checkAction === 'check' || checkAction === 'update') {
                if (!(await ModIdentifier.coverage[fieldName].isChecked()))
                    await ModIdentifier.coverage[fieldName].click()
            }
            if (checkAction === 'uncheck' && (await ModIdentifier.coverage[fieldName].isChecked()))
                await ModIdentifier.coverage[fieldName].click()
            break;

        case ('Vehicles'):
            if (checkAction === 'check' || checkAction === 'update') {
                if (!(await ModIdentifier.vehicle[fieldName].isChecked()))
                    await ModIdentifier.vehicle[fieldName].click()
            }
            if (checkAction === 'uncheck' && (await ModIdentifier.vehicle[fieldName].isChecked()))
                await ModIdentifier.vehicle[fieldName].click()
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}

//Function to type in input box
export async function textInput(fieldName) {
    switch (t.ctx.module) {
        case ('Coverage'):
            await ModIdentifier.coverage[fieldName].setValue(world.coverageDataMap.get(fieldName))
            break;
        case ('Vehicles'):
            await ModIdentifier.vehicle[fieldName].setValue(t.ctx.VehicleData)
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}

//Function to select value from dropdown by label
export async function selectInput(fieldName) {
    switch (t.ctx.module) {
        case ('Coverage'):
            await ModIdentifier.coverage[fieldName].selectOptionByLabel(world.coverageDataMap.get(fieldName))
            break;
        case ('Vehicles'):
            await ModIdentifier.vehicle[fieldName].selectOptionByLabel(t.ctx.VehicleData)
            break;
        default:
            throw new Error('Incorrect module provided')
    }
}