import { evalExtendscript } from 'cep-interface'
import '../../public/assets/css/styles.css'

const body = document.querySelector('body')

const typescriptH2 = document.createElement('h2')
typescriptH2.textContent = 'Hello World, TypeScript'
body?.appendChild(typescriptH2)

const adobeScriptH2 = document.createElement('h2')
evalExtendscript('$.global.template.testFunction()').then((repsonse: string) => {
    adobeScriptH2.textContent = repsonse
    body?.appendChild(adobeScriptH2)
})
