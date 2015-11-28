declare module 'test-plugin/say-service' {
	export class SayService {
	    private logger;
	    sayHello(): void;
	}

}
declare module 'test-plugin/hello-world' {
	import { SayService } from 'test-plugin/say-service';
	export class HelloWorld {
	    private sayService;
	    constructor(sayService: SayService);
	    onButtonClick(): void;
	}

}
declare module 'test-plugin/index' {
	export { HelloWorld } from 'test-plugin/hello-world';
	export { SayService } from 'test-plugin/say-service';
	export function configure(config: any): void;

}
declare module 'test-plugin' {
	import main = require('test-plugin/index');
	export = main;
}
