import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addName, deletePins, RootState } from "../store";
import '../styles/index.scss'


const Saved = () => {
    const dispatch = useDispatch();
    const saved = useSelector((state: RootState) => state.saved);
    const [name, setname] = useState('')
    dispatch(addName(name));

    if (saved.length === 0) {
        return (
            <h1 className="message"> Empty State </h1>
        )
    } else {
        return (

            <div>
                <table className="table">
                    <tbody>
                        {
                            saved.map((save: { id: string | undefined; pin1: React.ReactNode; pin2: React.ReactNode; pin3: React.ReactNode; pin4: React.ReactNode; pin5: React.ReactNode; }) => (
                                <tr>
                                    <th scope="row">
                                        <input
                                            placeholder="Name"
                                            id={save.id}
                                            type="text"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                    </th>
                                    <td>{save.pin1}</td>
                                    <td>{save.pin2}</td>
                                    <td>{save.pin3}</td>
                                    <td>{save.pin4}</td>
                                    <td>{save.pin5}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger"
                                            onClick={() => dispatch(deletePins(save.id))}>DELETE</button>
                                    </td>
                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>
        )
    }


}


export default Saved;