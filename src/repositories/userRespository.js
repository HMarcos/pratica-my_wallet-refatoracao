import connection from "../database.js";

async function selectUserByEmail(email) {
    return connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email])
}

async function insertNewUser(name, email, password) {
    return connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, password]
    );
}

export default userRepository = {
    selectUserByEmail,
    insertNewUser
}