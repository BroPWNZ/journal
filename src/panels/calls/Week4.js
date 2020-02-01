import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Header, FixedLayout, PanelHeaderBack } from '@vkontakte/vkui';

import Table1 from "../../tables/Table"


var week4 = [
{id: 1, name: 'Петров', value: '2'},
{id: 2, name: 'Якубовский', value: '5'},
{id: 3, name: 'George Michael', value: '4'}]
  

const Week4 = props => (
    <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="calc" />}>4 неделя</PanelHeader>
			<div className="App" >
				<Div><Table1 data={week4}/></Div>
			</div>
    </Panel>
	
);
export default Week4;