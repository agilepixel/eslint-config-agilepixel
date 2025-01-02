const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

const add = (a: number, b: number): number => {
    return a + b;
};

const isEven = (number_: number): boolean => {
    return number_ % 2 === 0;
};

alert(greet('World'));
alert(add(5, 3));
alert(isEven(4));