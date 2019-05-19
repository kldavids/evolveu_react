import React, { Component } from 'react';
import './AccountsApp.css';

class AccountsTable extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         testList: [
            { accId: 1, accName: 'KD Saving', accBalance: 250 },
            { accId: 2, accName: 'KD Checking', accBalance: 100 },
            { accId: 3, accName: 'RD Checking', accBalance: 160 },
            { accId: 4, accName: 'CD Saving', accBalance: 50 }
         ]
      }
   }

   renderTableData() {
      return this.state.testList.map((testacc, index) => {
         const { accId, accName, accBalance } = testacc 
         return (
            <tr key={accId}>
               <td>{accId}</td>
               <td>{accName}</td>
               <td>{accBalance}</td>
            </tr>
         )
      })
   }

   renderTableHeader() {
      let header = Object.keys(this.state.testList[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   render() { 
      return (
         <div>
            <hr />
            <table id='testList'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default AccountsTable;