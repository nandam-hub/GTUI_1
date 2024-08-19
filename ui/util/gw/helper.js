const moment = require('moment');
import { t, Selector } from 'testcafe';
import { PcfComponent } from '@gtui/gt-ui-framework';

/**
 * To generate date from current date in MMDDYYYY format
 * @param {string} noOfDays - number of days to be added or substracted
 * @param {string} dateFormat - format in which dat ehas to be returned
 * @returns - modified date
 */
export function dateFunction(noOfDays, dateFormat = 'MMDDYYYY') {
    var modifiedDate = moment().add(noOfDays, 'days').format(dateFormat).toString();
    return modifiedDate;
}
/**
 * Splits the string and returns value based on index
 * @param {string} value - Whole string that should be split
 * @param {string} delimiter - Reference character to split string
 * @param {Number} index - Sub string index that should be returned
 * @returns -  Sub string 
 */
export function splitFunction(value, delimiter, index) {
    var stringValue = value.split(delimiter);
    var splitValue = stringValue[index];
    return splitValue;
}
/**
 * Generates and returns random string with length provided
 * @param {Number} length - Length of the string to be generated
 * @returns - a random syring with provided length
 */
export function generateRandomStringFunction(length) {
    let randomString = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < length; i++) {
        const randonIndex = Math.floor(Math.random() * alphabet.length);
        randomString += alphabet[randonIndex];
    }
    return randomString;
}
/** To convert string to Int
 * @param {string} inputString - String value that should be converted
 * @returns - Interger
*/
export function convertToInt(inputString) { return parseInt(inputString, 10) }

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
/**To return a specific cell value from a table
 * @param {string, Number} headerNameOrIndex - Column name or column index of reference cell value
 * @param {string} referenceCellValue - Reference cell value
 * @param {Number} targetColumnIndex - Column index where stringValue is present
 * @returns - Table cell value
 */
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

/** To convert Pascal case to Camel case
 * @param {string} inputString - String value that should be converted
 * @returns - String in camel case
*/
export function pascalToCamel(inputString) {
    if (typeof inputString == 'string')
        return inputString.charAt(0).toLowerCase() + inputString.slice(1)
}

/** 
 * To click on a record in a table with a specific text.
 * @param {string, Number} referenceCellValueOrIndex -Reference Cell text or column index
 * @param {string} stringValue - Cell text value or id of the text on which click action should be performed
 */
export async function clickTableRecord(stringValue, referenceCellValueOrIndex) {
    const tableRows = Selector('table.gw-ListViewWidget--table').find('tr');
    if ((typeof referenceCellValueOrIndex) === 'string') {
        let tablePath = tableRows.withText(referenceCellValueOrIndex).find('td')
        try {
            await t.click(tablePath.find('div').nth(-1).withText(stringValue))
        }
        catch (e) {
            console.log('withText did not work. Trying with id')
            await t.click(tablePath.find('div').find(`[id*="${stringValue}"]`))
        }
    }
    else {
        for (let i = 1; i <= await tableRows.count; i++) {
            let currentCell = tableRows.nth(i).find('td').nth(referenceCellValueOrIndex)
            if ((await (currentCell.textContent)).includes(stringValue))
                await t.click(currentCell.find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget'))
            break;
        }
    }
}


/**
 * To return specific cell value based on row and column
 * @param {Number} rowIndex - row number of the actual value. By default considers last row
 * @param {Number} columnIndex - column number of the actual value
 * @returns - specific cellText
 */
export async function returnDataFromTable(columnIndex, rowIndex = -1) {
    //Locate Table
    const table = Selector('table.gw-ListViewWidget--table');
    return table.find('tbody').find('tr').nth(rowIndex).find('td').nth(columnIndex).textContent;
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
    if (await (currentSelector.find(`div[aria-label='New ...']`)).exists)
        await t.hover(currentSelector.find(`div[aria-label='New ...']`));

    // Iterate through the menu path to hover over each submenu
    for (let i = 0; i < menuPath.length; i++) {
        await t.hover(currentSelector.find(`div[aria-label='${menuPath[i]}']`));
    }
    // After navigating through the submenus, click the desired final option
    await t.click(currentSelector.find(`div[aria-label='${finalOptionText}']`));
}
