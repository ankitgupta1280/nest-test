import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RoleService } from './roles/roles.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const seeder = app.get(RoleService)
  await seeder.seed()
  await app.listen(3000);
}
bootstrap();
