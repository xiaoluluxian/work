/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiUserprofile
 */

import * as React from 'react';
import * as Component from '../component/import';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';
import logo from "./logo";
import * as $ from "jquery";
import Config from '../config/config';

export interface IProps {
    history:any
}

export interface IState {

}

class PageGhotiUserprofile extends React.Component<IProps, IState> {
    state={
        alluser:[],
        Username:"",
        Password:"",
        Email:"",
        Phone:"",
        Firstname:"",
        Lastname:"",
        Authority:"",
        Background:"",
        TaskIds:[],

    }
    public constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.submit = this.submit.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }
    
    public componentDidMount(){
        //console.log(localStorage.getItem('currUser'));
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
                this.setState({ alluser: result });
            }).bind(this),
        });
        $.ajax({
            url: 'https://rpntechserver.appspot.com/findUserByUsername?username='+localStorage.getItem('currUser'),
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                console.log(result);
                this.setState({Username:result.Username});
                this.setState({Password: result.Password});
                this.setState({Email: result.Email});
                this.setState({Firstname: result.Firstname});
                this.setState({Lastname: result.Lastname});
                this.setState({Phone: result.Phone});
                this.setState({Authority: result.Authority});
                this.setState({Background: result.Background});
                this.setState({TaskIds: result.TaskIds});

            }).bind(this),
        })
    }

    public render() {
        return (
            <div className="main">
                <div className="title">
                    <div style={{
                        display: 'flex',
                        height: '100px',
                        alignItems: 'center',
                        width: '100%',
                        marginLeft: "10px"
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
                    </div>
                </div>
                <div>User:
                    <select style={{
                                width: "100px"
                            }}
                                id='setUser' onChange={e => this.changeUser(e.target.value)}>
                                {this.state.alluser.map(function (item, key) {
                                    return (
                                        <option key={key}>{item.Username}</option>
                                    )
                                }.bind(this))}
                            </select>
                        </div>
                <table>
                    <thead>
                        <tr>Username: {this.state.Username}</tr>
                        <tr>Password: <input value={this.state.Password} onChange={e=>{this.setState({Password:e.target.value})}}></input></tr>
                        <tr>Email: <input value={this.state.Email} onChange={e=>{this.setState({Email:e.target.value})}}></input></tr>
                        <tr>Phone: <input value={this.state.Phone} onChange={e=>{this.setState({Phone:e.target.value})}}></input></tr>
                        <tr>Firstname: <input value={this.state.Firstname} onChange={e=>{this.setState({Firstname:e.target.value})}}></input></tr>
                        <tr>Lastname: <input value={this.state.Lastname} onChange={e=>{this.setState({Lastname:e.target.value})}}></input></tr>
                        <tr>Background: {this.state.Background}</tr>
                        {/* <tr>Authority: <input value={this.state.Authority} onChange={e=>{this.setState({Authority:e.target.value})}}></input></tr> */}
                    </thead>
                </table>

                <button style={{
                    marginLeft:"10px",
                    marginTop:"10px"
                }} onClick={this.submit}>Submit</button>
                
            </div>
        );
    }

    protected changeUser(user){
        console.log(user);
        $.ajax({
            url: 'https://rpntechserver.appspot.com/findUserByUsername?username='+user,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                console.log(result);
                this.setState({Username:result.Username});
                this.setState({Password: result.Password});
                this.setState({Email: result.Email});
                this.setState({Firstname: result.Firstname});
                this.setState({Lastname: result.Lastname});
                this.setState({Phone: result.Phone});
                this.setState({Authority: result.Authority});
                this.setState({Background: result.Background});
                this.setState({TaskIds: result.TaskIds});
            }).bind(this),
        })
    }
    protected changeStatus(){
        this.props.history.push("/main");
    }

    protected submit(){
        $.ajax({
            url: 'https://rpntechserver.appspot.com/updateUser',
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'POST',
            datatype: "json",
            data: JSON.stringify({
                Username:this.state.Username,
                Password:this.state.Password,
                Authority: this.state.Authority,
                Email: this.state.Email,
                Phone: this.state.Phone,
                Firstname: this.state.Firstname,
                Lastname: this.state.Lastname,
                Background: this.state.Background,
                TaskIds: this.state.TaskIds
            }),
            success: (function (result) {
                this.props.history.push("/main");
            }).bind(this),
        });
    }
}

export default PageGhotiUserprofile;
