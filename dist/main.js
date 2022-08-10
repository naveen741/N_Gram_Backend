"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    const appPort = process.env.PORT || '5000';
    await app.listen(appPort);
    console.log(`server running on : 'http://localhost:${appPort}/graphql'`);
}
bootstrap();
//# sourceMappingURL=main.js.map