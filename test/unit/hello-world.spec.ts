import {HelloWorld} from 'src/hello-world';

describe("hello-world", function() {
  var a;

  var sayService: any;
  
  beforeEach(() => {
    sayService = jasmine.createSpyObj("sayService", ["sayHello"]);
  });
  
  it("should say hello when the button is clicked", function() {

    // Arrange    
    sayService.sayHello.and.returnValue(true);
    var sut = new HelloWorld(sayService);

    // Act
    sut.onButtonClick();
    
    // Assert
    expect(sayService.sayHello).toHaveBeenCalled();
  });
});