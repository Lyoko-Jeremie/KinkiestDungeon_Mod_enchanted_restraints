// 定义一个装饰器函数，用于为类添加函数


function wearFunctions(words: string[]) {
    return function <T extends { new (...args: any[]): {} }>(constructor: T) {
        class Wearable extends constructor {
            constructor(...args: any[]) {
                super(...args);
                words.forEach((word) => {
                    const methodName = `wear${word}`;
                    (this as any)[methodName as keyof this] = function (this: any) {
                        console.log(`Wearing ${word}`);
                    };
                });
            }
        }
        return Wearable;
    };
}

// 使用装饰器为类添加函数
@wearFunctions(['Hat', 'Shirt', 'Shoes'])
class Person {
    constructor(public name: string) {
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// 创建 Person 的实例并调用添加的函数
const person = new Person('John');
person.sayHello(); // 输出 "Hello, my name is John"
// person.wearHat(); // 输出 "Wearing Hat"
// person.wearShirt(); // 输出 "Wearing Shirt"
// person.wearShoes(); // 输出 "Wearing Shoes"

export {};
