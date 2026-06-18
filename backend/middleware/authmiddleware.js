import jwt from "jsonwebtoken";

export const requireUserAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const tokenFromBearer = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
    const tokenFromHeader = req.headers.token;
    const token = tokenFromBearer || tokenFromHeader;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      userType: decoded.userType,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: invalid token",
    });
  }
};


export const requireAdminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const tokenFromBearer = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
    const tokenFromHeader = req.headers.token;
    const token = tokenFromBearer || tokenFromHeader;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      userType: decoded.userType,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: invalid token",
    });
  }
};

export const requireSubadminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const tokenFromBearer = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
    const tokenFromHeader = req.headers.token;
    const token = tokenFromBearer || tokenFromHeader;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: token missing",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.id,
      userType: decoded.userType,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: invalid token",
    });
  }
};
