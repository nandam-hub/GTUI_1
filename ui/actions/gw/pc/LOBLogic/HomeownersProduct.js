
import { checkBox, textInput, selectInput, loadPcfCategory } from './ActionHelper'
import world from "../../../../util/gw/world"
import { t } from 'testcafe'

export class HomeownersProduct {

    //To load the coverage data from json input and to perform action on provided coverage
    async coverageFilter() {
        const pcfType = await loadPcfCategory()
        if (!(world.coverageDataMap === undefined) && Array.from(world.coverageDataMap.keys()).length > 0) {
            t.ctx.module = 'Coverage'
            console.log(`The current module is ${t.ctx.module}`)

            for (const [key, value] of world.coverageDataMap) {
                if (pcfType.selectInput.includes(key)) {
                    console.log(`${key} is present`)
                    await selectInput(key)
                }
                else if (pcfType.textInput.includes(key)) {
                    console.log(`${key} is present`)
                    await textInput(key)
                }
                else if (pcfType.checkBox.includes(key)) {
                    console.log(`${key} is present`)
                    await checkBox(key)
                }
            }
        }
        else {
            console.log(`Coverage Data is ${world.coverageDataMap}`)
            throw new Error('world.coverageDataMap is undefined or empty')
        }
    }
}
