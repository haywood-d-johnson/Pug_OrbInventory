module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.ORB_INVENTORY_PASS,
        database: process.env.ORB_INVENTORY_DB,
        host: "127.0.0.1",
        dialect: "postgres",
        seederStorage: "sequelize",
    },
};