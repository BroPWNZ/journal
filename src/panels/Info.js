import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Epic, Tabbar, TabbarItem, FixedLayout, Avatar, Header } from '@vkontakte/vkui'; 

import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline'
import Icon28Users from '@vkontakte/icons/dist/28/users'
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline'


const Info = props => (
    <Panel id={props.id}>
        <PanelHeader>Информация</PanelHeader>
		<FixedLayout vertical="top">
		<Group header={<Header mode="secondary">О приложении</Header>}>
			<Div>
			Аня Дорохина, напиши сюда какой-нибудь красивый текст плиз
			</Div>
		</Group>
			
		</FixedLayout>
		<Epic>
			<Tabbar>
				<TabbarItem onClick={props.go} data-to="calc">
				<Icon28ArticleOutline/>
				</TabbarItem>
				
				<TabbarItem onClick={props.go} data-to="home">
				<Icon28Users/>
				</TabbarItem>
				
				<TabbarItem onClick={props.go} data-to="info">
				<Icon28HelpOutline fill={"#4682B4"} />
				</TabbarItem>
			</Tabbar>
		</Epic>
    </Panel>
	
);
export default Info;