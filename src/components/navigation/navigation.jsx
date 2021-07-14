import {SubnavigationBar, SubnavigationButton,} from '@vkontakte/vkui';
import React from 'react';
import './navigation.css';
import { Link, useParams } from 'react-router-dom';

export const Navigation = () => {
	const { params } = useParams();

	console.log(params)
	return (
				<SubnavigationBar>
					<Link to="/news">
						<SubnavigationButton selected={params === 'news'}>news</SubnavigationButton>
					</Link>
					<Link to="/chat">
						<SubnavigationButton selected={params === 'chat'}>chat</SubnavigationButton>
					</Link>
					<Link to="/matches">
						<SubnavigationButton selected={params === 'matches'}>matches</SubnavigationButton>
					</Link>
				</SubnavigationBar>
			)
};
