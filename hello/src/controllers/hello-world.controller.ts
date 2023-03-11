import {get} from '@loopback/rest';

export class HelloWorldController {
  constructor() {}
  @get('/hello-world')
  async helloWorld(): Promise<string> {
    console.log("Hello World!");
    return 'Hello World!';
  }
}
