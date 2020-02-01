import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Epic, Tabbar, TabbarItem, Header, FixedLayout, Link } from '@vkontakte/vkui';

import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline'
import Icon28Users from '@vkontakte/icons/dist/28/users'
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline'


const Home = props => (
    <Panel id={props.id}>
        <PanelHeader>Главная</PanelHeader>
		<FixedLayout vertical="top">
		<Group header={<Header mode="secondary">Группа</Header>}>
			<Div>
				<Button level="secondary" size="xl" onClick={props.go} data-to="mygroup">
					Список группы
				</Button> 
			</Div>
			<Div>
				<Button level="secondary" size="xl" onClick={props.go} data-to="passgroup">
					Редактировать группу
				</Button>
			</Div>
			<Div>
				<Button level="secondary" size="xl" onClick={props.go} data-to="passgroup">
					Поставить пропуски
				</Button>
			</Div>
		</Group>
		
		<Group header={<Header mode="secondary">Полезная информация</Header>}>
			<Div>
				<Button level="secondary" size="xl" href="https://vk.com/sovet_starost"  >
					Группа Совета Старост
				</Button>
			</Div>
		</Group>
		</FixedLayout>
		
		<Epic>
			<Tabbar>
				<TabbarItem onClick={props.go} data-to="calc">
				<Icon28ArticleOutline />
				</TabbarItem>
				<TabbarItem onClick={props.go} data-to="home">
				<Icon28Users fill={"#4682B4"}/>
				</TabbarItem>
				<TabbarItem onClick={props.go} data-to="info">
				<Icon28HelpOutline/>
				</TabbarItem>
			</Tabbar>
		</Epic>
    </Panel>
);
export default Home;