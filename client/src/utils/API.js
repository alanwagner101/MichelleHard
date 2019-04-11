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
    }
}