import { createUserService } from "../models/userModels";

//standard response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newuser = await createUserService(name, email);
    handleResponse(res, 201, "User Created successfully", newUser);
  } catch (err) {
    next(err);
  }
};
