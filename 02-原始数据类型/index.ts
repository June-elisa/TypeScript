let isDone:boolean = false;

// 使用构造函数Boolean创造的对象不是布尔值
// let createByNewBoolean:boolean = new Boolean(1)
let createByBoolean:boolean = Boolean(1)

// 数值类型
let num:number =6;
let notanumber:number = NaN;
let infinityNumber:number = Infinity;

// 字符串
let myName:string = "小新"
let content:string = `我是${myName}`


// 箭头函数
let add = (a:number,b:number) :number => a+b;

// 空值,如果返回值是空值的话，void
function sayName(name:string) :void{
    console.log(name);
    
}