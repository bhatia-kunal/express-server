"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor(config) {
        this.config = config;
        this.app = express();
    }
    bootstrap() {
        this.setupRoutes();
        return this;
    }
    setupRoutes() {
        const { app, config: { Port } } = this;
        this.app.use('/health-check', (req, res) => {
            res.json({
                msg: 'I am OKAY'
            });
        });
    }
    run() {
        const { app, config: { Port } } = this;
        app.listen(Port, (error) => {
            if (error) {
                throw error;
            }
            console.log(`Server running on Port ${Port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=Server.js.map