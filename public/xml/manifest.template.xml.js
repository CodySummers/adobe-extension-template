module.exports = (props) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<!--Copyright 2018 Adobe. All rights reserved.This file is licensed to you under the Apache License, Version 2.0 (the "License");you may not use this file except in compliance with the License. You may obtain a copyof the License at http://www.apache.org/licenses/LICENSE-2.0Unless required by applicable law or agreed to in writing, software distributed underthe License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONSOF ANY KIND, either express or implied. See the License for the specific languagegoverning permissions and limitations under the License. -->
<ExtensionManifest xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   ExtensionBundleId="${props.extensionBundleId}"
                   ExtensionBundleVersion="${props.extensionBundleVersion}"
                   ExtensionBundleName="${props.extensionBundleName}"
                   Version="${props.cepVersion}">
  <ExtensionList>
  ${props.panels.map(panel => {
    return `<Extension Id="${panel.panelId}" Version="${props.extensionBundleVersion}" />`
  }).join('\n')}
  </ExtensionList>
  <ExecutionEnvironment>
    <HostList>
     ${props.hosts.map(host => {
    return `<Host Name="${host}" Version="[0.0,99.9]" />`
  }).join('\n')}
    </HostList>
    <LocaleList>
      <Locale Code="All" />
    </LocaleList>
    <RequiredRuntimeList>
      <RequiredRuntime Name="CSXS" Version="${props.cepVersion}" />
    </RequiredRuntimeList>
  </ExecutionEnvironment>
  <DispatchInfoList>
  ${props.panels.map(panel => {
    return `<Extension Id="${panel.panelId}">
      <DispatchInfo>
        <Resources>
          <MainPath>${panel.htmlEntry}</MainPath>
          <ScriptPath>${panel.scriptEntry}</ScriptPath>
          <CEFCommandLine>
              <Parameter>--enable-nodejs</Parameter>
              <Parameter>--allow-file-access</Parameter>
              <Parameter>--allow-file-access-from-files</Parameter>
          </CEFCommandLine>
        </Resources>
        <Lifecycle>
          <AutoVisible>${panel.autoVisible}</AutoVisible>
        </Lifecycle>
        <UI>
          <Type>${panel.panelType}</Type>
          ${panel.panelName ? `<Menu>${panel.panelName}</Menu>` : ''}
          <Geometry>
            <Size>
              <Width>${panel.width}</Width>
              <Height>${panel.height}</Height>
            </Size>
            <MinSize>
              <Width>${panel.minWidth}</Width>
              <Height>${panel.minHeight}</Height>
            </MinSize>
            <MaxSize>
              <Width>${panel.maxWidth}</Width>
              <Height>${panel.maxHeight}</Height>
            </MaxSize>
          </Geometry>
          <Icons>
              <Icon Type="Normal">./icons/favicon.ico</Icon>
              <Icon Type="RollOver">./icons/favicon.ico</Icon>
              <Icon Type="DarkNormal">./icons/favicon.ico</Icon>
              <Icon Type="DarkRollOver">./icons/favicon.ico</Icon>
          </Icons>
        </UI>
      </DispatchInfo>
    </Extension>`
  }).join('\n')}
  </DispatchInfoList>
</ExtensionManifest>`
