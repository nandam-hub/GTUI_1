import { PcfComponent, PcfButton } from '@gtui/gt-ui-framework';
import {AccountMenuActions} from '../../../../../../pages/gw/generated/policysolutions/pages/navigation/menuActions/AccountMenuActions'

export class AccountMenuActions_Ext extends AccountMenuActions{
    newActivity = PcfButton('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewActivity');
    interviewOption = PcfButton('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category > div.gw-action--inner.gw-hasDivider > div.gw-label');
    meetWithInsuredOption = PcfButton('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category-0-item > div > div.gw-label');
}