import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const Demo = () => {

    const navigate = useNavigate()

    const { store, actions } = useContext(Context);

	const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del contacto:", formData);
        actions.agregarContacto(formData)
        alert("Contacto guardado con éxito");
        navigate('/')
    };

	return (
        <>
        
        
        <div className="container mt-5">
        <h2 className="text-center mb-4">Add a new contact</h2>

        <form onSubmit={handleSubmit} className="w-50 mx-auto">
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
            </div>

            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Enter phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    />
            </div>

            <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    />
            </div>
            
            <button type="submit" className="btn btn-primary w-100">Save</button>
            


            <p className="text-center mt-3">
                <Link to="/">
                <a href="#" className="text-primary">or get back to contacts</a>
                </Link>
            </p>
        </form>
    </div>
		
        </>
	);
};
