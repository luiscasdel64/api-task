import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('HOLA');
    return 'Hello World with NestJS LC!';
    
  }
}
