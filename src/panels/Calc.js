import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Epic, Tabbar, TabbarItem, FixedLayout, HorizontalScroll, Header } from '@vkontakte/vkui';

import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline'
import Icon28Users from '@vkontakte/icons/dist/28/users'
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline'

import Table1 from "../tables/Table"



const Calc = props => (
    <Panel id={props.id}>
        <PanelHeader>Посещение</PanelHeader>
        <FixedLayout vertical="top">
			<Div>
				<Button mode="secondary" size="xl" onClick={props.go} data-to="all">
					Всего
				</Button>
			</Div>
			<Group header={<Header mode="secondary">По неделям</Header>}>
			<Div>
				<Button mode="secondary" size="xl" onClick={props.go} data-to="week4">
					4 неделя
				</Button>
			</Div>
			<Div>
				<Button mode="secondary" size="xl" onClick={props.go} data-to="week8">
					8 неделя
				</Button>
			</Div>
			<Div>
				<Button mode="secondary" size="xl" onClick={props.go} data-to="week12">
					12 неделя
				</Button>
			</Div>
			<Div>
				<Button mode="secondary" size="xl" onClick={props.go} data-to="week16">
					16 неделя
				</Button>
			</Div>
			</Group>
		</FixedLayout>		
				
		<Epic>
			<Tabbar>
				<TabbarItem onClick={props.go} data-to="calc">
				<Icon28ArticleOutline fill={"#4682B4"} />
				</TabbarItem>
				<TabbarItem onClick={props.go} data-to="home">
				<Icon28Users/>
				</TabbarItem>
				<TabbarItem onClick={props.go} data-to="info">
				<Icon28HelpOutline/>
				</TabbarItem>
			</Tabbar>
		</Epic>
    </Panel>
);
export default Calc;