import { PcfButton, PcfCheckBox, PcfComponent, PcfSelectInput } from "@gtui/gt-ui-framework";

export class AddActivityPage_New {
    actionsMenu = PcfButton('#AccountFile-AccountFileMenuActions > div.gw-action--inner');
    newActivity = PcfButton('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewActivity > div.gw-action--inner.gw-hasDivider');
    interviewOption = PcfButton('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category > div.gw-action--inner.gw-hasDivider > div.gw-label');
    meetwithInsuredOption = PcfButton('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewActivity-NewActivityMenuItemSet-0-NewActivityMenuItemSet_Category-0-item > div > div.gw-label');
    activitiesPanel = PcfButton('#gw-south-panel-toggleMinMax_float');
    dragPanel = PcfComponent('#gw-south-panel > div.gw-SouthPanelWidget--drag');
    securityLevel = PcfSelectInput('#NewActivityWorksheet-NewActivityScreen-ActivityDetailNoteDV-SecurityLevel > div > div > select');
    okButton = PcfButton('#NewActivityWorksheet-NewActivityScreen-NewActivityScreen_UpdateButton > div');
    activitiesAdded = PcfComponent('#AccountFile_Summary-AccountSummaryDashboard-CurrentActivitiesAccountListViewTile-CurrentActivitiesAccountListViewTile_LV-0-Subject_button');
    radioOptionMandatory = PcfComponent('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Mandatory span')
    radioOptionRecurring= PcfComponent('#NewActivityWorksheet-NewActivityScreen-NewActivityDV-Mandatory span')
}