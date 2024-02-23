const makeChange = (num) => {
  // your name here
	 let obj = {
        0: ["Quarter", 25],
        1: ["Dime", 10],
        2: ["Nickel", 5],
        3: ["Penny", 1],
      };
	
	let arr = []
        let quarter = 0,
          dime = 0,
          nickel = 0,
          penny = 0;
        while (num > 0) {
          if (num >= obj[0][1]) {
            num = num - obj[0][1];
            quarter++;
          }
          if (num >= obj[1][1] && num < obj[0][1]) {
            num = num - obj[1][1];
            dime++;
          }
          if (num >= obj[2][1] && num < obj[1][1]) {
            num = num - obj[2][1];
            nickel++;
          }
          if (num >= obj[3][1] && num < obj[2][1]) {
            num = num - obj[3][1];
            penny++;
          }
        }
        arr.push(quarter, dime, nickel, penny);
        let q, d, n, p;
        const obj1 = Object.assign(
          { q: quarter, d: dime, n: nickel, p: penny}
        );
        return obj1;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
