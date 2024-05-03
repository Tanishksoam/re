export declare namespace ConfigurationServiceObject {
    enum Key {
        PORT = "PORT",
        ENVIRONMENT = "NODE_ENV",
        CLIENT_BASE_URL = "SERVER_CLIENT_BASE_URL",
        BASE_URL = "SERVER_BASE_URL",
        AUTHENTICATION_TOKEN_METHOD = "SERVER_AUTHENTICATION_TOKEN_METHOD"
    }
    enum Environment {
        DEVELOPMENT = "development",
        PRODUCTION = "production"
    }
    enum AuthenticationTokenMethod {
        COOKIES = "cookies",
        HEADER = "header"
    }
}
