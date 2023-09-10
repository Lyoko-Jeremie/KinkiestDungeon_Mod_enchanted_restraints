// 工厂函数，用于创建带有动态方法的类实例
function createPerson(name: string, words: string[]) {
    class Person {
        constructor(public name: string) {
            words.forEach((word) => {
                const methodName = `wear${word}`;
                (this as any)[methodName] = function (this: Record<string, any>) {
                    console.log(`Wearing ${word}`);
                };
            });
        }

        sayHello() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }

    return new Person(name);
}

// 创建 Person 的实例并调用添加的函数
const person = createPerson('John', ['Hat', 'Shirt', 'Shoes']);
person.sayHello(); // 输出 "Hello, my name is John"
// person.wearHat(); // 输出 "Wearing Hat"
// person.wearShirt(); // 输出 "Wearing Shirt"
// person.wearShoes(); // 输出 "Wearing Shoes"

export {};
