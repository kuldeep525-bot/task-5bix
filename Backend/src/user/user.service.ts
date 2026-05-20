import { BadRequestException, Injectable,NotFoundException } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()//injectable is useful for dependy injection
export class UserService {

  constructor(@InjectModel(User.name) private userModel:Model<User>){}

  async getAllUser()
  {
    return await this.userModel.find()
  }

 async getUser(id:string)
  {

    const user=await this.userModel.findById(id)
     if (!user) {

      throw new NotFoundException({
        success: false,
        message: 'User not found',
      }
      );
    }

    return user;
  }


 async addUser(user:UserDto)
  {

    if(!user.name || !user.email)
    {
      throw new BadRequestException({
        success:false,
        message:"Name and email are requried"
      })
    }

    const newUser=await this.userModel.create(user)

    return newUser;

  }

async deleteUser(id: string) {

const deleteUser=await this.userModel.findByIdAndDelete(id);

if(!deleteUser)
{
  throw new NotFoundException({
        success: false,
        message: 'User not found',
      });
}

  return deleteUser;
}


async searchUser(name?:string,email?:string)
{
  const user= await this.userModel.find({$or:[{name},{email}]})

  
    if (user.length === 0) {

      throw new NotFoundException({
        success: false,
        message: 'User not found',
      });
    }

  return user;
}

}
