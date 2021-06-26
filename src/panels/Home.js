import React from 'react';
import {Layout} from '../components/layout/layout';

import { Panel, PanelHeader, Header, Group, Cell, Avatar } from '@vkontakte/vkui';

import './Home.css';
import {Tournaments} from '../components';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Киберспорт</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
		</Group>
		<Layout tournaments={<Tournaments/>}/>
	</Panel>
);


export default Home;
