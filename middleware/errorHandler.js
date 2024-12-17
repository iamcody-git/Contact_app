
import { constants } from "../Constants.js";


export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch(statusCode){
      case constants.VALIDATION_ERROR:
        res.json({
          title:'Validation failed',
          message:'err.message',
          stackTrace:err.stack
        });
        break;
      case constants.NOT_FOUND:
        res.json({
          title:'Not found',
          message:err.message,
          stackTrace:err.stack
        });
        break;
      case constants.UNAUTHORIZED:
        res.json({
          title:'unauthorized user',
          message:err.message,
          stackTrace:err.stack
        });
        break;
      case constants.VALIDATION_ERROR:
        res.json({
          title:'invalid user',
          message:err.message,
          stackTrace:err.stack
        });
        break;
      case constants.SERVER_ERROR:
        res.json({
          title:'Internal server error',
          message:err.message,
          stackTrace:err.stack
        });
        break;
        default:
          console.log('All good')
          break;

    }


    res.status(statusCode).json({
      msg: err.message,
      stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  };
  