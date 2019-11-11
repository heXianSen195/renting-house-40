import React, { Component } from 'react'

import Styles from './index.module.scss'

// // 导入react-router-dom相关的内容
import {Route,Redirect } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
// 导入样式
import Home from '../Home'
import HouseList from '../HouseList'
import Info from '../Info'
import My from '../My'

export default class index extends Component {
  constructor() {
    super()
    // 默认选中home首页
    this.state = {
      selectedTab: '/layout/home'
    }
  }

  // tabs数组
  TABS = [
    {
      title: '首页',
      icon: 'icon-index',
      path: '/layout/home'
    },
    {
      title: '找房',
      icon: 'icon-findHouse',
      path: '/layout/houselist'
    },
    {
      title: '资讯',
      icon: 'icon-info',
      path: '/layout/info'
    },
    {
      title: '我的',
      icon: 'icon-my',
      path: '/layout/my'
    }
  ]

    // 内容的改变， 底部的TabBar选中的状态同步进行
  componentDidUpdate (prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname){
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }
  // 渲染底部tabBar栏
    LayoutTabBar = () => {
      return (
        <TabBar tintColor="#21B97A" noRenderContent>
          {// 遍历数组，渲染数据
            this.TABS.map(item=> {
              return (
                  <TabBar.Item
                  // 名字
                  title={item.title}
                    key={item.path}
                    // 图标
                    icon={<i className={`iconfont ${item.icon}`} />}
                    selectedIcon={<i className={`iconfont ${item.icon}`} />}
                    selected={this.state.selectedTab === item.path}
                    onPress={() => {
                      // 切换路由
                      if(this.state.selectedTab === item.path) return 

                      this.props.history.push(item.path)
                    }}
                  ></TabBar.Item>
              )
            })}
        </TabBar>
      )
    }

  render() {
    return (
      <div className={Styles.layout}>
          {/* 跳转路由 */}
          <Route path="/layout/home" component={Home} />
          <Route path="/layout/houseList" component={HouseList} />
          <Route path="/layout/info" component={Info} />
          <Route path="/layout/my" component={My} />
          <Redirect exact from="/layout/home" to="/layout/home" />
          {/* TabBar底部栏 */}
          <div className={Styles.tabbar}>{this.LayoutTabBar()}</div>
      </div>
    )
  }
}
