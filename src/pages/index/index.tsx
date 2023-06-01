import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { Price } from 'tard'
import '../../../node_modules/tard/dist/styles/index.less'
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.css'
import Toasts from '../../../src/toast'

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <AtButton type='primary'>I need Taro UI</AtButton>
        <Text>Taro UI 支持 Vue 了吗？ </Text>
        <AtButton type='primary' circle={true}>支持</AtButton>
        <Text>共建？</Text>
        <AtButton type='secondary' circle={true}>来</AtButton>
        <Price price="88.00" originPrice="188.00" fixedNum={2} />
        <Toasts />
      </View>
    )
  }
}
