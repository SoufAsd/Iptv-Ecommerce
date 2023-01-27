export default function({ store, redirect, route}) {
    const savedData = JSON.parse(localStorage.getItem("cart"));
    if(savedData){
        
        store.commit('localCart',savedData)
    }
    }