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
    }
}