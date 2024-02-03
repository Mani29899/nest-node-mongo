import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument  ,} from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { USERS } from 'src/constants';

@Injectable()
export class UserService {
   
  constructor(@InjectModel(USERS) private readonly userModel:Model<UserDocument>) {}

  create(createUserDto: CreateUserDto) {
    return this.userModel.create({...createUserDto});
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findOne({_id:id});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({_id:id} , {...updateUserDto})
  }

  remove(id: string) {
    return this.userModel.deleteOne({_id:id});
  }
}
