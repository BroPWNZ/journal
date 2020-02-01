import React from 'react';
import { Button, Div, FormLayout, Input, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

const Add = props => (
    <Panel id={props.id}>
        <PanelHeader 
        left={<PanelHeaderBack onClick={props.go} data-to="home" />}
      >Добавить одногруппника</PanelHeader>
      <Div>
        <p>Добавьте здесь одногруппника, чтобы ему можно было проставлять пропуски.</p>
      </Div>
      <FormLayout>
        <Input 
		  id="nameGroup"
          type="text" 
          defaultValue="" 
          placeholder="Введите фамилию одногруппника"
          className="active" 
        />
        <Button size="xl" level="secondary" onClick={props.go} data-to="home" >Добавить</Button>
      </FormLayout>
    </Panel>
);
export default Add;