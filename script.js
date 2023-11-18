const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter(person => person.profession.toLowerCase() === "developer");

    if (developers.length > 0) {
        const outputMessage = developers.map(person => `${person.name}: ${person.profession}`).join('\n');
        alert(`Developers:\n${outputMessage}`);
    } else {
        alert("No developers found");
    }
  }
  
  // 2. Add Data
  function addData() {
    const newName = prompt("Enter the name:");
    const newAge = parseInt(prompt("Enter the age:"));
    const newProfession = prompt("Enter the profession:");

    // Validate input
    if (newName && !isNaN(newAge) && newProfession) {
        // Create a new data object
        const newData = { name: newName, age: newAge, profession: newProfession };

        // Add the new data object to the array
        data.push(newData);

        // Display the updated array using an alert
        alert("Updated Array:\n" + JSON.stringify(data, null, 2));
    } else {
        alert("Invalid input. Please provide valid data.");
    }
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const newData = data.filter(person => person.profession.toLowerCase() !== "admin");

    // Display the updated array using an alert
    alert("Array without Admins:\n" + JSON.stringify(newData, null, 2));
   
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray=['xyz',20,'ops'];
    const concatenatedData = data.concat(dummyArray);

    // Display the concatenated array using an alert
    alert("Concatenated Array:\n" + JSON.stringify(concatenatedData, null, 2));

  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((x, y) => x + y.age, 0);

    // Calculate the average age
    const avgAge = totalAge / data.length;

    // Display the average age using an alert
    alert("Average Age: " + avgAge.toFixed(2));
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(person => person.age > 25);

    // Display the result using an alert
    if (isAbove25) {
        const agesAbove25 = data.filter(person => person.age > 25).map(person => person.age).join(', ');
        alert("At least one person is above 25 is : " + agesAbove25);
    } else {
        alert("No person is above 25.");
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professionsSet = new Set(data.map(person => person.profession));

    // Convert Set back to an array
    const uniqueProfessionsArray = Array.from(professionsSet);

    // Display the unique professions using an alert
    alert("Unique Professions:\n" + uniqueProfessionsArray.join(', '));
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedData = data.slice().sort((a, b) => a.age - b.age);

    // Display the sorted array using an alert
    alert("Sorted by Age:\n" + JSON.stringify(sortedData, null, 2));
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const updatedData = data.map(person => {
        if (person.name.toLowerCase() === 'john') {
            return { person, profession: 'manager' };
        }
        return person;
    });

    // Display the updated array using an alert
    alert("Updated John's Profession:\n" + JSON.stringify(updatedData, null, 2));
  }
  
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = data.reduce((x, person) => {
        x[person.profession] = (x[person.profession] || 0) + 1;
        return x;
    }, {});

    // Display the profession count using an alert
    alert("Profession Count:\n" + JSON.stringify(professionCount, null, 2));
  }