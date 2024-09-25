import { t, Selector } from "testcafe"
import world, { World } from "../../../util/gw/world.js"
import { PrintOptionPopup } from "../../../pages/gw/generated/billingsolutions/pages/popup/Print/PrintOptionPopup";
import { NavigationScenario } from "./NavigationScenario.js";

const printOptionPopup = new PrintOptionPopup();
const navigationScenario = new NavigationScenario();

export class PrintExportScenario {
    async downloadExposureDocument() {
        await navigationScenario.navigateToExposureScreen();
        await navigationScenario.navigateToPrintExportScreen();
        await this.selectPrintExportOptions(world.dataMap.get("Choice"));
        await printOptionPopup.printOptionPopupScreenOk.click();
    }

    async selectPrintExportOptions(Radio) {
        await t.click(`#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-${Radio}_Choice_radio`)
        if ((world.dataMap.get("Choice") == "CustomExportChoice")) {
            await t.click(`#PrintOptionPopup-PrintOptionPopupScreen-PrintOptionDV-CustomCsvColumnsLV-${world.dataMap.get("option")}-Select_checkboxDiv`);
        }
    }
}
