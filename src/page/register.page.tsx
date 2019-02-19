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
    // updatePage: (page: IPage, next?: () => void) => void;
    history: any;
}

export interface IState {

}
const questions = [
    {
        Category: "Yard Maintenance",
        Questions: [
            "Is the lawn maintained?",
            "Are hedges and bushes trimmed away from the house?",
            "Are there any fallen trees, branches, or twigs?",
            "Are walks and drives free of snow and ice?",
            "Is there any exterior debris or personal property present?",
            "Any abandoned, unlicensed, or inoperable motor vehicles, i.e., cars, boats. RVs/campers, motorcycles, etc.?"
        ]
    },
    {
        Category: "Exterior Property Condition",
        Questions: [
            "Is there any evidence of vandalism?",
            "Are there any broken/cracked windows? Number of broken/craked windows:",
            "Are there any postings, notices, or signage that would indicate that the property has incurred a code viloation? (If yes, take photo & escalate to WF)",
            "Is the property posted with a winterization notice?",
            "Are there any fences that have fallen down, have missing sections, are damaged, or leaning?",
            "Is the roof surface damaged ot tarped",
            "Are all gutters and downspouts present and in working order? (where applicable)",
            "Are hatchways, cellar areas, and crawlspaces boarded and secured?"
        ]
    },
    {
        Category: "Securing",
        Questions: [
            "Does the property appear to be occupied?",
            "Is house secured to HUD key code?",
            "Is a Lockbox located on the property?",
            "Are garage and/or ourbuildings secured?",
            "Are all windows locked or secured?",
            "Are all fence gates secured?",
            "Are there any boards covering the windows or doors?",
            "Are the pool and /or spa covered and secured?",
        ]
    },
    {
        Category: "Interior Property Condition",
        Questions: [
            "Is there any svidence of vandalism or theft?",
            "If yes, it there graffiti on the interior of the property?",
            "Is there any interior debris or personal property present? i.e. window treatments, mail, furniture, etc.",
            "Are there signs of a leaking roof?",
            "If yes, is there any damage resulting from foor leak? (Buckling floors, fallen sheet rock, stained sheet rock, mold etc.)",
            "is there any interior wall or ceiling damage?",
            "Does the flooring have permanent staining, wear or damage?",
            "Are there any missing cabinets?(kitchen, bathroom, etc.",
            "Are there any structual and/or foundation concerns?",
            "Is there any standing water in the house, basement, or crawlspace?",
            "Is the property in sales clean condition?"
        ]
    },
    {
        Category: "Interior Safety Hazards",
        Questions: [
            "Are there any interior broken or missing hand railings?",
            "Are there any interior broken or missing steps",
            "Are there any interior broken or missing risers?",
            "Are there any trip hazards present (walkways and floors)?"
        ]
    },
    {
        Category: "Plumbing/Electrical/Mechanical",
        Questions: [
            "Is the property winterized?",
            "Is there any evidence that the winterization has been compromised?",
            "Is there physical evidence that the winterization has been compromised?",
            "Is there any obvious water leaking around plumbing fixtures, water tanks, sinks, or faucets?",
            "Are there missing kitchen appliances? If yes, identify missing appliances in Comments section.",
            "Is the hot waer heater missing or severely damaged?",
            "Is the hot water heater strapped?",
            "Do sanitary facilities(i.e. toilet, septic system) appear operational?",
            "Does the HVAC system have parts that are missing, damaged or not connected?",
            "Is the AC condenser unit missing or damaged?",
            "Is there physical evidence or adequate electrical supply for lighting & appliances?",
            "Is there exposed wiring?",
            "Are all meters connected?"
        ]
    },
    {
        Category: "Mold",
        Questions: [
            "Is there any visible evidence of mold?",
            "has the mold source been addressed? If yes, state source in Comments section."
        ]
    },
    {
        Category: "Health Hazards",
        Questions: [
            "Are there any damageds or issues that could be a health and safety concern? If yes, state concerns in comments section.",
            "Hazardous Materials?",
            "Pest and/or Rodent infestation?"
        ]
    },
    {
        Category: "Utilities",
        Questions: [
            "Are the utilities active?",
            "Electric?",
            "Gas",
            "water",
            "Does the property have a well?",
            "Is a well pump present?",
            "Does the property have a septic system?",
        ]
    },
    {
        Category: "Big Six Damage",
        Questions: [
            "Fire damage?",
            "flood damage?",
            "Tornago damage?",
            "Boiler explosion?",
            "Earthquake damage?",
            "Hurricane damage?"
        ]
    }

]


class PageGhotiRegister extends React.Component<IProps, IState> {
    state = {
        Username: '',
        Name: '',
        Password: '',
        Authority: '',
        currStage: '0',
        checklist: []

    };
    public componentDidMount() {

    }

    public constructor(props) {
        super(props);
        this.submitTask = this.submitTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
        this.showTable = this.showTable.bind(this);
        this.initCategory = this.initCategory.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.mapCategory = this.mapCategory.bind(this);

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

            <div className="controls col-md-8 " style={{
                marginTop: "5px",
                marginLeft: "15px",
                width: "20%",
                // height:"10%",
            }}>
                <select className="form-control mb-2 mr-sm-2 mb-sm-0" id='client' onChange={e => { this.setState({ currStage: e.target.value }) }}>
                    <option>Choose</option>
                    <option value="0">User</option>
                    <option value="1">Client</option>
                </select>
            </div>


            {this.showTable()}

            {/* <button
                style={{
                    marginLeft: '10px',
                    marginTop: '5px',
                    width: '60px',
                    height: '28px',
                    fontSize: '14px',
                }}
                title="Submit Task" onClick={this.submitTask}><ins>Submit</ins></button> */}
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

    protected showTable() {
        if (this.state.currStage === '0') {
            return (
                // <table id="user">
                //     <tr>Username <input className="text" id='username' ></input></tr>
                //     <tr>Password <input className="text" id='password'></input></tr>
                //     <tr>Authority <input className="text" id='authority'></input></tr>
                //     <tr>Firstname <input className="text" id='firstname' ></input></tr>
                //     <tr>LastName <input className="text" id='lastname' ></input></tr>
                //     <tr>Email <input className="text" id='email' ></input></tr>
                //     <tr>Phone <input className="text" id='phone' ></input></tr>
                //     <tr>Background <input className="text" id='background' ></input></tr>
                // </table>

                <div id="signupbox" style={{ marginTop: "15px" }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info">
                        <form className="form-horizontal" method="post">
                            <div id="div_id_propertyaddress" className="form-group required">
                                <label className="control-label col-md-4  requiredField"> Username<span className="asteriskField"></span> </label>
                                <div className="controls col-md-8 ">
                                    <input className="input-md  textinput textInput form-control" id="username" name="username" placeholder="Username..." style={{ marginBottom: "5px" }} type="text" ></input>
                                </div>
                            </div>
                            <div id="div_id_assetnumber" className="form-group required">
                                <label className="control-label col-md-4  requiredField"> Password<span className="asteriskField"></span> </label>
                                <div className="controls col-md-8 ">
                                    <input className="input-md  textinput textInput form-control" id="password" name="password" placeholder="Password..." style={{ marginBottom: "5px" }} type="text" ></input>
                                </div>
                            </div>
                            <div id="div_id_client" className="form-group required">
                                <label className="control-label col-md-4  requiredField">Authority<span className="asteriskField"></span> </label>
                                <div className="controls col-md-8 ">
                                    <select className="form-control mb-2 mr-sm-2 mb-sm-0" id='authority'>
                                        <option value="0">Contractor</option>
                                        <option value="1">Analyst</option>
                                        <option value="2">Admin</option>
                                        <option value="3">Client</option>

                                    </select>
                                </div>
                            </div>
                            <div id="div_id_city" className="form-group required">
                                <label className="control-label col-md-4  requiredField"> Firstname<span className="asteriskField"></span> </label>
                                <div className="controls col-md-8 ">
                                    <input className="input-md  textinput textInput form-control" id="firstname" name="firstname" placeholder="Firstname..." style={{ marginBottom: "5px" }} type="text" ></input>
                                </div>
                            </div>
                            <div id="div_id_city" className="form-group required">
                                <label className="control-label col-md-4  requiredField"> Lastname<span className="asteriskField"></span> </label>
                                <div className="controls col-md-8 ">
                                    <input className="input-md  textinput textInput form-control" id="lastname" name="lastname" placeholder="Lastname..." style={{ marginBottom: "5px" }} type="text" ></input>
                                </div>
                            </div>
                            <div id="div_id_city" className="form-group required">
                                <label className="control-label col-md-4  requiredField"> Email<span className="asteriskField"></span> </label>
                                <div className="controls col-md-8 ">
                                    <input className="input-md  textinput textInput form-control" id="email" name="email" placeholder="Email..." style={{ marginBottom: "5px" }} type="text" ></input>
                                </div>
                            </div>
                            <div id="div_id_city" className="form-group required">
                                <label className="control-label col-md-4  requiredField"> Phone<span className="asteriskField"></span> </label>
                                <div className="controls col-md-8 ">
                                    <input className="input-md  textinput textInput form-control" id="phone" name="phone" placeholder="Phone..." style={{ marginBottom: "5px" }} type="text" ></input>
                                </div>
                            </div>
                            <div id="div_id_city" className="form-group required">
                                <label className="control-label col-md-4  requiredField"> Background<span className="asteriskField"></span> </label>
                                <div className="controls col-md-8 ">
                                    <input className="input-md  textinput textInput form-control" id="background" name="background" placeholder="Background..." style={{ marginBottom: "5px" }} type="text" ></input>
                                </div>
                            </div>


                        </form>
                        <button id="submit" type="submit" name="submit" style={{ marginBottom: "10px" }} className="btn btn-primary  col-md-8" onClick={this.submitTask} value="submit">Submit</button>
                    </div> </div>
            )
        }
        else {
            return (
                <React.Fragment>

                    <div id="signupbox" style={{ marginTop: "15px", float: "left" }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="panel panel-info" >
                            <form className="form-horizontal" method="post" >
                                <div id="div_id_propertyaddress" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Company<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" id="company" name="company" placeholder="Company..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>
                                <div id="div_id_assetnumber" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> Address<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" id="address" name="address" placeholder="Address..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>

                                <div id="div_id_city" className="form-group required">
                                    <label className="control-label col-md-4  requiredField"> CheckList<span className="asteriskField"></span> </label>
                                    <div className="controls col-md-8 ">
                                        <input className="input-md  textinput textInput form-control" id="checklist" name="checklist" placeholder="Checklist..." style={{ marginBottom: "5px" }} type="text" ></input>
                                    </div>
                                </div>

                            </form>
                            <button id="submit" type="submit" name="submit" style={{ marginBottom: "10px" }} className="btn btn-primary  col-md-8" onClick={this.submitTask} value="submit">Submit</button>
                        </div>
                    </div>
                    <div id="signupbox" style={{ marginTop: "15px", float: "right" }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <div className="panel panel-info" >
                            {this.state.checklist.map(this.mapCategory)}
                            <button style={{ marginTop: "10px" }} className="btn btn-primary  col-md-8" onClick={this.addCategory} >AddCategory</button>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

    protected addCategory() {
        let list = this.state.checklist;
        list.push(this.initCategory());
        this.setState({ checklist: list });
    }

    protected initCategory() {
        return {
            Category: "",
            Questions: [],
        }
    }



    protected mapCategory(item, key) {
        return (
            <React.Fragment key={key}>
                <button style={{ marginBottom: "10px" }} className="btn btn-primary  col-md-8" onClick={() => {
                    let list = this.state.checklist;
                    list.splice(key, 0, this.initCategory());
                    this.setState({ checklist: list });
                }} >AddCategory</button>
                <div className="card-header col-md-8">

                    <div className="input-group-prepend input-group-sm" style={{ marginBottom: "0px" }}>
                        <button style={{}}className="btn btn-danger center" onClick={()=>{
                            let list = this.state.checklist;
                            list.splice(key, 1);
                            this.setState({ checklist: list });
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
                                let list = this.state.checklist;
                                list[key].Category = e.target.value;
                                this.setState({ checklist: list });
                            }}
                        ></input>
                    </div>
                    <div className="card-body">
                        {item.Questions.map(function (ques, index) {
                            return (
                                <React.Fragment key={index}>
                                    <button style={{ marginBottom: "10px" }} className="btn btn-info col-md-12 " onClick={() => {
                                        let list = this.state.checklist;
                                        list[key].Questions.splice(index, 0, "");
                                        // console.log(list[key].Questions);
                                        this.setState({ checklist: list });
                                    }} >AddQuestions</button>
                                    <div className="input-group-prepend input-group-sm" style={{ marginBottom: "0px" }}>
                                    <button style={{}}className="btn btn-danger center" onClick={()=>{
                                        let list = this.state.checklist;
                                        list[key].Questions.splice(index, 1);
                                        this.setState({ checklist: list });
                                    }}></button>
                                        <span className="input-group-text" id="basic-addon1" style={{
                                            color: "black",
                                            height: "100px"
                                            // fontSize:'13px'
                                        }}>Question{index + 1}</span>
                                        <textarea className="form-control" placeholder="Question..." aria-label="DescriptionCN" aria-describedby="basic-addon1"
                                            id='descriptionCN' value={ques}
                                            onChange={e => {
                                                // console.log(this.state.checklist[key].Questions)
                                                let list = this.state.checklist;
                                                list[key].Questions[index] = e.target.value;
                                                this.setState({ checklist: list });
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
                                let list = this.state.checklist;
                                list[key].Questions.push("");
                                this.setState({ checklist: list });
                            }} >AddQuestions</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
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
        if (this.state.currStage === '0') {
            $.ajax({
                url: 'https://rpntechserver.appspot.com/register',
                //url: 'http://localhost:8080/login',
                method: 'POST',
                datatype: "json",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('Token'),
                },
                data: JSON.stringify({
                    username: $('#username').val(),
                    password: $('#password').val(),
                    authority: $('#authority').val(),
                    firstname: $('#firstname').val(),
                    lastname: $('#lastname').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    background: $('#background').val(),
                }),
                success: function (data) {
                    console.log(data);
                    this.props.history.push('/main');
                }.bind(this),
            });
        }
        else {
            // console.log( $('#company').val(),
            // $('#address').val(),
            // $('#checklist').val(),);
            $.ajax({
                url: 'https://rpntechserver.appspot.com/createClient',
                //url: 'http://localhost:8080/login',
                method: 'POST',
                datatype: "json",
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('Token'),
                },
                data: JSON.stringify({
                    company: $('#company').val(),
                    address: $('#address').val(),
                    check_list: this.state.checklist

                }),
                success: function (data) {
                    console.log(data);
                    this.props.history.push('/main');
                }.bind(this),
            });
        }
    }
}

export default PageGhotiRegister;
