const moment = require('moment');
import { t, Selector } from 'testcafe';

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
 * To click on a specific record in a table.
 * @param {string, Number} refHeaderNameOrIndex -Column name or column index of reference cell value
 * @param {string} stringValue - Cell text value on which click action should be performed 
 * @param {string} referenceCellValue - Reference cell value
 * @param {number} targetColumnIndex - Column index where stringValue is present
 */
export async function clickTableRecord(refHeaderNameOrIndex, stringValue, referenceCellValue = "", targetColumnIndex = "") {
    await t.wait(1000)
    const tableRows = Selector('table.gw-ListViewWidget--table').find('tr');
    const tablecols = tableRows.nth(0).find('td');
    const rowCount = await tableRows.count;
    //To find "refHeaderNameOrIndex" is string or index
    if (typeof refHeaderNameOrIndex === 'string') {
        const colsCount = await tablecols.count;
        for (let i = 0; i < colsCount; i++) {
            let cellText
            try {
                cellText = await tablecols.nth(i).find('div.gw-label, div.gw-value-readonly-wrapper').textContent;
                console.log("The cell text is ", cellText)
            }
            catch (e) {
                // Skip a loop if no lable found - checkbox/empty title
                continue;
            }
            if (refHeaderNameOrIndex.includes(cellText) && cellText.trim() !== '' && cellText.trim() !== null) {
                refHeaderNameOrIndex = i;
                console.log("headerNameOrIndex ", refHeaderNameOrIndex)
                break;
            }
        }
    }

    for (let i = 1; i < rowCount; i++) {
        const cellText = await tableRows.nth(i).find('td').nth(Number.parseInt(refHeaderNameOrIndex)).textContent;
        if (referenceCellValue == "") {
            if (cellText.includes(stringValue)) {
                await t.click(tableRows.nth(i).find('td').nth(Number.parseInt(refHeaderNameOrIndex)).find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget'));
                await t.wait(2000)
                break;
            }
        }
        else if (cellText.includes(referenceCellValue)) {
            var path = tableRows.nth(i).find('td').nth(Number.parseInt(targetColumnIndex))
            try {
                await t.click((path.find('div').nth(-1).withText(stringValue)))
            }
            catch (e) {
                console.log(' withText did not work. Trying with id')
                await t.click((path.find('div').find(`[id*="${stringValue}"]`)))
            }
        }
        break;
    }
}