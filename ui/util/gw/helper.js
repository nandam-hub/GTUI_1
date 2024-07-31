const moment = require('moment');
import { t, Selector } from 'testcafe';

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

    export async function validateTableRecord(headerNameOrIndex, stringValue, targetColumnIndex) {
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
     
            if (cellText.includes(stringValue)) {
                actualValue = await (tableRows.nth(i).find('td').nth(targetColumnIndex).find('div.gw-value-readonly-wrapper, div.gw-ActionValueWidget')).textContent;
                break;
            }
        }
        return actualValue
    }
