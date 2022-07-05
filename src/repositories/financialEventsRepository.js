import connection from "../database.js";

async function insertNewFinancialEvent(userId, value, type) {
    return connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [userId, value, type]
    );
};

async function selectUserFinancialEvents(userId) {
    return connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [userId]
    );
}

export default financialEventsRepository = {
    insertNewFinancialEvent,
    selectUserFinancialEvents
};