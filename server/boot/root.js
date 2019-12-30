'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);


    server.models.Agent.create([
    {username: 'admin1', nom: 'admin', email: 'guynkama@gmail.com', password: 'TruePass4'}
], function(err, users) {
    if (err) /*return debug('%j', err);*/
    console.log(err);
    //console.log(users);
    // Create the admin role
    server.models.Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) return /*debug(err);*/console.log(err);
      console.log(role);

      // Make admin1 an admin
      role.principals.create({
        principalType: server.models.RoleMapping.USER,
        principalId: users[0].id
      }, function(err, principal) {
        if (err) return debug(err);
        console.log(principal);
      });
    });
  });
};

