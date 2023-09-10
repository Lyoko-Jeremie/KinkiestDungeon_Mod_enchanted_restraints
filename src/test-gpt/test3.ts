// from GPT-4

const Wears = ['Hat', 'Shirt', 'Shoes'] as const; // 使用 as const 来获得一个 readonly tuple 类型
type Wears = typeof Wears[number]; // 从数组中得出元素类型 ('Hat' | 'Shirt' | 'Shoes')

type WearMethods = {
    [K in Wears as `wear${Capitalize<K>}`]: () => void;
};

// function createPerson(): WearMethods {
//     const obj: Partial<WearMethods> = {};
//
//     (['Hat', 'Shirt', 'Shoes'] as const).forEach(wear => {
//         obj[`wear${wear}`] = () => {
//             console.log(`Wearing a ${wear.toLowerCase()}`);
//         };
//     });
//
//     return obj as WearMethods;
// }

// function PersonFactory(): new () => WearMethods {
//     class Person implements WearMethods {
//         constructor() {
//             (['Hat', 'Shirt', 'Shoes'] as const).forEach(wear => {
//                 this[`wear${wear}`] = () => {
//                     console.log(`Wearing a ${wear.toLowerCase()}`);
//                 };
//             });
//         }
//
//         wearHat!: () => void;
//         wearShirt!: () => void;
//         wearShoes!: () => void;
//     }
//
//     return Person;
// }

// function createPerson(): WearMethods {
//     class Person {
//         constructor() {
//             Wears.forEach(wear => {
//                 (this as any)[`wear${wear}`] = () => {
//                     console.log(`Wearing a ${wear.toLowerCase()}`);
//                 };
//             });
//         }
//     }
//
//     // 创建一个 Person 实例并断言为 WearMethods 类型
//     return new Person() as unknown as WearMethods;
// }

class PersonBase {}

type PersonClassType = new () => PersonBase & WearMethods;

function PersonFactory(): PersonClassType {
    class Person extends PersonBase {
        constructor() {
            super();
            Wears.forEach(wear => {
                (this as any)[`wear${wear}`] = () => {
                    console.log(`Wearing a ${wear.toLowerCase()}`);
                };
            });
        }
    }

    return Person as unknown as PersonClassType;
}

// const PersonClass = createPersonClass();
// const p = new PersonClass();

// const PersonClass = PersonFactory();
// const p = new PersonClass();
// p.wearHat();  // Output: Wearing a hat
// p.wearShirt(); // Output: Wearing a shirt
// p.wearShoes(); // Output: Wearing a shoes


class AAA extends PersonFactory() {
    constructor() {
        super();
    }

    bbb(f: string, a: boolean) {
    }
}

const p = new AAA();
p.wearHat();  // Output: Wearing a hat
p.wearShirt(); // Output: Wearing a shirt
p.wearShoes(); // Output: Wearing a shoes
p.bbb('', false);

export {};
