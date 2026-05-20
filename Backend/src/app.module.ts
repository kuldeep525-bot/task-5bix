import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports:[UserModule,MongooseModule.forRoot("mongodb+srv://rider97797_db_user:lHv1IX4pTVO5w6SN@cluster0.rl1bt3w.mongodb.net/?appName=Cluster0"), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
