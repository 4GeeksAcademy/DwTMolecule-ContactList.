import React, {useState, useContext, useEffect} from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const Edit = () => {
    const { theid } = useParams()
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    
    const searchContact = () => {
        let results = store.contacts.find((item) => item.id == theid )
        setFormData(results)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let result = await actions.editContact(formData, theid)
        console.log(result)
        if (result){
            navigate("/")
        }
    }

    useEffect(() => {searchContact()}, [store.contacts])

    return (
        <>


            <div className="container mt-5">
                <h2 className="text-center mb-4">Edit Contact</h2>

                <form onSubmit={handleSubmit} className="w-50 mx-auto">
                    <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Full Name"
                            value={formData?.name}
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
                            value={formData?.email}
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
                            value={formData?.phone}
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
                            value={formData?.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Save</button>



                    <p className="text-center mt-3">
                        <Link className="text-primary" to="/">
                             or get back to contacts
                        </Link>
                    </p>
                </form>
            </div>

        </>
    )
};

export default Edit