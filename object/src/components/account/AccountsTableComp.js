import React from 'react';
import './AccountsApp.css';

class AccountsTable extends React.Component {
  constructor (props) {
		super(props);
	}

  render() {
		const TableHeader = () => { 
			return (
				<thead >
					<tr className="tableHeader">
						<th>Account ID</th>
						<th>Account Name</th>
						<th>Account Balance</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
			);
		}

		const TableBody = () => { 
			const rows = this.props.accData.map((row) => {
				return (
					<tr className="accountTable" key={row.accId} >
						<td>{row.accId}</td>
						<td>{row.accName}</td>
						<td>{row.accBalance}</td>
						<td><button type="button" id={"rem" + row.accId}  onClick={this.props.remAccountClick}>Delete</button></td>
						<td><button type="button" id={"edit" + row.accId} onClick={this.props.editAccountClick}>Edit</button></td>
					</tr>
				);
			})
			return <tbody>{rows}</tbody>;
	  }

		// console.log("list passed to table", this.props.accData);
			 
    return (
      <table className="table table-striped">
        <TableHeader />
        <TableBody accData={this.props.accData} remAccountClick={this.props.remAccountClick}  editAccountClick={this.props.editAccountClick}/>
      </table>
    );
  }
}

export default AccountsTable;