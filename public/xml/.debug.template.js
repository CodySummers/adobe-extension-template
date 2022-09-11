module.exports = (props) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<ExtensionList>
  ${props.panels.map((prop, index) => {
    return `<Extension Id="${prop.panelId}">
  <HostList>
    <Host Name="PHXS" Port="3${index}01" />
    <Host Name="PHSP" Port="3${index}02" />
    <Host Name="IDSN" Port="3${index}03" />
    <Host Name="AICY" Port="3${index}04" />
    <Host Name="ILST" Port="3${index}05" />
    <Host Name="PPRO" Port="3${index}06" />
    <Host Name="AEFT" Port="3${index}07" />
    <Host Name="PRLD" Port="3${index}08" />
    <Host Name="FLPR" Port="3${index}09" />
    <Host Name="DRWV" Port="3${index}10" />
  </HostList>
  </Extension>`})}
</ExtensionList>`
