declare module 'test-plugin' {
	export class SayService {
	    private logger;
	    sayHello(): void;
	}

}
declare module 'test-plugin' {
	import { SayService } from 'say-service';
	export class HelloWorld {
	    private sayService;
	    constructor(sayService: SayService);
	    onButtonClick(): void;
	}

}
declare module 'test-plugin' {
	export function configure(config: any): void;

}
