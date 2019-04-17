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
    history: any
}

export interface IState {

}

class PageGhotiUserprofile extends React.Component<IProps, IState> {
    state = {
        currStage: "",

        alluser: [],
        Username: "",
        Password: "",
        Email: "",
        Phone: "",
        Firstname: "",
        Lastname: "",
        Authority: "",
        Background: "",
        TaskIds: [],

        clients: [],
        company: "",
        address: "",
        check_list: [],
        clientID:""

    }
    public constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.submit = this.submit.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.showTable = this.showTable.bind(this);
        this.initCategory = this.initCategory.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.mapCategory = this.mapCategory.bind(this);
    }

    public componentDidMount() {
        $.ajax({
            url: "https://rpnserver.appspot.com/findAllClient",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                console.log(result);
                this.setState({ clients: result });
            }).bind(this),
        });
        $.ajax({
            url: 'https://rpnserver.appspot.com/findAllUsers',

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
            url: 'https://rpnserver.appspot.com/findUserByUsername?username=' + localStorage.getItem('currUser'),
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                console.log(result);
                this.setState({ Username: result.Username });
                this.setState({ Password: result.Password });
                this.setState({ Email: result.Email });
                this.setState({ Firstname: result.Firstname });
                this.setState({ Lastname: result.Lastname });
                this.setState({ Phone: result.Phone });
                this.setState({ Authority: result.Authority });
                this.setState({ Background: result.Background });
                this.setState({ TaskIds: result.TaskIds });

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

                <div className="col-md-8 " style={{
                    marginTop: "5px",
                    marginLeft: "15px",
                    width: "20%",
                    // float:"left"
                    // height:"10%",
                }}>
                    <select className="form-control mb-2 mr-sm-2 mb-sm-0" id='client' onChange={e => { this.setState({ currStage: e.target.value }) }}>
                        <option>Choose</option>
                        <option value="0">User</option>
                        <option value="1">Client</option>
                    </select>
                </div>
                {this.showTable()}

            </div>
        );
    }

    protected addCategory() {
        let list = this.state.check_list;
        list.push(this.initCategory());
        this.setState({ check_list: list });
    }

    protected initCategory() {
        return {
            Category: "",
            questions: [],
        }
    }



    protected mapCategory(item, key) {
        return (
            <React.Fragment key={key}>
                <button style={{ marginBottom: "10px" }} className="btn btn-primary  col-md-8" onClick={() => {
                    let list = this.state.check_list;
                    list.splice(key, 0, this.initCategory());
                    this.setState({ check_list: list });
                }} >AddCategory</button>
                <div className="card-header col-md-8">

                    <div className="input-group-prepend input-group-sm" style={{ marginBottom: "0px" }}>
                        <button style={{}} className="btn btn-danger center" onClick={() => {
                            let list = this.state.check_list;
                            list.splice(key, 1);
                            this.setState({ check_list: list });
                        }}></button>
                        <span className="input-group-text" id="basic-addon1" style={{
                            color: "black",
                            height: "31px"
                            // fontSize:'13px'
                        }}>Category</span>

                        <input type="text" className="form-control" placeholder="Category..." aria-label="Category" aria-describedby="basic-addon1"
                            id='cate' value={item.Category}
                            style={{
                                color: "black",
                                // width:"99%"
                            }}
                            onChange={e => {
                                let list = this.state.check_list;
                                list[key].Category = e.target.value;
                                this.setState({ check_list: list });
                            }}
                        ></input>
                    </div>
                    <div className="card-body">
                        {item.questions.map(function (ques, index) {
                            return (
                                <React.Fragment key={index}>
                                    <button style={{ marginBottom: "10px" }} className="btn btn-info col-md-12 " onClick={() => {
                                        let list = this.state.check_list;
                                        list[key].questions.splice(index, 0, "");
                                        // console.log(list[key].Questions);
                                        this.setState({ check_list: list });
                                    }} >AddQuestions</button>
                                    <div className="input-group-prepend input-group-sm" style={{ marginBottom: "0px" }}>
                                        <button style={{}} className="btn btn-danger center" onClick={() => {
                                            let list = this.state.check_list;
                                            list[key].questions.splice(index, 1);
                                            this.setState({ check_list: list });
                                        }}></button>
                                        <span className="input-group-text" id="basic-addon1" style={{
                                            color: "black",
                                            height: "100px"
                                            // fontSize:'13px'
                                        }}>Question{index + 1}</span>
                                        <textarea className="form-control" placeholder="Question..." aria-label="DescriptionCN" aria-describedby="basic-addon1"
                                            id='descriptionCN' value={ques}
                                            onChange={e => {
                                                let list = this.state.check_list;
                                                list[key].questions[index] = e.target.value;
                                                this.setState({ check_list: list });
                                            }}
                                            style={{
                                                // width: "425px",
                                                height: "100px",
                                                resize: "none"
                                            }}>
                                            ></textarea>
                                    </div>
                                </React.Fragment>
                            )
                        }.bind(this))}
                        <div>
                            <button style={{ marginTop: "10px" }} className="btn btn-info col-md-12" onClick={() => {
                                let list = this.state.check_list;
                                list[key].questions.push("");
                                this.setState({ check_list: list });
                            }} >AddQuestions</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    protected showTable() {
        if (this.state.currStage === '1') {
            return (
                <React.Fragment>
                    {/* <div>Client:
                    <select style={{
                            width: "100px"
                        }}
                            id='setClient' onChange={e => this.changeClient(e.target.value)}>
                            {this.state.clients.map(function (item, key) {
                                return (
                                    <option key={key}>{item.Company}</option>
                                )
                            }.bind(this))}
                        </select>
                    </div> */}
                    <div className="col-md-4 " style={{
                        marginTop: "5px",
                        marginLeft: "15px",
                        width: "20%",
                        // float:"left"
                        // height:"10%",
                    }}>Client:
                    <select className="form-control mb-2 mr-sm-2 mb-sm-0" id='client' onChange={e => this.changeClient(e.target.value)}>
                            {this.state.clients.map(function (item, key) {
                                return (
                                    <option key={key}>{item.Company}</option>
                                )
                            }.bind(this))}
                        </select>
                    </div>
                    {/* <table>
                        <thead>
                            <tr>Company: {this.state.company}</tr>
                            <tr>Address: <input value={this.state.address} onChange={e => { this.setState({ address: e.target.value }) }}></input></tr>

                        </thead>
                    </table> */}
                    <div id="signupbox" style={{ marginTop: "15px", float:"left"}} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="panel panel-info">
                            <form className="form-horizontal" method="post">
                                <div id="div_id_propertyaddress" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Company<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.company} id="company" name="company" placeholder="Company..." style={{ marginBottom: "5px" }} type="text" readOnly></input>
                                    </div>
                                </div>
                                <div id="div_id_assetnumber" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Address<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.address} onChange={e => { this.setState({ address: e.target.value }) }} id="address" name="address" placeholder="Address..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>
                            </form>
                            <button id="submit" type="submit" name="submit" style={{ marginBottom: "10px" }} className="btn btn-primary  col-md-8" onClick={this.submit} value="submit">Submit</button>
                        </div> </div>
                    <div id="signupbox" style={{ marginTop: "15px", float: "right" }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="panel panel-info" >
                            {this.state.check_list.length == 0 ? <div>None</div> : this.state.check_list.map(this.mapCategory)}
                            <button style={{ marginTop: "10px" }} className="btn btn-primary  col-md-8" onClick={this.addCategory} >AddCategory</button>
                        </div>
                    </div>

                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    {/* <div>User:
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
                    </div> */}
                    <div className="controls col-md-8 " style={{
                        marginTop: "5px",
                        marginLeft: "15px",
                        width: "20%",
                        // height:"10%",
                    }}>User:
                    <select className="form-control mb-2 mr-sm-2 mb-sm-0" id='client' onChange={e => this.changeUser(e.target.value)}>
                            {this.state.alluser.map(function (item, key) {
                                return (
                                    <option key={key}>{item.Username}</option>
                                )
                            }.bind(this))}
                        </select>
                    </div>
                    {/* <table>
                        <thead>
                            <tr>Username: {this.state.Username}</tr>
                            <tr>Password: <input value={this.state.Password} onChange={e => { this.setState({ Password: e.target.value }) }}></input></tr>
                            <tr>Email: <input value={this.state.Email} onChange={e => { this.setState({ Email: e.target.value }) }}></input></tr>
                            <tr>Phone: <input value={this.state.Phone} onChange={e => { this.setState({ Phone: e.target.value }) }}></input></tr>
                            <tr>Firstname: <input value={this.state.Firstname} onChange={e => { this.setState({ Firstname: e.target.value }) }}></input></tr>
                            <tr>Lastname: <input value={this.state.Lastname} onChange={e => { this.setState({ Lastname: e.target.value }) }}></input></tr>
                            <tr>Background: {this.state.Background}</tr>
                            <tr>Authority: <input value={this.state.Authority} onChange={e=>{this.setState({Authority:e.target.value})}}></input></tr>
                        </thead>
                    </table> */}

                    <div id="signupbox" style={{ marginTop: "15px" }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="panel panel-info">
                            <form className="form-horizontal" method="post">
                                <div id="div_id_propertyaddress" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Username<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.Username} id="username" name="username" placeholder="Username..." style={{ marginBottom: "5px" }} type="text" readOnly></input>
                                    </div>
                                </div>
                                <div id="div_id_assetnumber" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Password<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.Password} onChange={e => { this.setState({ Password: e.target.value }) }} id="password" name="password" placeholder="Password..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>
                                <div id="div_id_client" className="form-group required">
                                    <label className="control-label col-md-4  requiredField">Authority<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.Authority} id="authority" name="authority" style={{ marginBottom: "5px" }} type="text" readOnly></input>
                                    </div>
                                </div>
                                <div id="div_id_city" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Firstname<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.Firstname} onChange={e => { this.setState({ Firstname: e.target.value }) }} id="firstname" name="firstname" placeholder="Firstname..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>
                                <div id="div_id_city" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Lastname<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.Lastname} onChange={e => { this.setState({ Lastname: e.target.value }) }} id="lastname" name="lastname" placeholder="Lastname..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>
                                <div id="div_id_city" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Email<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.Email} onChange={e => { this.setState({ Email: e.target.value }) }} id="email" name="email" placeholder="Email..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>
                                <div id="div_id_city" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Phone<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.Phone} onChange={e => { this.setState({ Phone: e.target.value }) }} id="phone" name="phone" placeholder="Phone..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>
                                <div id="div_id_city" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Background<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" value={this.state.Background} id="background" name="background" placeholder="Background..." style={{ marginBottom: "5px" }} type="text" readOnly></input>
                                    </div>
                                </div>


                            </form>
                            <button id="submit" type="submit" name="submit" style={{ marginBottom: "10px" }} className="btn btn-primary  col-md-8" onClick={this.submit} value="submit">Submit</button>
                        </div> </div>
                </React.Fragment>

            )
        }
    }
    protected changeClient(client) {
        console.log(client);
        $.ajax({
            url: 'https://rpnserver.appspot.com/findClientByCompanyName?company=' + client,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                console.log(result);
                this.setState({ company: result.Company });
                this.setState({ address: result.address });
                this.setState({ check_list: result.check_list });
                this.setState({clientID:result.ID})
            }).bind(this),
        })
    }

    protected changeUser(user) {
        console.log(user);
        $.ajax({
            url: 'https://rpnserver.appspot.com/findUserByUsername?username=' + user,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: (function (result) {
                console.log(result);
                this.setState({ Username: result.Username });
                this.setState({ Password: result.Password });
                this.setState({ Email: result.Email });
                this.setState({ Firstname: result.Firstname });
                this.setState({ Lastname: result.Lastname });
                this.setState({ Phone: result.Phone });
                this.setState({ Authority: result.Authority });
                this.setState({ Background: result.Background });
                this.setState({ TaskIds: result.TaskIds });
            }).bind(this),
        })
    }
    protected changeStatus() {
        this.props.history.push("/main");
    }

    protected submit() {
        if(this.state.currStage==='1'){
            $.ajax({
                url: 'https://rpnserver.appspot.com/updateClient?_id='+this.state.clientID,
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('Token'),
                },
                method: 'POST',
                datatype: "json",
                data: JSON.stringify({
                    company: this.state.company,
                    address: this.state.address,
                    check_list : this.state.check_list
                }),
                success: (function (result) {
                    this.props.history.push("/main");
                }).bind(this),
            });
        }
        else{
            $.ajax({
                url: 'https://rpnserver.appspot.com/updateUser',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('Token'),
                },
                method: 'POST',
                datatype: "json",
                data: JSON.stringify({
                    Username: this.state.Username,
                    Password: this.state.Password,
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
}

export default PageGhotiUserprofile;
