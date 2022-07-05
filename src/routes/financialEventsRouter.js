import { Router } from "express";
import { validateToken } from "../middlewares/tokenMiddlware.js";
import { getUserFinancialEvents, getUserFinancialEventsSum, setFinancialEvent } from "../controllers/financialEventsController.js";

const financialEventsRouter = Router();

financialEventsRouter.post("/financial-events", validateToken, setFinancialEvent);
financialEventsRouter.get("/financial-events", validateToken, getUserFinancialEvents);
financialEventsRouter.get("/financial-events/sum", validateToken, getUserFinancialEventsSum);


export default financialEventsRouter;