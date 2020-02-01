import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Header, FixedLayout, PanelHeaderBack } from '@vkontakte/vkui';

import Table1 from "../../tables/Table"

var week16 = [
{id: 10, name: 'Петров', value: '15'},
{id: 11, name: 'Якубовский', value: '300'},
{id: 12, name: 'George Michael', value: '80'}]


const Week16 = props => (
    <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="calc" />}>16 неделя</PanelHeader>
			<div className="App" >
				<Div><Table1 data={week16}/></Div>
			</div>
    </Panel>
	
);
export default Week16;