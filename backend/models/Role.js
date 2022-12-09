const { Schema, model } = require('mongoose');

// const ROLES = ['client', 'coach', 'doctor']

const RoleSchema = Schema({
    name: {
        type: String,
        required: true
    }
    
})

module.exports = model('Role', RoleSchema);