import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

if (!JWT_SECRET && process.env.NODE_ENV === 'development') {
  const err = new Error('No_JWT_SECRET_KEY');
  err.message = 'JWT_SECRET is Missing';
  throw err;
}

export const generateToken = async (payload, options) => {
  const jwtOptions = {
    issuer: '2021exhibition.online',
    expiresIn: '7d',
    ...options,
  };
  
  if (!jwtOptions.expiresIn) {
    delete jwtOptions.expiresIn;
  }
  
  return new Promise((resolve, reject) => {
    if (!JWT_SECRET) return;
    jwt.sign({ ...payload }, JWT_SECRET, jwtOptions, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

export const decodeToken = async <T>(token) : Promise<T> =>
    new Promise((resolve, reject) => {
      if (!JWT_SECRET) return;
      jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) reject(err);
        resolve(decoded);
      });
    });
