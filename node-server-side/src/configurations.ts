export const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",
  mongo: {
    uri:
      process.env.NODE_ENV === "test"
        ? process.env.MONGO_URI_TESTS
        : process.env.MONGO_URI,
    database:
      process.env.NODE_ENV === "test" ? "simple-api-test" : "simple-api",
  },
};
