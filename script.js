// console.log('Hello 1');
// setTimeout(() => {
    // console.log('Hello 2');
// }, 2000);
// console.log('Hello 3');

const firstName = () => console.log('Nidhi');
const lastName = () => console.log('Suthar');
const printName = () => {
    console.log('My Name is:');
    setTimeout(firstName, 0);
    lastName();
}
printName();