import React from 'react';

import { View, Epic, Tabbar, TabbarItem, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import connect from '@vkontakte/vkui-connect-promise';

import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline'
import Icon28Users from '@vkontakte/icons/dist/28/users'
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline'

import Home from './panels/Home'
import Info from './panels/Info'
import Calc from './panels/Calc'
import Add from './panels/Add'
import MyGroup from './panels/MyGroup'
import PassGroup from './panels/PassGroup'

import All from './panels/calls/All'
import Week4 from './panels/calls/Week4'
import Week8 from './panels/calls/Week8'
import Week12 from './panels/calls/Week12'
import Week16 from './panels/calls/Week16'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
			activePanel: "home",
			
			}
    }
	
		
	go = e => {
		this.setState({activePanel: e.currentTarget.dataset.to})
		this.setState({activeTab: e.currentTarget.dataset.to})
	}
	
    render() {
        return (
            <View activePanel={this.state.activePanel} >
					<Info id="info" go={this.go} />
					<Home id="home" go={this.go} />
					<Calc id="calc" go={this.go} />
					<Add id="add" go={this.go} />
					<MyGroup id="mygroup" go={this.go} />
					<PassGroup id="passgroup" go={this.go} />
					
					<All id="all" go={this.go} />
					<Week4 id="week4" go={this.go} />
					<Week8 id="week8" go={this.go} />
					<Week12 id="week12" go={this.go} />
					<Week16 id="week16" go={this.go} />
			</View>
        )
    }
}
export default App;