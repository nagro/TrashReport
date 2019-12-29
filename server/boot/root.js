'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};


User.create([
    {username: 'admin1', email: 'guynkama@gmail.com', password: 'TruePass4'}
], function(err, users) {
    if (err) return debug('%j', err);
    // Create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) return debug(err);
      debug(role);

      // Make admin1 an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) return debug(err);
        debug(principal);
      });
    });
  });