import React, { useState } from 'react';
//import { PinGenerator } from './PinGenerator';
import { useDispatch } from "react-redux";
import { addPins } from '../store'
import { useHistory } from 'react-router-dom';


const Generate = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [pin1, setpin1] = useState(0);
    const [pin2, setpin2] = useState(0);
    const [pin3, setpin3] = useState(0);
    const [pin4, setpin4] = useState(0);
    const [pin5, setpin5] = useState(0);
    const initialValue = {};
    const [pins, setpins] = useState(initialValue);
    //const [pinsList, setpinsList] = useState([]);
    const shortid = require('shortid');


    const generate = () => {
        var pin: number;
        pin = Math.floor(Math.random() * 8999 + 1000);  //pin generated
        return pin;
    }


    const generateUnique = () => {

        var pin = generate();

        var temp = pin;   //generated pin is stored in temp variable

        var pinsList: Array<number> = [];  //array 
        pinsList = [1111];
        pinsList.push(temp); //added generated pin in array

        for (let i = 1; i <= 6; i++) {

            var a: number = pinsList[i];  //element at 0 index
            switch (pinsList.indexOf(a)) {
                case 1:
                    pin = a;
                    return pin;
                case 2:
                    if (pinsList[1] === pinsList[2]) {
                        pin = generateUnique();          //if same, then again generate
                        return pin;
                    }
                    break;
                case 3:
                    if (pinsList[1] === pinsList[3] || pinsList[2] === pinsList[3]) {
                        pin = generateUnique();          //if same, then again generate
                        return pin;
                    }
                    break;
                case 4:
                    if (pinsList[1] === pinsList[4] || pinsList[2] === pinsList[4] || pinsList[3] === pinsList[4]) {
                        pin = generateUnique();          //if same, then again generate
                        return pin;
                    }
                    break;
                case 5:
                    if (pinsList[1] === pinsList[5] || pinsList[2] === pinsList[5] || pinsList[3] === pinsList[5] || pinsList[4] === pinsList[5]) {
                        pin = generateUnique();          //if same, then again generate
                        return pin;
                    }
                    break;
            }

        }
        console.log(pinsList)
        var finalPin = checkConsecutive(pin);

        return finalPin;
    }

    const checkConsecutive = (pin: number) => {

        let myPin = pin;
        let tempArr: Array<number> = [];

        for (let i = 1000; i >= 10; i / 10) {
            let temp = myPin / i;
            tempArr.push(temp);
        }
        let temp = myPin / 1;
        tempArr.push(temp);

        for (let i = 0; i <= 4; i++) {
            if (i !== 0) {
                tempArr[i] = tempArr[i] % 10
            }
        }
        console.log(tempArr);

        if (Math.abs(tempArr[3] - tempArr[2]) && Math.abs(tempArr[2] - tempArr[1]) === 1) {
            if (Math.abs(tempArr[2] - tempArr[1]) && Math.abs(tempArr[1] - tempArr[0]) === 1) {
                if (tempArr[0] === tempArr[1] || tempArr[1] === tempArr[2] || tempArr[2] === tempArr[3]) {
                    myPin = generateUnique();
                    pin = myPin;
                }
            }
        }

        return pin;

    }


    const generatePin = () => {
        setpin1(generateUnique())
        setpin2(generateUnique())
        setpin3(generateUnique())
        setpin4(generateUnique())
        setpin5(generateUnique())
        //initialValue.push(pin1, pin2, pin3, pin4, pin5);
    }

    // const allowedValue = [{ pin1: pin1, pin2: pin2, pin3: pin3, pin4: pin4, pin5: pin5 }]

    const savePins = () => {
        const id = shortid.generate()
        setpins({ id: id, pin1: pin1, pin2: pin2, pin3: pin3, pin4: pin4, pin5: pin5 });
        console.log(pins)
    }

    const handleFormSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(addPins(pins))
        history.push("/");
    }
    return (
        <div className="container">
            <div className="body">
                <form onSubmit={(e: any) => { handleFormSubmit(e) }}>
                    &nbsp;
                        <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin1}
                            readOnly
                        /></strong>&nbsp;
                        <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin2}
                            readOnly
                        /></strong>&nbsp;
                        <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin3}
                            readOnly
                        /></strong>&nbsp;
                        <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin4}
                            readOnly
                        /></strong>&nbsp;
                        <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin5}
                            readOnly
                        /></strong>
                            &nbsp;



                <div className="body">
                        <button type="button" className="btn btn-light" onClick={() => { generatePin() }}>
                            Generate
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="btn btn-light" onClick={() => { savePins() }}>
                            Save
                    </button>
                    </div>
                </form>
            </div>
        </div>

    )
}


export default Generate;