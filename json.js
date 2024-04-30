function compareJSON(obj1, obj2) {
    let obj1Keys = Object.keys(obj1).sort();
    let obj2Keys = Object.keys(obj2).sort();
  
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
  
    for (let ind = 0; ind < obj1Keys.length; ind++) {
      const key = obj1Keys[ind];
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  let obj1 = { name: "person 1", age: 5 };
  let obj2 = { age: 5, name: "person 1" };
  
  console.log(compareJSON(obj1, obj2)); // Output: true
  