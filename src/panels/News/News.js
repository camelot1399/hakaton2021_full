import React, {Component} from 'react'
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  Panel,
  PanelHeader,
  Group,
  Tabs,
  TabsItem, SizeType
} from '@vkontakte/vkui';

const News = ({id}) => (
  <Panel id={id}>
    <PanelHeader>News</PanelHeader>
  </Panel>
)

export default News
