import axios from "axios";

export default {
    getAdmin: function() {
        return axios.get("http://localhost:3001/api/admin")
    },
    saveAdmin: function(adminData) {
        return axios.post("http://localhost:3001/api/admin", adminData)
    },
    deleteAdmin: function(id) {
        return axios.delete("http://localhost:3001/api/admin/" + id)
    },
    getEvent: function() {
        return axios.get("http://localhost:3001/api/schedule")
    },
    saveEvent: function(eventData) {
        return axios.post("http://localhost:3001/api/schedule", eventData)
    },
    deleteEvent: function(id) {
        return axios.delete("http://localhost:3001/api/schedule/" + id)
    },
    getProdType: function() {
        return axios.get("http://localhosts:3001/api/prodtype")
    },
    saveProdType: function(prodTypeData) {
        return axios.post("http://localhost:3001/api/prodtype", prodTypeData)
    },
    deleteProdType: function(id) {
        return axios.delete("http://locaLhost:3001/api/prodtype/" + id)
    },
    getProduct: function() {
        return axios.get("http://localhost:3001/api/products")
    },
    saveProduct: function(productData) {
        return axios.post("http://localhost:3001/api/products", productData)
    },
    deleteProduct: function(id) {
        return axios.delete("http://localhost:3001/api/products/" + id)
    }
}