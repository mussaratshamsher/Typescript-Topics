//Enum & const Enum
//Enum
//an enum is a way to define a set of named constants. 
//It allows developers to create a collection of related values
//Enums are useful for defining  working with a fixed set of values.i.e.days of the week,colors, or status codes. 
//They provide type safety and readability to the code 
//rather than using enum , const enum is preferred
//Enum value counts from zero like index value
//Syntax: enum vairable{constant object}
          //log statement
          enum car {'Alto', 'Mehran', 'Suzuki', 'Cultus'}         
          console.log(car[1]); //giving index to log element 'Mehran'
          console.log(car['Suzuki']); //accessing index using element
          
          //Q: Enum for days of week. function that takes a day as an argument & returns "Weekend" if Saturday/Sunday & 
          // "Weekday" for other days.
          enum days{
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
          }
          function enumDays(days: [key:string] ){
           }
          console.log(days.wednesday); //gives index of wed
          console.log(days[5]);  // gives value on given index
          
          //const Enum
          //Using const enums can improve performance and reduce memory overhead
          //by eliminating unnecessary runtime objects created by regular enums.
          //there is no JavaScript representation for const enums,
          //they can only include constant members (such as string literals or numbers),
          //they can't take auto incremented values but enums take
          
          const enum Color {Red, Green, Blue};//starts with 0
          var c: Color = Color.Green;
          const enum Color1 {Red = 1, Green, Blue};
          //var colorName: string = Color[2]; //Not allowed with const enums
          //console.log(colorName);
          
          const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
          var colorIndex = Color2["Blue"];
          console.log(colorIndex);
          
          
          