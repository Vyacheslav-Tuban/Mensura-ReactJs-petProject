import React, { Component } from 'react';
import './Home.css';
import { CSVLink, CSVDownload } from "react-csv";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frets: ["###1",
                "###2",
                "####3",
                "####4",
                "####5",
                "####6",
                "####7",
                "####8",
                "####9",
                "###10",
                "###11",
                "###12",
                "###13",
                "###14",
                "###15",
                "###16",
                "###17",
                "###18",
                "###19",
                "###20",
                "###21",
                "###22",
                "###23",
                "###24"],
            stateFretsCalculationArray: [],
            controlledInput: '',

        };

    }

    handleChange = (event) => {

        this.setState({ controlledInput: event.target.value });
    }

    recursedCalculation = (neckLength, n) => {

        let fretsCalculationArray = this.state.stateFretsCalculationArray;

        (() => {
            if (n === 0) {
                return neckLength;
            } else {
                let lenBuf = neckLength / 1.0594630943593;
                fretsCalculationArray.push(Number.parseFloat(lenBuf).toFixed(2));
                return this.recursedCalculation(lenBuf, n - 1);
            }
        })();
        this.setState({ stateFretsCalculationArray: fretsCalculationArray });
    };

    lengthCalculation = () => {

        if (this.state.controlledInput >= 430 && this.state.controlledInput <= 680) {

            this.recursedCalculation(this.state.controlledInput, 24);
            this.setState({ stateFretsCalculationArray: [] });
            //console.log(this.state.stateFretsCalculationArray);
            let arrBuffer = [];
            this.state.stateFretsCalculationArray.forEach((element) => { arrBuffer.push(Number.parseFloat(this.state.controlledInput - element).toFixed(2)) });
            console.log(arrBuffer);
            this.setState({ frets: arrBuffer });
        } else alert("Введите длину мензуры от 430 до 680 мм")


    }


    render() {
        const name = "Mensura";

        const csvData = [

            ["fret 1:"], [this.state.frets[0]],
            ["fret 2:"], [this.state.frets[1]],
            ["fret 3:"], [this.state.frets[2]],
            ["fret 4:"], [this.state.frets[3]],
            ["fret 5:"], [this.state.frets[4]],
            ["fret 6:"], [this.state.frets[5]],
            ["fret 7:"], [this.state.frets[6]],
            ["fret 8:"], [this.state.frets[7]],
            ["fret 9:"], [this.state.frets[8]],
            ["fret 10:"], [this.state.frets[9]],
            ["fret 11:"], [this.state.frets[10]],
            ["fret 12:"], [this.state.frets[11]],
            ["fret 13:"], [this.state.frets[12]],
            ["fret 14:"], [this.state.frets[13]],
            ["fret 15:"], [this.state.frets[14]],
            ["fret 16:"], [this.state.frets[15]],
            ["fret 17:"], [this.state.frets[16]],
            ["fret 18:"], [this.state.frets[17]],
            ["fret 19:"], [this.state.frets[18]],
            ["fret 20:"], [this.state.frets[19]],
            ["fret 21:"], [this.state.frets[20]],
            ["fret 22:"], [this.state.frets[21]],
            ["fret 23:"], [this.state.frets[22]],
            ["fret 24:"], [this.state.frets[23]],


        ];

        const handler = {
            630: () => {
                this.state.controlledInput = 630;
                this.lengthCalculation();
                console.log(this.state.controlledInput);
            },
            640: () => {
                this.state.controlledInput = 640;
                this.lengthCalculation();
                console.log(this.state.controlledInput);
            },
            650: () => {
                this.state.controlledInput = 650;
                this.lengthCalculation();
                console.log(this.state.controlledInput);
            },
            660: () => {
                this.state.controlledInput = 660;
                this.lengthCalculation();
                console.log(this.state.controlledInput);
            }
        }
        return (
            <>
                {/* весь контент ниже хедера  */}
                <div className="contentHome ">
                    {/* первая строка контента, заголовок  */}
                    <div className="homeContentR1 custom_selection">
                        {name} is a web application, that helps you
                    to calculate the length of the guitar neck
                </div>

                    <div className="homeContentR2 custom_selection" >
                        Little note: the mensura(from lat) of an acoustic guitar is the distance in millimeters or inches
                        between the thresholds of a guitar. By itself,
                        mensura has no direct effect on the tuning. It is influenced by how
                        correctly mensura was placed on the neck and compensated with distance between frets.
                </div>

                    {/* третья строка, подсказка */}
                    <div className="homeContentR3 custom_selection">
                        Press the buttons above the guitar to select popular neck sizes
                </div>

                    {/* 630,640,650,660 кнопки для выбора стандартных размеров  */}
                    <div className="homeContentR4">
                        <button className="defaultButtons" onClick={() => handler[630]()}>630 mm</button>
                        <button className="defaultButtons" onClick={() => handler[640]()}>640 mm</button>
                        <button className="defaultButtons" onClick={() => handler[650]()}>650 mm</button>
                        <button className="defaultButtons" onClick={() => handler[660]()}>660 mm</button>
                    </div>
                    <div className="homeContentR5">
                        #odd
                    <output id="fret1">{this.state.frets[0]}</output><output id="fret3">{this.state.frets[2]}</output>
                        <output id="fret5">{this.state.frets[4]}</output><output id="fret7">{this.state.frets[6]}</output>
                        <output id="fret9">{this.state.frets[8]}</output><output id="fret11">{this.state.frets[10]}</output>
                        <output id="fret13">{this.state.frets[12]}</output><output id="fret15">{this.state.frets[14]}</output>
                        <output id="fret17">{this.state.frets[16]}</output><output id="fret19">{this.state.frets[18]}</output>
                    </div>
                    <div className="homeContentR6 ">
                        #even
                    <output id="fret2">{this.state.frets[1]}</output><output id="fret4">{this.state.frets[3]}</output>
                        <output id="fret6">{this.state.frets[5]}</output><output id="fret8">{this.state.frets[7]}</output>
                        <output id="fret10">{this.state.frets[9]}</output><output id="fret12">{this.state.frets[11]}</output>
                        <output id="fret14">{this.state.frets[13]}</output><output id="fret16">{this.state.frets[15]}</output>
                        <output id="fret18">{this.state.frets[17]}</output><output id="fret20">{this.state.frets[19]}</output>
                    </div>

                    {/* строка под грифом */}
                    <div className="homeContentR7 custom_selection">
                        The values of the fields under the neck of the guitar are the distance (in mm) between the frets and the upper threshold
                        (first fret is ###1 . . . twentieth is ###20)
                    </div>
                    {/* строка с вводом кастомной длины */}
                    <div className="homeContentR9">
                        {/* отображение текущей длины мензуры */}
                        <div className="currLength" style={{ visibility: this.lengthCalculation ? 'visible' : 'hidden' }}>
                            Current mensura length is {this.state.controlledInput}
                        </div>
                        {/* текстбокс для ввода длины */}
                        <div className="inputLengthDiv">
                            <input className="inputLength custom_selection" value={this.state.value} onChange={this.handleChange} type="number" min="430" max="680"
                                placeholder="Custom length from 430 to 680mm" />
                        </div>
                        {/* кнопка подтверждения длины */}

                        <button className="inputConfirm" onClick={this.lengthCalculation}>Calculate</button>
                    </div>
                    {/* подсказка по размерам и скачивание excel файла */}
                    <div className="homeContentR10">

                        <div className="lengthWarning">
                            Mensura length should be between 430 and 680mm
                    </div>

                        <CSVLink data={csvData}>Download me</CSVLink>;

                    </div>
                </div>
                {/* Гитара на фоне  */}
                <div className="divGuitarBG">
                    <img className="guitarBG" src="../guitar.svg" alt="Guitar background" ></img>
                </div>
            </>
        );
    }
}

export default Home;