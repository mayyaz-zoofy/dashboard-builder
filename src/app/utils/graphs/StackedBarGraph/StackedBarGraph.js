import React from 'react';

import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Label,
	Text
} from 'recharts';

import _ from 'lodash';
import { Typography } from '@material-ui/core';

const CustomTooltip = ({ active, payload, label }) => {
	if ((active, payload)) {
		if (payload[0]) {
			return (
				<div className="custom-tooltip">
					<p className="">{`${label} : ${payload[0].value}`}</p>
				</div>
			);
		}
	}
	return null;
};

const CustomizedXAxisTick = props => {
	const { x, y, payload } = props;
	return (
		<Text x={x} y={y} angle={-45} textAnchor="end" verticalAnchor="end">
			{_.truncate(payload.value, { length: 15 })}
		</Text>
	);
};

export default function StackedBarGraph(props) {
	const handleBarClick = (data, index) => {
		if (props.handleBarClick) {
			props.handleBarClick(data, index);
		}
	};

	const formatData = () => {
		const data = _.cloneDeep(props.chartData);
		let formattedData = [];
		formattedData = data.map((item, index) => {
			const formattedItem = {};
			formattedItem.name = item.name;
			for (let i = 0; i < item.yValues.length; i += 1) {
				const yitem = item.yValues[i];
				formattedItem[yitem.x] = yitem.y;
			}
			return formattedItem;
		});
		return formattedData;
	};

	const renderBars = () => {
		return _.map(props.categories, (color, category) => {
			return (
				<Bar
					dataKey={category}
					stackId="a"
					fill={color}
					onClick={handleBarClick}
					style={{ cursor: 'pointer' }}
				/>
			);
		});
	};

	return (
		<div>
			<div className="report-internal">
				<ResponsiveContainer width="100%" height={420}>
					<BarChart
						data={formatData()}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 70
						}}
					>
						<CartesianGrid vertical={false} strokeDasharray="3 3" />
						<XAxis dataKey="name" interval={0} tick={<CustomizedXAxisTick />} />
						<YAxis label={{ value: props.yAxisLabel, angle: -90, position: 'center' }} />
						<Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ right: 15 }} />
						<Tooltip cursor={false} content={<CustomTooltip />} />
						{renderBars()}
					</BarChart>
				</ResponsiveContainer>
				<Typography className="text-center recharts-text recharts-label -mx-16 mb-10 mt-6">
					{props.xAxisLabel}
				</Typography>
			</div>
		</div>
	);
}
