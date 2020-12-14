"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    console.log(process.env.PORT);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.enableCors();
    await app.listen(process.env.PORT, process.env.HOST);
}
bootstrap();
//# sourceMappingURL=main.js.map