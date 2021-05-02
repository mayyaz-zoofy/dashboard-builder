import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
	table: {
		width: '100%'
	}
});

const EnhancedTableToolbar = props => {
	return (
		<Toolbar>
			{props.icon ? <Icon>{props.icon}</Icon> : ''}
			<Typography variant="h6" id="tableTitle" component="div">
				{props.title}
			</Typography>
		</Toolbar>
	);
};

export default function CustomTable(props) {
	const classes = useStyles();
	const [allSelect, setAllSelect] = useState(false);
	const [selectedRows, setSelectedRows] = useState([]);
	const renderTitle = () => {
		const titleHeaderData = [];
		if (props.title) {
			titleHeaderData.push(
				<div>
					<EnhancedTableToolbar title={props.title} icon={props.icon} />
				</div>
			);
		}
		if (props.customToolbarSelect) {
			const disabled = !selectedRows.length;
			titleHeaderData.push(
				<div style={{ width: '20rem', margin: '1rem' }}>
					{props.customToolbarSelect(selectedRows, props.data, setSelectedRows, disabled)}
				</div>
			);
		}
		return <div className="flex justify-between">{titleHeaderData}</div>;
	};
	const handleAllSelect = () => {
		if (!allSelect) setSelectedRows([...Array(props.data.length).keys()]);
		else setSelectedRows([]);
		setAllSelect(!allSelect);
	};
	const renderTableHeader = () => {
		if (props.customToolbarSelect) {
			const headers = props.headers.map(header => {
				return <TableCell key={header.key}>{header.label}</TableCell>;
			});
			headers.unshift(
				<TableCell key={props.headers.length}>
					<Checkbox checked={allSelect} handleChange={handleAllSelect} />
				</TableCell>
			);
			return headers;
		}
		return props.headers.map(header => {
			return <TableCell key={header.key}>{header.label}</TableCell>;
		});
	};

	const handleSelctChange = (e, index) => {
		let updatedSelectedRows = [];
		if (selectedRows.includes(index)) updatedSelectedRows = selectedRows.filter(item => item !== index);
		else updatedSelectedRows = [...selectedRows, index];
		setSelectedRows(updatedSelectedRows);
	};
	const renderTableRows = () => {
		return props.data.map((row, index) => <TableRow key={index}>{renderTableRow(index, row)}</TableRow>);
	};

	const renderTableRow = (rowIndex, row) => {
		if (props.customToolbarSelect) {
			const tempRow = props.headers.map((header, index) => <TableCell key={index}>{row[header.key]}</TableCell>);
			const isSelected = selectedRows.includes(rowIndex);
			tempRow.unshift(
				<TableCell key={tempRow.length}>
					<Checkbox checked={isSelected} handleChange={e => handleSelctChange(e, rowIndex)} />
				</TableCell>
			);
			return tempRow;
		}
		return props.headers.map((header, index) => <TableCell key={index}>{row[header.key]}</TableCell>);
	};

	if (props.data.length)
		return (
			<div className="w-full">
				{renderTitle()}
				<TableContainer style={props.style ? props.style.container : null}>
					<Table stickyHeader={props.stickyHeader} className={classes.table} aria-label="caption table">
						{props.caption ? <caption>{props.caption}</caption> : null}
						<TableHead>
							<TableRow>{renderTableHeader()}</TableRow>
						</TableHead>
						<TableBody style={{ maxHeight: props.innerHeight ? props.innerHeight : 'unset' }}>
							{renderTableRows()}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	return '';
}
