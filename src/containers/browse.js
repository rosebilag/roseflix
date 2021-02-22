import React, { useState, useEffect } from 'react';
import { Loading } from '../components';
import { useUser } from '../context/UserContext';
import HeaderContainer from './header';
import HeroContainer from './hero';
import ProfilesContainer from './profiles';

function BrowseContainer() {
	const { userDetails } = useUser();
	const [ profile, setProfile ] = useState();
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			setLoading(true);
			console.log(profile);
			setTimeout(() => {
				setLoading(false);
			}, 1000);
			return () => {
				clearTimeout();
			};
		},
		[ profile ]
	);
	return profile ? (
		<React.Fragment>
			{loading ? <Loading src={profile.avatar} /> : <Loading.ReleaseBody />}
			<HeaderContainer profile={profile} setProfile={setProfile} />
			<HeroContainer profile={profile} />
		</React.Fragment>
	) : (
		<ProfilesContainer userDetails={userDetails} setProfile={setProfile} />
	);
}

export default BrowseContainer;
