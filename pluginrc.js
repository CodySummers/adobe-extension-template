const path = require('path')
const root = __dirname
const srcFolder = path.join(root, "src")
const destFolder = path.join(root, "dist")
const certPath = path.join(destFolder, "cert.p12")

module.exports = {
    extensionBundleId: 'com.extensionTemplate',
    extensionBundleName: 'extensionTemplate',
    extensionBundleVersion: '1.0.0',
    hosts: ['AEFT'],
    cepVersion: '10.0',
    panels: [{
        panelId: 'com.main',
        panelType: 'Panel',
        panelName: 'Extension Template',
        autoVisible: true,
        width: '290',
        height: '480',
        minWidth: '160',
        minHeight: '100',
        maxWidth: '1080',
        maxHeight: '1115',
        htmlEntry: './client-dist/index.html',
        scriptEntry: './ae-dist/index.jsx'
    }
],
    root: root,
    sourceFolder: srcFolder,
    destinationFolder: destFolder,
    certificate: {
        customCert: {
            path: '',
            password: ''
        },
        selfSign: {
            country: '',
            province: '',
            org: '',
            name: '',
            password: '',
            locality: '',
            orgUnit: '',
            email: '',
            output: certPath
        }

    }

}