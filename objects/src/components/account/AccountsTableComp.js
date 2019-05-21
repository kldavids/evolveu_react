import React from 'react';
import './AccountsApp.css';

const TableHeader = () => { 
   return (
       <thead>
           <tr>
               <th>Account ID</th>
               <th>Account Name</th>
               <th>Account Balance</th>
               {/* <th>Remove/Edit</th> */}
           </tr>
       </thead>
   );
}

const TableBody = (props) => { 
   const rows = props.accData.map((row, index) => {
       return (
           <tr key={index}>
               <td>{row.accId}</td>
               <td>{row.accName}</td>
               <td>{row.accBalance}</td>
               <td><button onClick={() => props.removeAccount(index)}>Delete</button></td>
               <td><button onClick={() => props.editAccount(index)}>Edit</button></td>
           </tr>
       );
   })
   return <tbody>{rows}</tbody>;
}

class AccountsTable extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
       const { accData, removeAccount, editAccount } = this.props;
       {console.log(accData)}
       return (
          
           <table className="table table-striped">
               <TableHeader />
               <TableBody accData={accData} removeAccount={removeAccount}  editAccount={editAccount}/>
           </table>
       );
   }
}

export default AccountsTable;