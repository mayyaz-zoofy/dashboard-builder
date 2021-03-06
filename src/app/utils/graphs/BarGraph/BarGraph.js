import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class BarGraph extends PureComponent {

	render() {
		return (
			<div style={{
				position: 'relative',
				height: 300
			}} >
				<div style={{
					position: 'absolute',
					top: '0',
					left: '0',
					width: '100%',
					height: '100%'
				}}>
					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							width={500}
							height={300}
							data={this.props.data}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="pv" fill="#8884d8" />
							<Bar dataKey="uv" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</div>
		);
	}
}
