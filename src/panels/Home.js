import React from 'react';

import { Panel, PanelHeader, Header, Group, Cell, Avatar } from '@vkontakte/vkui';

import './Home.css';

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
	</Panel>
);


export default Home;
