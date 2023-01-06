import { Request, Response } from 'express';

interface IError extends Error {
  status?: number;
}

const errorHandler = (err: IError, req: Request, res: Response, next: any) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    statusCode: statusCode,
  });
};

module.exports = {
  errorHandler,
};
