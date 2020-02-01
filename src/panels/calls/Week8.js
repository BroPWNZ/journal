import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Header, FixedLayout, PanelHeaderBack } from '@vkontakte/vkui';

import Table1 from "../../tables/Table"

var week8 = [
{id: 4, name: 'Петров', value: '9'},
{id: 5, name: 'Якубовский', value: '50'},
{id: 6, name: 'George Michael', value: '20'}]


const Week8 = props => (
    <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="calc" />}>8 неделя</PanelHeader>
			<div className="App" >
				<Div><Table1 data={week8}/></Div>
			</div>
    </Panel>
	
);
export default Week8;