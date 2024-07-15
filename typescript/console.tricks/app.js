//console.time & console.timeEnd:
// they are javascriipt methods used to measure the time elapsed b/w the start & end of a code block
console.time("Time");
let l = 0;
for (let i = 0; i < 5; i++) {
    l += i;
}
console.log("total", l); //total: 10
console.timeEnd("Time"); //time:  30.87ms
//console.count:
//JS method used for counting the number of times a specific label has been logged.
//It helps track how often a particualr block of code is executed.
//Each time console.count is called with the same label, it increments the count & logs it to the console
console.count("Hi"); //1
console.count("Hi"); //2
console.count("Hi"); //3
console.count("Hi"); //4
console.count("Hi"); //5
//console.table:
//it is a method in JS that allows to display dataa in a tabular format in the browser console.
//Its particularly useful in the for dubugging & viewing structured data, like arrays or objects, in a more readable form.
let info = [["PHP"], ["Python"], ["JavaScript"], ["TypeScript"]];
console.table(info);
export {};
