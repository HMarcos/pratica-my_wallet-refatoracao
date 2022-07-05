import financialEventsServices from "../services/financialEventsServices.js";

export async function setFinancialEvent(req, res) {

    const { value, type } = req.body;
    const { user } = res.locals;

    await financialEventsServices.setFinancialEvent(value, type, user.id);

    res.sendStatus(201);
};

export async function getUserFinancialEvents(req, res) {

    const { user } = res.locals;
    const events = await financialEventsServices.getUserFinancialEvents(user.id);
    res.send(events);

}

export async function getUserFinancialEventsSum(req, res) {
    const { user } = res.locals;
    const sum = await financialEventsServices.getUserFinancialEventsSum(user.id);
    res.send({ sum });
}