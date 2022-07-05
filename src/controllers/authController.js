import authServices from "../services/authServices.js";

export async function signUp(req, res) {
    const { name, email, password } = req.body;
    await authServices.signUp(name, email, password);
    res.sendStatus(201);
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    const token = await authServices.signIn(email, password);

    res.send({
        token,
    });
}