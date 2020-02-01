import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Epic, Tabbar, TabbarItem, FixedLayout, Avatar, Header, ListItem } from '@vkontakte/vkui'; 

import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline'
import Icon28Users from '@vkontakte/icons/dist/28/users'
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline'


const Info = ({ id, go, fetchedUser }) => (
    <Panel id={id}>
        <PanelHeader>Информация</PanelHeader>
		<FixedLayout vertical="top">
		<Group header={<Header mode="secondary">О приложении</Header>}>
			<Div>
			Аня Дорохина, напиши сюда какой-нибудь красивый текст плиз
			</Div>
		</Group>
			{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Connect</Header>}>
			<ListItem
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</ListItem>
		</Group>}
		</FixedLayout>
		<Epic>
			<Tabbar>
				<TabbarItem onClick={go} data-to="calc">
				<Icon28ArticleOutline/>
				</TabbarItem>
				
				<TabbarItem onClick={go} data-to="home">
				<Icon28Users/>
				</TabbarItem>
				
				<TabbarItem onClick={go} data-to="info">
				<Icon28HelpOutline fill={"#4682B4"} />
				</TabbarItem>
			</Tabbar>
		</Epic>
    </Panel>
	
);
export default Info;