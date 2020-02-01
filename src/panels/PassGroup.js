import React from 'react';
import { Panel, PanelHeader, Group, Div, Button, Header, PanelHeaderBack, HorizontalScroll } from '@vkontakte/vkui';

import Table3 from "../tables/Table3"

var all = [
{id: 1, name: 'Петров', value: '20'},
{id: 2, name: 'Якубовский', value: '640'},
{id: 3, name: 'George Michael', value: '110'},
{id: 4, name: 'Петров', value: '20'},
{id: 5, name: 'Якубовский', value: '640'},
{id: 6, name: 'George Michael', value: '110'},
{id: 7, name: 'Петров', value: '20'},
{id: 8, name: 'Якубовский', value: '640'},
{id: 9, name: 'George Michael', value: '110'},
{id: 10, name: 'Петров', value: '20'},
{id: 11, name: 'Якубовский', value: '640'},
{id: 12, name: 'George Michael', value: '110'},
{id: 13, name: 'Петров', value: '20'},
{id: 14, name: 'Якубовский', value: '640'},
{id: 15, name: 'George Michael', value: '110'},
{id: 16, name: 'Петров', value: '20'},
{id: 17, name: 'Якубовский', value: '640'},
{id: 18, name: 'George Michael', value: '110'},
{id: 19, name: 'Петров', value: '20'},
{id: 20, name: 'Якубовский', value: '640'},
{id: 21, name: 'George Michael', value: '110'},
{id: 22, name: 'Петров', value: '20'},
{id: 23, name: 'Якубовский', value: '640'},
{id: 24, name: 'George Michael', value: '110'},
{id: 25, name: 'Петров', value: '20'},
{id: 26, name: 'Якубовский', value: '640'},
{id: 27, name: 'George Michael', value: '110'},
{id: 28, name: 'Петров', value: '20'},
{id: 29, name: 'Якубовский', value: '640'},
{id: 30, name: 'George Michael', value: '110'}
]


const PassGroup = props => (
    <Panel id={props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>Всего</PanelHeader>
			<HorizontalScroll><div className="App" >
				<Div><Table3 data={all}/></Div>
			</div></HorizontalScroll>
    </Panel>
	
);
export default PassGroup;