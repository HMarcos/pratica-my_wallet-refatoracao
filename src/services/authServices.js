import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRespository.js";

async function signUp(name, email, password) {
    if (!name || !email || !password) {
        throw {
            type: "unprocessableEntity",
            message: "Semantic error"
        };
    }

    const existingUsers = await userRepository.selectUserByEmail(email);

    if (existingUsers.rowCount > 0) {
        throw {
            type: "conflict",
            message: "user already registered"
        };
    }

    const hashedPassword = bcrypt.hashSync(password, 12);

    await userRepository.insertNewUser(name, email, hashedPassword);
}

async function signIn(email, password) {

    if (!email || !password) {
        throw {
            type: "unprocessableEntity",
            message: "Semantic error"
        };
    }

    const { rows } = await userRepository.selectUserByEmail(email);

    const [user] = rows;

    if (!user || !bcrypt.compareSync(password, user.password)) {
        throw {
            type: "unauthorized",
            message: "email or password is incorrect."
        };
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET
    );

    return token;

}

export default authServices = {
    signUp,
    signIn
}

