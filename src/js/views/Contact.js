import React from "react";
import { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

const Contacto = () => {


const { store, actions } = useContext(Context);


    const handleDelete = async () => {
        actions.eliminarContacto(store.contactoAEliminar);
        console.log("Eliminando contacto:", store.contactoAEliminar); // Depuración
        await actions.eliminarContacto(store.contactoAEliminar);
    };

    useEffect(()=>{
    },[store.showModal]) 

    return (
        <>
  
            <Modal show={store.showModal} onHide={actions.cerrarModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    If you delete this thing, the entire universe will go down!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={actions.cerrarModal}>
                        Oh no!
                    </Button>
                    <Button variant="danger" onClick={handleDelete} data-bs-dismiss="modal">
                        Yes baby!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Contacto;
