import axios from "axios";

export default {
    getAdmin: function() {
        return axios.get("https://morning-stream-59911.herokuapp.com/api/admin")
    },
    saveAdmin: function(adminData) {
        return axios.post("https://morning-stream-59911.herokuapp.com/api/admin", adminData)
    },
    deleteAdmin: function(id) {
        return axios.delete("https://morning-stream-59911.herokuapp.com/api/admin/" + id)
    },
    getEvent: function() {
        return axios.get("https://morning-stream-59911.herokuapp.com/api/schedule")
    },
    saveEvent: function(eventData) {
        return axios.post("https://morning-stream-59911.herokuapp.com/api/schedule", eventData)
    },
    deleteEvent: function(id) {
        return axios.delete("https://morning-stream-59911.herokuapp.com/api/schedule/" + id)
    },
    getProdType: function() {
        return axios.get("http://localhosts:3001/api/prodtype")
    },
    saveProdType: function(prodTypeData) {
        return axios.post("https://morning-stream-59911.herokuapp.com/api/prodtype", prodTypeData)
    },
    deleteProdType: function(id) {
        return axios.delete("https://morning-stream-59911.herokuapp.com/api/prodtype/" + id)
    },
    getProduct: function() {
        return axios.get("https://morning-stream-59911.herokuapp.com/api/products")
    },
    saveProduct: function(productData) {
        return axios.post("https://morning-stream-59911.herokuapp.com/api/products", productData)
    },
    deleteProduct: function(id) {
        return axios.delete("https://morning-stream-59911.herokuapp.com/api/products/" + id)
    }
}