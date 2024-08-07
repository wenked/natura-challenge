import type { NextFunction, Request, Response } from 'express';
import { type AnyZodObject, ZodError } from 'zod';

export const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedParams = await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      if (parsedParams.body) {
        req.body = parsedParams.body;
      }

      if (parsedParams.query) {
        req.query = parsedParams.query;
      }

      if (parsedParams.params) {
        req.params = parsedParams.params;
      }

      console.log({ parsedParams });

      next();
      return null;
    } catch (error) {
      console.error(error);
      if (error instanceof ZodError) {
        return res.status(400).json({
          status: 'error',
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        });
      }
      next(error);
      return null;
    }
  };
