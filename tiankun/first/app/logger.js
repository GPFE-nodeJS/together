const logger = (format) => {
  format = format || ':method ":url"';
  return async(ctx, next) => {
    const str = format.replace(':method', ctx.method).replace(':url', ctx.url);
    console.log("logger:", str);
    await  next();
  };
};

export default logger;