import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Header, FixedLayout, PanelHeaderBack } from '@vkontakte/vkui';

import Table2 from "../tables/Table2"
import Table from "../tables/Table.css"

var week16 = [
{id: 10, name: 'Петров' },
{id: 11, name: 'Якубовский' },
{id: 12, name: 'George Michael'}]


const MyGroup = props => (
    <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>Моя группа</PanelHeader>
			<div className="App" >
				<Div><Table2 data={week16}/></Div>
			</div>
    </Panel>
	
);
export default MyGroup;