import jwt from "jsonwebtoken";

export async function validateToken(req, res, next) {
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");

    if (!token) {
        throw {
            type: "unauthorized",
            message: "invalid token."
        };
    }

    let user;

    try {
        user = jwt.verify(token, process.env.JWT_SECRET);
        res.locals.user = user;
    } catch {
        throw {
            type: "unauthorized",
            message: "invalid token."
        };
    }

    next();
}