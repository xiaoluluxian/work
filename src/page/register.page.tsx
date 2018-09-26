/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiEdittask
 */

import * as React from 'react';
import * as Component from '../component/import';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';
import logo from './logo';
import { IItem, IPage } from './interface';
import * as $ from "jquery";
import * as fs from 'fs';

import Config from '../config/config';

export interface IProps {
    page: IPage;
    updatePage: (page: IPage, next?: () => void) => void;
    history:any;
}

export interface IState {

}

class PageGhotiRegister extends React.Component<IProps, IState> {
    state = {
        Username: '',
        Name: '',
        Password: '',
        Authority: '',

    };
    public componentDidMount() {

    }

    public constructor(props) {
        super(props);
        this.submitTask = this.submitTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeStatus = this.changeStatus.bind(this);

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
                        <input type="text" id="myInput" placeholder="Search for Addr.." title="Search Task" />
                    </div>
                    {/* <div style={{
                        marginTop: '20px',
                        marginRight: '10px',
                        textAlign: 'right',
                    }}>
                        <button className='link' title='Log out' onClick={this.logout}><ins>Log Out</ins></button>
                    </div> */}
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
            </div>
            </div>
            <div className="menu">
                <div style={{
                    margin: '15px',
                }}>
                    <button className="link" title="View Task" onClick={this.changeStatus}><ins>View Task</ins></button>
                </div></div>

            <table id="register">
                <tr>Username <input className="text" id='username' ></input></tr>
                <tr>Password      <input className="text" id='password'></input></tr>
                <tr>Authority      <input className="text" id='authority'></input></tr>
                <tr>Firstname <input className="text" id='firstname' ></input></tr>
                <tr>LastName <input className="text" id='lastname' ></input></tr>
                <tr>Email <input className="text" id='email' ></input></tr>
                <tr>Phone <input className="text" id='phone' ></input></tr>
            </table>
            <button
                style={{
                    marginLeft: '10px',
                    marginTop: '5px',
                    width: '60px',
                    height: '28px',
                    fontSize: '14px',
                }}
                title="Submit Task" onClick={this.submitTask}><ins>Submit</ins></button>
            {/* <input
                style={{
                    marginTop: '10px',
                    marginLeft: '10px',
                    width: '60px',
                    height: '25px',
                    fontSize: '14px',
                }}
                type="file" id="fileUpload" onChange={(e) => { this.handleChange(e.target.files) }} /> */}
        </div>);

    }
    protected handleChange(selectorFiles: FileList) {
        //var tmppath = URL.createObjectURL(selectorFiles[0]);
        let page = JSON.parse(selectorFiles[0].toString());
        // let temp = JSON.stringify(selectorFiles[0].toString());
        // let page = JSON.parse(temp);
        console.log(page);
        // console.log(tmppath);
    }
    protected AddrChange(value) {
        this.setState({
            Address: value
        });
    }
    protected AssetChange(value) {
        this.setState({
            AssetNum: value
        });
    }
    protected StartDChange(value) {
        this.setState({
            StartDate: value
        });
    }
    protected StageChange(value) {
        this.setState({
            Stage: value
        });
    }
    protected CityChange(value) {
        this.setState({
            City: value
        });
    }
    protected logout() {

    }
    protected changeStatus() {
        this.props.history.push('/main');
    }
    protected addTask() {

    }


    protected submitTask() {
        $.ajax({
            url: 'https://rpntechserver.appspot.com/register',
            //url: 'http://localhost:8080/login',
            method: 'POST',
            datatype: "json",
            headers: {
                Authorization:"Bearer " + localStorage.getItem('Token'),
            },
            data: JSON.stringify({
                username:$('#username').val(),
                password:$('#password').val(),
                authority:$('#authority').val(),
                firstname:$('#firstname').val(),
                lastname:$('#lastname').val(),
                email:$('#email').val(),
                phone:$('#phone').val(),
            }),
            success: function (data) {
                console.log(data);
                this.props.history.push('/main');
            }.bind(this),
        });
    }
}

export default PageGhotiRegister;
