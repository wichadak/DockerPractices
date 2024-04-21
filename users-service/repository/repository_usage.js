repository.connect({
  host: "127.0.0.1",
  database: "users",
  user: "users_service",
  password: "123",
  port: 5002
}).then((repo) => {
  repo.getUsers().then(users) => {
    console.log(users);
  });
  repo.getUserByEmail('homer@thesimpsons.com').then((user) => {
    console.log(user);
  })
  //  ...when you are done...
  repo.disconnect();
});
