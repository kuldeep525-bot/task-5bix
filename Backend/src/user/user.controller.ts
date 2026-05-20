import { Body, Controller, Delete, Get, Param,Post, Query} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user') //@controller:decorater

export class UserController {

  //now create object of service class

  //Dependency Injection:we can make object into the controller constructor with service class

  constructor(private readonly userService:UserService ){}

  
  @Get()
  getAllUsers()
  {
    return this.userService.getAllUser()
  }

  //for searching

  @Get('search')
  
  searchUser(@Query('name') name:string,@Query('email') email:string){
    return this.userService.searchUser(name,email)
  }

  @Get(':id')
  getUser(@Param('id') id:string)
  {

      return this.userService.getUser(id)
  }

  //delete by user id

  @Delete(':id')
deleteUser(@Param('id') id: string) {
   return this.userService.deleteUser(id);
}

  @Post()
  addUser(@Body() user:UserDto)
  {
    return this.userService.addUser(user)
  }

  


}
