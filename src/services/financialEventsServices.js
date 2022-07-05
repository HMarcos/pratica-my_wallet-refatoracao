import financialEventsRepository from "../repositories/financialEventsRepository.js";

async function setFinancialEvent(value, type, userId) {
    if (!value || !type) {
        throw {
            type: "unprocessableEntity",
            message: "Semantic error"
        };
    }

    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) {
        throw {
            type: "unprocessableEntity",
            message: "Semantic error"
        };
    }

    if (value < 0) {
        throw {
            type: "unprocessableEntity",
            message: "Semantic error"
        };
    }

    await financialEventsRepository.insertNewFinancialEvent(userId, value, type);
}

async function getUserFinancialEvents(userId) {

    const events = await financialEventsRepository.selectUserFinancialEvents(userId);
    return events.rows;
}

async function getUserFinancialEventsSum(userId) {
    const events = await financialEventsRepository.selectUserFinancialEvents(userId);

    const sum = events.rows.reduce(
        (total, event) =>
            event.type === "INCOME" ? total + event.value : total - event.value,
        0
    );

    return sum;
}

export default financialEventsServices = {
    setFinancialEvent,
    getUserFinancialEvents,
    getUserFinancialEventsSum
}