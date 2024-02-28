const AGENDA_SLUG = 'test';

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
				}
			],
			contacts: [
				{
					"address": "11 fangoalpecho dr",
					"agenda_slug": "test",
					"email": "rene@gmail.com",
					"full_name": "rene",
					"id": 11625172689,
					"phone": "412-523-3252"
				},]
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadContacts: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/' + AGENDA_SLUG)
					.then((data) => {
						const contacts = data.json();
						setStore({ contacts: contacts });
						console.log(setStore({ contacts: contacts }))
					})
			},
			getContact: (id) => {
				fetch('https://playground.4geeks.com/apis/fake/contact/' + id)
					.then((response) => {
						console.log('response GET', response.json())
					})
					.catch(error => {
						console.log('ERROR POST', error);
					})
			},
			createContact: (fullName, email, address, phone) => {
				setStore({ isLoading: true });

				fetch('https://playground.4geeks.com/apis/fake/contact/', {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullName,
						agenda_slug: AGENDA_SLUG,
						email,
						address,
						phone
					})
				})
					.then(response => {
						console.log('response POST', response.json());
						setStore({ isLoading: false });
					})
					.catch(error => {
						console.log('ERROR POST', error);
						setStore({ isLoading: false });
					})
			},
			updateContact: (fullName, email, address, phone, id) => {
				setStore({ isLoading: true })

				fetch('https://playground.4geeks.com/apis/fake/contact/' + id, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						full_name: fullName,
						agenda_slug: AGENDA_SLUG,
						email,
						address,
						phone
					})
				})

					.then(response => {
						console.log('response PUT', response.json())
						setStore({ isLoading: false });
					})
					.catch(error => {
						console.log('ERROR POST', error);
						setStore({ isLoading: false });
					})

			},
			deleteContact: (id) => {
				fetch('https://playground.4geeks.com/apis/fake/contact/' + id, {
					method: "DELETE",
				})
					.then(response => {
						console.log('response DELETE', response.json())
					})
					.catch(error => {
						console.log('ERROR POST', error);
					})
			},
			deleteAllContacts: () => {
				fetch('https://playground.4geeks.com/apis/fake/contact/agenda/' + AGENDA_SLUG, {
					method: "DELETE",
				})
					.then(response => {
						console.log('response DELETE', response.json())
					})
					.catch(error => {
						console.log('ERROR POST', error);
					})
			}

		}
	};
};

export default getState;
