import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function Error404Page() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center p-16">
			<div className="max-w-512 text-center">
				<Typography variant="h1" color="inherit" className="font-medium mb-16">
					404
				</Typography>

				<Typography variant="h5" color="textSecondary" className="mb-16">
					Sorry but we could not find the page you are looking for
				</Typography>

				<Link className="font-medium" to="/">
					Go back to dashboard
				</Link>
			</div>
		</div>
	);
}

export default Error404Page;
