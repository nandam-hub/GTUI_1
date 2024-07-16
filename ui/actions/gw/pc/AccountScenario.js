import { generateRandomStringFunction } from '../../../util/gw/helper'
import { Summary_Ext } from "./scenarioPages/account/Summary_Ext.js"
import { NewAccount_Ext } from "./scenarioPages/account/NewAccount_Ext.js"
import { OrganizationSearchPopup_Ext } from './scenarioPages/popup/Organization/OrganizationSearchPopup_Ext'
import { OrganizationBranchSearchPopup } from '../../../pages/gw/generated/policysolutions/pages/popup/Organization/OrganizationBranchSearchPopup'
import { t } from 'testcafe'
import world from "../../../../ui/util/gw/world"

const newAccount_Ext = new NewAccount_Ext()
const summary_Ext = new Summary_Ext()
const organizationBranchSearchPopup = new OrganizationBranchSearchPopup()
const organizationSearchPopup_Ext = new OrganizationSearchPopup_Ext()

export class AccountScenario {

    async createCommercialAccount() {
        await newAccount_Ext.company_Name.setValue(generateRandomStringFunction(5))
        await newAccount_Ext.acc_Search_btn.click()
        await newAccount_Ext.CreateNewAccount_Btn.click()
        //selecting Company
        await newAccount_Ext.newCompanyAccount_Btn.click()
        await newAccount_Ext.acc_State_Dropdown.selectOptionByLabel(world.dataMap.get('State'))
        await newAccount_Ext.acc_zipcode_TxtBox.setValue(world.dataMap.get('ZIPCode'))
        await newAccount_Ext.acc_AddressLine1_TxtBox.setValue(world.dataMap.get('Address1'))
        await newAccount_Ext.acc_AddressType_Dropdown.selectOptionByLabel(world.dataMap.get('AddressType'))
    }

    async createPersonalAccount() {
        await newAccount_Ext.company_Name.setValue(generateRandomStringFunction(5))
        await newAccount_Ext.acc_Search_btn.click()
        await newAccount_Ext.CreateNewAccount_Btn.click()
        //selecting Person
        await newAccount_Ext.newAccountButtonNewAccount_Person.click()
        t.ctx.FirstName = generateRandomStringFunction(5)
        t.ctx.LastName = generateRandomStringFunction(5)
        await newAccount_Ext.CreateAccount_FirstName.setValue(t.ctx.FirstName)
        await newAccount_Ext.CreateAccount_LastName.setValue(t.ctx.LastName)
        await newAccount_Ext.acc_State_Dropdown.selectOptionByLabel(world.dataMap.get('State'))
        await newAccount_Ext.acc_zipcode_TxtBox.setValue(world.dataMap.get('ZIPCode'))
        await newAccount_Ext.acc_AddressLine1_TxtBox.setValue(world.dataMap.get('Address1'))
        await newAccount_Ext.city.setValue(world.dataMap.get('City'));
        await newAccount_Ext.CreateAccount_AddressType.click();
        await newAccount_Ext.acc_AddressType_Dropdown.selectOptionByLabel(world.dataMap.get('AddressType'))
    }

    async organizationSearchPopup() {
        console.log("On Organizations Screen")
        await organizationBranchSearchPopup.organizationBranchSearchPopupOrganizationBranchSearchScreenOrganizationBranchSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
        await organizationSearchPopup_Ext.organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVGlobalContactNameInputSetName.setValue(world.dataMap.get('Organization'))
        await organizationSearchPopup_Ext.organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click()
        await organizationSearchPopup_Ext.organizationSearchPopup_FirstRecord.click()
    }

    async createAccountNumber() {
        await newAccount_Ext.accUpdate_Btn.click()
        console.log('On Account Summary screen')
        t.ctx.AccountNumber = await summary_Ext.accountDetailsDetailViewTile_DVAccountNumber.component.innerText
        console.log("The newly created Account Number is: " + t.ctx.AccountNumber)
        await t.wait(2000)
    }
}