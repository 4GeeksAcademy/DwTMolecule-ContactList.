import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Contacto from "../views/Contact"


export const Home = () => {

    const { store, actions } = useContext(Context);
    const [setShowModal] = useState(true);

    return (

        <>



            <div className="d-flex justify-content-end p-3">
                <Link to="/demo">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>

            <div className="container">
                <ul className="list-group">
                    {store.contacts.map((item, index) => {
                        return (
                            <li key={index}
                                className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{item.name}</h5>
                                    <p className="mb-0">
                                        📍 {item.address}
                                    </p>
                                    <p className="mb-0">
                                        📞 {item.phone}
                                    </p>
                                    <p className="mb-0">
                                        ✉️ {item.email}
                                    </p>
                                    <p className="mb-0">
                                        {item.id}
                                    </p>
                                </div>
                                <div>
                                    <Link to={`/edit/${item.id}`}>
                                        <button className="btn btn-light me-2">
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                    </Link>

                                    <button className="btn btn-danger" onClick={() => actions.eliminarContactoModal(item.id)}>
                                        <div>
                                            <i className="bi bi-trash"></i>
                                        </div>
                                    </button>
                                </div>

                            </li>
                        );
                    })}
                </ul>

            </div>

            <Contacto />

        </>
    )
}
