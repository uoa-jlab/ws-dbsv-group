const date = new Date();
const ts = date.getTime();

const userData = {
  userid: "wonder",
  password: "$2a$12$1.xj2MA.ogB3QD2V9THgyO5Qt1QuK4pzUTvkvhkf2j8mpV3ENQEEq",
  role: {
    sys: "admin"
  },
  create_at: ts,
  update_at: ts,
  salt: "$2a$12$1.xj2MA.ogB3QD2V9THgyO"
};

db.user.insert(userData);
