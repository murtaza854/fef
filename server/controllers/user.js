const Users = require('../models').users;

module.exports = {
    create(params) {
        return Users.create({
            name: params.name,
            email: params.email.toLowerCase(),
            contactNumber: params.contactNumber,
            organization: params.organization,
            role: params.role,
            emailVerified: params.emailVerified,
            adminApproved: params.adminApproved,
            newsletter: params.newsletter,
            volunteer: params.volunteer,
            password: params.password,
            salt: params.salt,
            superuser: params.superuser
        })
        .then(function(data) {
            return data;
        });
    },
    findByEmail(req, res) {
        return Users.findOne({
            where: {
                email: req
            }
        })
        .then(function(data) {
            return data;
        });
    },
    getAll() {
        return Users.findAll({
            attributes: ['id', 'name', 'email', 'contactNumber', 'organization', 'volunteer', 'role', 'newsletter', 'adminApproved']
        })
        .then(function(data) {
            return data;
        });
    }
}