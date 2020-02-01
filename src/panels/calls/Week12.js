import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Header, FixedLayout, PanelHeaderBack } from '@vkontakte/vkui';

import Table1 from "../../tables/Table"

var week12 = [
{id: 7, name: 'Петров', value: '12'},
{id: 8, name: 'Якубовский', value: '111'},
{id: 9, name: 'George Michael', value: '55'}]


const Week12 = props => (
    <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="calc" />}>12 неделя</PanelHeader>
			<div className="App" >
				<Div><Table1 data={week12}/></Div>
			</div>
    </Panel>
	
);
export default Week12;