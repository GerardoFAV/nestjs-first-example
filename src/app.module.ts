import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';


@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule, PaymentsModule],
})
export class AppModule {}