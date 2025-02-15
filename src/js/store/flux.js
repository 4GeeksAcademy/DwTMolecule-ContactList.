const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				
			],
			contacts: [


				{
					name: "contacto 1",
					phone: "white",
					
				},
				{
					name: "contacto 2",
					phone: "white",
					
				}
			],
			showModal: false,
			indexDelete: null,


			
		},
		actions: {
			// Use getActions to call a function within a fuction
            exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			editContact: async (contact, id) => {
				console.log(contact,id)
				let myStore = getStore()
				const requestOptions = {
					method: "PUT",
					body: JSON.stringify(contact),
					headers: {'Content-Type': 'application/json'}
				  };
				let response = await fetch(`https://playground.4geeks.com/contact/agendas/matias/contacts/${id}`, requestOptions)
				if (response.ok){
					getActions().loadSomeData()
					return true
				}
				else {return false}
			},

			agregarContacto: (contact) => {
				let myStore = getStore()
				const requestOptions = {
					method: "POST",
					body: JSON.stringify(contact),
					headers: {'Content-Type': 'application/json'}
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/matias/contacts/" , requestOptions)
					.then((response) => response.json())
					.then((result) => {
						console.log(result)
						if(result){
							setStore({contacts: myStore.contacts.concat(result)});
						}
					})

			},


			setShowModal: (value) => {
				setStore ({showModal:value})
                    
			},

			cerrarModal: () => {
				setStore({ showModal: false, contactoAEliminar: null });
			},


			eliminarContactoModal : (indexToDelete) => {
				console.log('se esta ejecutando'+ indexToDelete)
                  getActions().setShowModal(true)
				  setStore({indexDelete:indexToDelete}),
				  setStore({ showModal: true, contactoAEliminar: indexToDelete });


			},

			eliminarContacto: (indexToDelete) => {

				const requestOptions = {
					method: "DELETE",
					redirect: "follow"
				  };
				  
				  fetch("https://playground.4geeks.com/contact/agendas/matias/contacts/" + indexToDelete, requestOptions)
					.then((response) => response.text())
					.then((result) => {
						console.log(result)
						setStore({ showModal: false, contactoAEliminar: null });
						fetch("https://playground.4geeks.com/contact/agendas/matias/contacts")
				         .then ((response) => response.json())
				         .then ((data)=> setStore({ contacts: data.contacts }))
					})



				console.log('se va a eliminar el contacto'+ indexToDelete);
				const store = getStore();
				setStore({contacts: store.contacts.filter((contacto,index)=> index != indexToDelete)})
			},


			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log('cargar datos del api')
				fetch("https://playground.4geeks.com/contact/agendas/matias/contacts")
				.then ((response) => response.json())
				.then ((data)=> setStore({ contacts: data.contacts }))
				

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
