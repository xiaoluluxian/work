/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiMain
 */

import * as React from 'react';
import * as Component from '../component/import';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';
import logo from "./logo";
import { ITask, IPage } from './interface';
import * as $ from 'jquery';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Redirect } from 'react-router-dom'
import * as ReactDOM from 'react-dom'



import Config from '../config/config';


export interface IProps {
    page: IPage;
    updatePage?: (page: IPage) => void;
    history: any;

}

export interface IState {
}




class PageGhotiMain extends React.Component<IProps, IState> {
    state = { 
        data: [],
        alluser:[],
    };
    public constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.logout = this.logout.bind(this);
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.setState = this.setState.bind(this);
        this.delTask = this.delTask.bind(this);
        this.register = this.register.bind(this);
        this.showSetTask = this.showSetTask.bind(this);

    }

    public componentDidMount() {
        $.ajax({
            url: 'https://rpntechserver.appspot.com/findAllUsers',
            
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                console.log(result);
                this.setState({alluser:result});
            }).bind(this),
        });
        if (localStorage.getItem('Authority') === '2') {
            $.ajax({
                url: 'https://rpntechserver.appspot.com/findAllTasks',
                //url: 'https://rpnserver.appspot.com/userProfile',
                //url: 'http://localhost:8080/login',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('Token'),
                },
                method: 'GET',
                datatype: "json",
                data: JSON.stringify({
                }),
                success: (function (result) {
                    console.log(result);
                    this.setState({ data: result });

                }).bind(this),
            });
        }
        else if (localStorage.getItem('Authority') === '1') {
            $.ajax({
                url: 'https://rpntechserver.appspot.com/userProfile',
                //url: 'https://rpnserver.appspot.com/userProfile',
                //url: 'http://localhost:8080/login',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('Token'),
                },
                method: 'GET',
                datatype: "json",
                data: JSON.stringify({
                }),
                success: (function (result) {
                    console.log(result);
                    this.setState({ data: result });

                }).bind(this),
            });
        }

    }

    public render() {

        return (<div className="main">
            <div className="title">
                <div style={{
                    display: 'flex',
                    height: '100px',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <img src={logo} alt="logo" style={{
                        width: '70px',
                        height: '50px',
                    }} />
                    <div style={{
                        flex: 1,
                        paddingLeft: '10px',
                        paddingTop: '20px',
                        display: 'inline',
                        fontSize: '20px',
                        color: 'darkblue',
                        fontWeight: 'bold',
                    }}>
                        Repair and Preservation Network, LLC
                </div>
                    <div style={{
                        marginTop: '20px',
                        marginRight: '20px',
                        textAlign: 'center',
                        width: '30%'

                    }}>
                        <input type="text" id="myInput" onKeyUp={this.search} placeholder="Search for Addr.." title="Search Task" />
                    </div>
                    <div style={{
                        marginTop: '20px',
                        marginRight: '10px',
                        textAlign: 'right',
                    }}>
                        <button className='link' title='Log out' onClick={this.logout}><ins>Log Out</ins></button>
                    </div>
                </div>
            </div>
            <div className="space">
                <div style={{
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: '10px',
                    width: '100%',
                }}>
                    Welcome to Repair and Preservation Network Company!
                    {this.date}
                </div>
            </div>
            <div className="menu">
                <div style={{
                    margin: '15px',
                }}>
                    <button className="link" title="View Task" onClick={this.changeStatus}><ins>View Task</ins></button>
                </div>
                <div style={{
                    margin: '5px',
                }}>
                    <button className="link" title="Add Task" onClick={this.addTask}><ins>Add Task</ins></button>
                </div>
                <div style={{
                    margin: '5px',
                }}>
                    <button className="link" title="Refresh Task" onClick={this.register}><ins>Register</ins></button>
                </div>
                <div style={{
                    padding : '10px',
                }}>
                    <tr>User:  
                    <select id= 'setUser' onChange={e=>this.UserChange(e.target.value)}>
                    <option>all</option>
                    {this.state.alluser.map(function (item, key) {
                    return (
                        
                        <option>{item.firstname}</option>
                    )}.bind(this))}
                    </select>
                    </tr>
                    </div>
            </div>
            <table id='taskT'>
                <thead>
                    <tr><th>Action</th>
                        <th>Property Address</th>
                        <th>Asset Number</th>
                        <th>Due Date</th>
                        <th>User</th>
                        <th>Stage</th>
                    </tr>
                </thead>
                <tbody>{this.state.data.map(function (item, key) {
                    return (

                        <tr key={key}>
                            <td><button title="edit" onClick={this.editTask.bind(this, item)}><ins>Edit</ins></button>
                                {this.showSetTask(item)}
                            </td>
                            <td>{item.Address}</td>
                            <td>{item.asset_num}</td>
                            <td>{item.StartDate}</td>
                            <td>{item.Username}</td>
                            <td>{item.Stage}</td>
                        </tr>
                    )
                }.bind(this))}</tbody>
            </table>


        </div >);
    }

    protected date(){
        
    }

    protected UserChange(value){
        console.log(value);
        if (value==='all') {
            $.ajax({
                url: 'https://rpntechserver.appspot.com/findAllTasks',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('Token'),
                },
                method: 'GET',
                datatype: "json",
                data: JSON.stringify({
                }),
                success: (function (result) {
                    console.log(result);
                    this.setState({ data: result });

                }).bind(this),
            });
        }
        else{
            var newname = this.findUserByName(value);
            $.ajax({
                url: 'https://rpntechserver.appspot.com/userProfile',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('Token'),
                },
                method: 'GET',
                datatype: "json",
                data: JSON.stringify({
                }),
                success: (function (result) {
                    console.log(result);
                    this.setState({ data: result });

                }).bind(this),
            });
        }

    }

    protected findUserByName(name){
        //console.log(this.state.newUser); tim001
        console.log(name);
        for(let i=0;i<this.state.alluser.length;i++){
            if(this.state.alluser[i].firstname===name){
                return this.state.alluser[i].username;
            }    
        }
    }

    protected showSetTask(item){
        if(localStorage.getItem('Authority')==='2'){
            return <button title="setTask" onClick={this.setTask.bind(this, item)}><ins>setTask</ins></button>
        }
        else{
            return void 0;
        }
    }

    protected setTask(item) {
        localStorage.setItem("currTask", item.TaskID);
        console.log(item.TaskID);
        this.props.history.push('/setTask');
    }
    protected editTask(item) {
        localStorage.setItem("currTask", item.TaskID);
        console.log(item.TaskID);
        this.props.history.push('/edittask');
    }

    protected register() {
        var temp;
        $.ajax({
            url: 'https://rpntechserver.appspot.com/findAllTasks',
            //url: 'http://localhost:8080/login',
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: function (data) {
                temp = data;
                //this.IProps.key = data;
                console.log(temp);
                console.log(temp[0].Area);


            },
        });
    }

    protected delTask(item) {
        console.log(item);
    }

    protected search() {
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("taskT");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }

    protected logout() {

    }
    protected changeStatus() {

    }
    protected addTask() {
        this.props.history.push('/addTask');
    }
}

export default PageGhotiMain;
