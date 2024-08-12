const moment = require('moment');
import { t, Selector } from 'testcafe';
import { PcfComponent } from '@gtui/gt-ui-framework';

//To generate date from current date in MMDDYYYY format
export function dateFunction(noOfDays, dateFormat = 'MMDDYYYY') {
    var modifiedDate = moment().add(noOfDays, 'days').format(dateFormat).toString();
    return modifiedDate;
}

//Splits the string and returns value based on index
export function splitFunction(value, delimiter, index) {
    var stringValue = value.split(delimiter);
    var splitValue = stringValue[index];
    return splitValue;
}

//Generates and returns random string with length provided
export function generateRandomStringFunction(length) {
    let randomString = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        const randonIndex = Math.floor(Math.random() * alphabet.length);
        randomString += alphabet[randonIndex];
    }
    return randomString;
}

//To click on a specific record in a table.
//This function by default considers first table in a page
export async function searchTableRecord(headerNameOrIndex, stringValue) {
    await t.wait(1000)
    const tableRows = Selector('table').nth(0).find('tr');
    const tablecols = tableRows.nth(0).find('td');
    const rowCount = await tableRows.count;
    //To find "headerNameOrIndex" is string or index
    if (typeof headerNameOrIndex === 'string') {
        const colsCount = await tablecols.count;
        for (let i = 0; i < colsCount; i++) {
            let cellText
            try {
                cellText = await tablecols.nth(i).find('div.gw-label').textContent;
            }
            catch (e) {
                // Skip a loop if no lable found - checkbox/empty title
                continue;
            }
            if (headerNameOrIndex.includes(cellText) && cellText.trim() !== '' && cellText.trim() !== null) {
                headerNameOrIndex = i;
                break;
            }
        }
    }
    for (let i = 1; i < rowCount; i++) {
        const cellText = await tableRows.nth(i).find('td').nth(Number.parseInt(headerNameOrIndex)).textContent;
        if (cellText.includes(stringValue)) {
            await t.click(tableRows.nth(i).find('td').nth(Number.parseInt(headerNameOrIndex)).find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget'));
            await t.wait(2000)
            break;
        }
    }
}

//To return a specific cell value from a table
//headerNameOrIndex - Provide column name or column index of reference cell value
//referenceCellValue - provide the reference cell value
//targetColumnIndex - provide the column number or index where the value has to be retrieved
export async function validateTableRecord(headerNameOrIndex, referenceCellValue, targetColumnIndex) {
    await t.wait(1000)
    const tableRows = Selector('table.gw-ListViewWidget--table').find('tr');
    const tablecols = tableRows.nth(0).find('td');
    const rowCount = await tableRows.count;
    //To find "headerNameOrIndex" is string or index
    if (typeof headerNameOrIndex === 'string') {
        const colsCount = await tablecols.count;
        for (let i = 0; i < colsCount; i++) {
            let cellText
            try {
                cellText = await tablecols.nth(i).find('div.gw-label').textContent;
            }
            catch (e) {
                // Skip a loop if no lable found - checkbox/empty title
                continue;
            }
            if (headerNameOrIndex.includes(cellText) && cellText.trim() !== '' && cellText.trim() !== null) {
                headerNameOrIndex = i;
                break;
            }
        }
    }
    let actualValue = "";
    for (let i = 1; i < rowCount; i++) {
        const cellText = await tableRows.nth(i).find('td').nth(Number.parseInt(headerNameOrIndex)).textContent;
        if (cellText.includes(referenceCellValue)) {
            actualValue = await (tableRows.nth(i).find('td').nth(targetColumnIndex).find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget, div.gw-label')).textContent;
            break;
        }
    }
    return actualValue
}

export function pascalToCamel(inputString) {
    if (typeof inputString == 'string')
        return inputString.charAt(0).toLowerCase() + inputString.slice(1)
}

//To enter data in input field of a table
export async function enterDataInTable(columnIndex, inputString) {
    //Locate Table
    const table = Selector('table.gw-ListViewWidget--table');
    const lastrow = table.find('tbody').find('tr').nth(-1)
    // Locate the input field and type
    const inputField = lastrow.find('td').nth(columnIndex).find('input[type="text"]');
    await t
        .expect(table.exists).ok()
        .typeText(inputField, inputString);
}

//To click on an element in last row of a table
export async function performClickInTable(webElement) {
    // Locate Table
    const table = Selector('table.gw-ListViewWidget--table')
    // Locate the webelement to be clicked in last row
    const lastrow = table.find('tbody').find('tr').nth(-1)
    await t.click(lastrow.find(webElement).nth(-1));
}

//To hover on an element in last row of a table
export async function performHoverInTable(webElement) {
    // Locate Table
    const table = Selector('table.gw-ListViewWidget--table')
    // Locate the webelement to be hover in last row
    const lastrow = table.find('tbody').find('tr').nth(-1)
    await t.hover(lastrow.find(webElement));
}

/**
 * Recursive function to navigate through nested submenus and click a specific option
 * @param {Array string} menuPath - list of options in sequence
 * @param {string} finalOptionText - final option to click
 */
export async function navigateAndClickSubmenu(menuPath, finalOptionText) {
    let currentSelector = Selector('div.gw-subMenu.gw-open');

    // Iterate through the menu path to hover over each submenu
    for (let i = 0; i < menuPath.length; i++) {
        await t.hover(currentSelector.find(`div[aria-label='${menuPath[i]}']`));
    }
    // After navigating through the submenus, click the desired final option
    await t.click(currentSelector.find(`div[aria-label='${finalOptionText}']`));
}