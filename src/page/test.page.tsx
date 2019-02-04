/**
 * @author Tim
 * @overview generated by ghoti-cli
 * @fileoverview Page set PageGhotiTest
 */

import * as React from 'react';
import * as Component from '../component/import';
import { IItem, IPage } from './interface';
import * as Func from '../func/import';
import * as Lambda from '../lambda/import';
import * as $ from "jquery";
import * as Cheerio from "cheerio"

import Config from '../config/config';
import { bootstrap, button } from "bootstrap"
import * as FileSaver from 'file-saver';
// import * as downloadi from "images-downloader";
// import * as request from 'request';
import * as JSZipUtils from "./jszip-utils.js";
import * as JSZipUtilsMin from "./jszip-utils.min.js";
import wflogo from "./wflogo";
//import * as saveas from "./FileSaver.js";
import * as JSZip from "./jszip.js";
import * as jsPDF from "jspdf";
import * as helper from "./helpers.js";
// import  "./photo.html";
// import * as THREE from "./three.min.js";
import * as PhotoSphereViewer from "photo-sphere-viewer";
// import * as THREE from "three";
// import * as DOT from "dot";
// import * as uEvent from "uevent";
// import * as D from "d.js";


// declare const PhotoSphereViewer: any;

export interface IProps {
    page: IPage;
}

export interface IState {

}


class PageGhotiTest extends React.Component<IProps, IState> {
    state = {
        page: null,
        pic: [],
        test: [
            {
                longitude: 0,
                latitude: 0
            },
            {
                longitude: 0.1,
                latitude: 0.1
            }
        ]
    }
    public constructor(props) {
        super(props);
        this.readJson = this.readJson.bind(this);
        this.sortTable = this.sortTable.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangebefore = this.handleChangebefore.bind(this);
        this.downloadBefore = this.downloadBefore.bind(this);
        this.convert360 = this.convert360.bind(this);
        this.logtest = this.logtest.bind(this);
    }

    public componentDidMount() {

        // const script = document.createElement("script");

        // script.src = "photo-sphere-viewer.min.js";
        // script.async = true;

        // document.body.appendChild(script);
    }

    public render() {
        // console.log(PhotoSphereViewer);
        // <Route path/>


        return (<React.Fragment>
            <div className="row">
                <div className="col-lg-4" style={{
                    marginTop: "3px",
                    marginLeft: "3px"
                }}>
                    <div className="card mb-4">
                        <div className="card-header">
                            Basic
                        </div>
                        <div className="card-body">
                            This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                </div>
                    </div>
                </div>
            </div>
            {/* <script src="lib/photo-sphere-viewer.min.js"></script> */}
            {/* <a href="http://localhost:8080/photo.html">asd</a> */}
            {/* <p>Click the button to sort the table alphabetically, by name:</p>
            <p><button onClick={this.sortTable}>Sort</button></p>
            
            <table id="myTable">
                <tr>
                    <th>Name</th>
                    <th>number</th>
                </tr>
                <tr>
                    <td>Berglunds snabbkop</td>
                    <td>2018-05-03</td>
                </tr>
                <tr>
                    <td>Berglunds snabbkop</td>
                    <td></td>
                </tr>
                <tr>
                    <td>North/South</td>
                    <td>2017/03-16</td>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>2018-05-03</td>
                </tr>
                <tr>
                    <td>Koniglich Essen</td>
                    <td>2018-06-03</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>2018-05-17</td>
                </tr>
                <tr>
                    <td>Paris specialites</td>
                    <td>2018-09-21</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>2018-05-14</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>2018-08-24</td>
                </tr>
            </table> */}
            {/* <div id="signupbox" style={{ marginTop: "50px" }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="panel panel-info">
                    <form className="form-horizontal" method="post">
                        <div id="div_id_select" className="form-group required">
                            <label className="control-label col-md-4  requiredField"> Select<span className="asteriskField">*</span> </label>
                            <div className="controls col-md-8 " style={{ marginBottom: "10px" }}>
                                <label className="radio-inline" style={{marginRight:"20px"}}><input type="radio" checked={true} name="select" id="id_select_1" value="S" style={{ marginBottom: "10px",marginRight:"5px" }}></input>Knowledge Seeker</label>
                                <label className="radio-inline"> <input type="radio" name="select" id="id_select_2" value="P" style={{ marginBottom: "10px", marginRight:"5px"}}></input>Knowledge Provider </label>
                            </div>
                        </div>
                        <div id="div_id_username" className="form-group required">
                            <label  className="control-label col-md-4  requiredField"> Username<span className="asteriskField">*</span> </label>
                            <div className="controls col-md-8 ">
                                <input className="input-md  textinput textInput form-control" id="id_username" name="username" placeholder="Choose your username" style={{marginBottom:"10px"}} type="text" ></input>
                            </div>
                        </div>
                    </form>
                </div> </div> */}

            {/* <div className="container1" id="container1"
                style={{
                    width: "100%",
                    height: "100%",
                }}></div> */}
            <button onClick={this.convert360}>convert360</button>
            <button onClick={this.logtest}>test</button>
            {/* {this.convert360} */}
            <tr>zipcode <input className="text" id='zipcode' ></input></tr>
            <button onClick={this.weather}>go</button>
            <input
                style={{
                    marginTop: '10px',
                    marginLeft: '10px',
                    fontSize: '14px',


                }}
                type="file" id="fileUpload" onChange={(e) => { this.handleChange(e.target.files) }} />
            <div style={{ marginLeft: "10px" }}>Import BeforeJSON:<input
                style={{
                    marginTop: '5px',
                    marginLeft: '10px',
                    fontSize: '14px',


                }}
                type="file" id="fileUpload" onChange={(e) => { this.handleChangebefore(e.target.files) }} /></div>

            <button
                style={{
                    // paddingTop: '20px',
                    // marginTop: '10px',
                    marginLeft: '10px',
                    width: '60px',
                    height: '25px',
                    fontSize: '14px',
                }}
                title="download before" onClick={this.downloadBefore}>Before</button>
            <div>
                <button onClick={this.printClient}>printClient</button>
            </div>

        </React.Fragment>
        )
    }

    protected logtest() {
        console.log(this.state.test);
    }

    protected printClient() {
        $.ajax({
            url: 'https://rpntechserver.appspot.com/findAllClient',
            method: 'GET',
            datatype: "json",
            headers: {
                Authorization: "Bearer " + localStorage.getItem('Token'),
            },
            data: JSON.stringify({
            }),
            success: function (data) {
                console.log(data);

            }.bind(this),
        })
    }

    protected testfunc() {
        console.log(document.getElementById('container1') as HTMLElement);
    }

    protected convert360() {
        // var photoSphereViewer = require('./lib/photo-sphere-viewer.min.js');
        // photoSphereViewer.panorama="https://www.googleapis.com/download/storage/v1/b/post-images-rpntech/o/32a8ec56-d49f-4f35-aca2-614298c3c3f2?generation=1542392846733240&alt=media";
        // photoSphereViewer.container = "container1";

        let div = document.getElementById('container1');
        let PSV;
        console.log(this.state.test[0].longitude);
        PSV = new PhotoSphereViewer({
            panorama: "https://www.googleapis.com/download/storage/v1/b/post-images-rpntech/o/32a8ec56-d49f-4f35-aca2-614298c3c3f2?generation=1542392846733240&alt=media",
            container: div,
            time_anim: false,
            navbar: true,
            navbar_style: {
                backgroundColor: "silver",
            },
            markers: (function () {
                var marlist = [];
                for (let i = 0; i < this.state.test.length; i++) {
                    marlist.push({
                        id: '#' + Math.random(),
                        longitude: this.state.test[i].longitude,
                        latitude: this.state.test[i].latitude,
                        image: "https://cdn4.iconfinder.com/data/icons/peppyicons/512/660011-location-512.png",
                        width: 32,
                        height: 32,
                        tootip: "testdel pin",
                        data: {
                            generated: true
                        }
                    })
                };
                return marlist;
            }.bind(this)())
            // markers: (function () {
            //     // var testlist = this.state.test;
            //     var marlist=[];
            //     marlist.push({
            //         id: '#' + Math.random(),
            //         longitude: 0,
            //         latitude: 0,
            //         // image: "https://cdn4.iconfinder.com/data/icons/peppyicons/512/660011-location-512.png",
            //         width: 32,
            //         height: 32,
            //         html: 'HTML & Image',
            //         tootip: "testdel pin",
            //         data: {
            //             generated: true
            //         }
            //     })
            //     return marlist;
            // }())
        });


        PSV.on('click', function (e) {
            let mar = {
                id: '#' + Math.random(),
                longitude: e.longitude,
                latitude: e.latitude,
                image: "https://cdn4.iconfinder.com/data/icons/peppyicons/512/660011-location-512.png",
                width: 32,
                height: 32,
                tooltip: 'Generated pin',
                data: {
                    generated: true
                }
            }
            PSV.addMarker(mar);
            let temp = this.state.test;
            temp.push({
                longitude: e.longitude,
                latitude: e.latitude
            })
            this.setState({ test: temp })
        }.bind(this));

        /**
         * Delete a generated marker when the user clicks on it
         */
        PSV.on('select-marker', function (marker, dblclick) {
            if (marker.data && marker.data.generated) {
                if (dblclick) {
                    PSV.removeMarker(marker);
                    // console.log(PSV.marker);
                }
            }
        });
    }

    protected downloadBefore() {
        function urlToPromise(url) {
            console.log(url)
            return new Promise(function (resolve, reject) {
                JSZipUtils.getBinaryContent(url, function (err, data) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data);
                    }
                });
            });
        }

        var zip = new JSZip();
        var urls = this.state.pic;
        console.log(this.state.pic);
        // find every checked item
        urls.forEach(function (url) {
            console.log(url);
            var filename = url.replace(/.*\//g, "") + ".jpg";
            zip.file(filename, urlToPromise(url), { binary: true });
        });

        // when everything has been downloaded, we can trigger the dl
        zip.generateAsync({ type: "blob" }, function updateCallback(metadata) {
            var msg = "progression : " + metadata.percent.toFixed(2) + " %";
            if (metadata.currentFile) {
                msg += ", current file = " + metadata.currentFile;
            }

        })
            .then(function callback(blob) {

                FileSaver.saveAs(blob, "-Before.zip");

            }, function (e) {

            });

        return false;
    }



    protected handleChangebefore(selectorFiles: FileList) {
        var data;
        var file = selectorFiles[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            data = JSON.parse(event.target.result);
            this.setState({ pic: data })
        }.bind(this);
        reader.readAsText(file);
    }

    protected getInner(element) {
        let stuffs = [];
        let buffer = {
            After: [],
            Amount: 0,
            During: [],
            Process: '0',
            Status: '0',
            Tax: 0,
            Taxable: true,
            description: '',
            Cate: '',
            Comments: '',
            Item: 1,
            Qty: 0,
            UM: '',
            PPU: 0,
            Cost: 0,
            Before: []
        }
        let next = 0;
        for (let i = 0; i < element.length; i++) {
            if (next === 6) {
                next = 0;
                stuffs.push(buffer);
                buffer = {
                    After: [],
                    Amount: 0,
                    During: [],
                    Process: '0',
                    Status: '0',
                    Tax: 0,
                    Taxable: true,
                    description: '',
                    Cate: '',
                    Comments: '',
                    Item: 1,
                    Qty: 0,
                    UM: '',
                    PPU: 0,
                    Cost: 0,
                    Before: []
                };
            }
            let current = element.eq(i).text();
            switch (next) {
                case 0:
                    let num: number = parseFloat(current);
                    if (num && current.length <= 3) {
                        buffer.Item = num;
                        next++;
                    } else {
                        if (stuffs.length > 0 && current.trim().substring(0, 1) !== '$' && current.trim().substring(0, 10) !== 'Area Total') {
                            stuffs[stuffs.length - 1].Comments = current;
                        }
                    }
                    break;
                case 1:
                    buffer.description = current;
                    next++;
                    break;
                case 2:
                    buffer.Qty = parseFloat(current);
                    next++;
                    break;
                case 3:
                    buffer.UM = current;
                    next++;
                    break;
                case 4:
                    buffer.PPU = parseFloat(current.substr(1).split(',').join(''));
                    next++;
                    break;
                case 5:
                    buffer.Cost = parseFloat(current.substr(1).split(',').join(''));
                    buffer.Amount = parseFloat(current.substr(1).split(',').join(''));
                    next++;
                    break;
            }
        }
        console.log(stuffs);
    }

    protected handleChange(selectorFiles: FileList) {
        let data;
        var file = selectorFiles[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            let $ = Cheerio.load(event.target.result);
            let entireList = this.getInner($('#box-table-b').find('.tahoma12-gray'))
            let objList = $('.tahoma14-gold');
            let a = $('table').first();
            a = a.children().eq(0).children().eq(0).children().eq(1).children().eq(0).children().eq(0).children().eq(0).children().eq(0).children().eq(3).children().eq(1).children().eq(0);
            a = a.children(); // tobody outer with start perptory estimate
            a = a.eq(1).children().eq(0).children().eq(0).children().eq(0).children(); // in side list
            // a = a.eq(3); // first three tr are empty // NAMES
            // a = a.eq(4); // 4 = edit estimate button, 5 = first title, 6 = first content
            // 7 = second title, 8 = second content

            a = a.eq(3).children().eq(2).children().eq(0).children().eq(0).children(); // name/ address/ shits
            // console.log(a.eq(0).children().eq(1).text());

        }.bind(this);
        reader.readAsText(file);
    }

    protected weather() {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + $('#zipcode').val() + '&APPID=bbd1d9fee8d0b99c7470edd713a045f9',
            method: 'GET',
            datatype: "json",
            data: JSON.stringify({
            }),
            success: function (data) {
                console.log(data.weather[0].description);

            }.bind(this),
        })
    }

    protected sortTable() {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        //console.log(table.rows);
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
            //start by saying: no switching is done:
            switching = false;
            rows = table.rows;
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 1; i < (rows.length - 1); i++) {
                //start by saying there should be no switching:
                shouldSwitch = false;
                /*Get the two elements you want to compare,
                one from current row and one from the next:*/
                x = rows[i].getElementsByTagName("TD")[1];
                //console.log(rows[i].getElementsByTagName("TD")[1].innerHTML);
                //console.log(rows[i].getElementsByTagName("TD")[1]);
                y = rows[i + 1].getElementsByTagName("TD")[1];
                //check if the two rows should switch place:
                if (this.convertDate(x.innerHTML) > this.convertDate(y.innerHTML)) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                /*If a switch has been marked, make the switch
                and mark that a switch has been done:*/
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }

    protected convertDate(d) {
        var p = d.split("-");
        if (d.indexOf("/") == -1 && d != "") {
            return +(p[0] + p[1] + p[2]);
        }
        else {
            return 99999999;
        }
    }



    protected readJson(Files: FileList) {
        var file = Files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            var test = event.target.result;
            var js = JSON.parse(test);
            console.log(js);
            let pagei: IPage = {
                address: js.address,
                assetnum: '',
                startdate: '',
                duedate: '',
                billTo: '',
                city: js.city,
                stage: '',
                invoicenum: '',
                completiondate: '',
                invoicedate: '',
                totalcost: js.totalCost,
                totalimage: parseInt(js.totalImage),
                item: js.list,
            }
            console.log(pagei.address);
            console.log(pagei.totalcost);
            console.log(pagei.totalimage);
            console.log(pagei.item);

        }.bind(this);
        reader.readAsText(file);

    }

    protected init(): IPage {
        return {
            address: '',
            assetnum: '',
            startdate: '',
            duedate: '',
            billTo: '',
            city: '',
            stage: '',
            invoicenum: '',
            completiondate: '',
            invoicedate: '',
            totalcost: '',
            totalimage: 0,
            item: [],
        };
    }
}

export default PageGhotiTest;
