export default function({ store, redirect, route, $auth}) {
    const savedData = JSON.parse(localStorage.getItem("cart"));

    if(savedData){
        store.commit('localCart',savedData)
    }
    }