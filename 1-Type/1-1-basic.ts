{
    /*
    * Javascript
    * Primitive : number, string, boolean, bigint, symbol, null, undefined
    * Object : function, array...
    * */
    // number
    const num:number = -3;

    // string
    const str:string = '3';

    // boolean
    const boal:boolean = true;

    // undefined 값을 아직 정의하지 않은 상태
    let name:undefined; // 개똥같은 코드이다. 단독적으로는 쓰지 않는다.
    let age:number | undefined;
    age = undefined;
    age = 3;
    function find():number | undefined {
        return undefined;
    }
    // null 값이 그냥 비었다. null 도 단독으로 사용하지 않는다. 왜냐하면 값을 null 만 받을 경우는 거의 없다.
    let person:string | null;
    person = null;
    person = "apple";

    // unknown : 어떠한 종류의 값이 들어올지 알수없을떄 사용한다. 가능하면 쓰지 않는게 좋다.
    // 쓰면 안좋은데 왜 있는가? 그 이유는 타입이 없는 자바스크립트와 연동해서 쓸수 있기 떄문인데
    // 타입스크립트에서 자바스크립트 라이브러리를 이용할때 리턴값을 알수 없기 때문에 존재한다.
    let notSure: unknown;
    notSure = 3;
    notSure = 'hi';
    notSure = false;

    // any : 어떤것이든 담을수 있는 변수 : 이것도 가능하면 쓰지않는것이 좋다.
    let anything:any = 0;
    anything = 'hello';

    //void : 생략할수 있다. 하지만 회사나 프로젝트의 컨벤션에 따라 적어주거나 생략할 수 있다.
    // 아래의 함수는 아무것도 리턴하지 않고 있다. 즉 console.log('hello') 다음에는 return; 이 값이 생략이 되어있다.
    // prtin() 위에 마우스를 올리면 :void가 선언이 되어있다.
    function print():void {
        console.log('hello');
        return;
    }
    // void 를 변수에 할당할수 있는건 undefined 밖에 없기때문에 활용성이 떨어진다. 이렇게 선언하는경우는 본적이 없다
    let unusable:void = undefined;

    // never : 함수내에서 절대 리턴되지 않는 경우를 명시하기 위해 사용
    function throwError(message:string):never {
        // message -> server (log)
        throw new Error(message);
    }
    let neverEnding:never; // => 절대 있어선 안됨

    // objet
    let obj:object; // 이 타입도 사용하지 않는게 좋. object 타입도 좀더 명확하게 타입을 작성하는게 좋다.
    function acceptSomeObject(obj:object) {
        console.log(obj);
    }
    acceptSomeObject({name:"안병욱",age:31})
    acceptSomeObject({animal:"dog"})
    acceptSomeObject([1,2,3,4]);
}