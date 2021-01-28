import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addPins } from '../store'
import { useHistory } from 'react-router-dom';
import { CheckerPlugin } from 'awesome-typescript-loader';


const Generate = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [pin1, setpin1] = useState('');
    const [pin2, setpin2] = useState('');
    const [pin3, setpin3] = useState('');
    const [pin4, setpin4] = useState('');
    const [pin5, setpin5] = useState('');
    const initialValue = {};
    const [pins, setpins] = useState(initialValue);
    const shortid = require('shortid');

    function generate() {
        var pin = '';
        var str = '01234567890';
        let regEx = "/.\d{2+}./";

        while (regEx.match(pin)) {
            for (let i = 1; i <= 4; i++) {
                var char = Math.floor(Math.random()
                    * str.length);

                pin += str.charAt(char)
            }
        }
        return pin;
    }

    // const check = (pin:string) => {
    //     let regEx = "\\b([0-9])\\1+\\b";
    //     if(regEx.match(pin)){
    //         this.generate();
    //     }
    // }

    /*previous pin generation logic*/
    // const generate = () => {
    //     var pin: string;
    //     pin = Math.floor(Math.random() * 8999 + 1000);
    //     return pin;
    // }


    const generatePin = () => {
        setpin1(generate())
        setpin2(generate())
        setpin3(generate())
        setpin4(generate())
        setpin5(generate())
    }

    const savePins = () => {
        const id = shortid.generate()
        setpins({ id: id, pin1: pin1, pin2: pin2, pin3: pin3, pin4: pin4, pin5: pin5 });
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
                    <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin1}
                            readOnly
                        /></strong>
                    <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin2}
                            readOnly
                        /></strong>
                    <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin3}
                            readOnly
                        /></strong>
                    <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin4}
                            readOnly
                        /></strong>
                    <strong>
                        <input
                            type="number"
                            id="pin"
                            value={pin5}
                            readOnly
                        /></strong>



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