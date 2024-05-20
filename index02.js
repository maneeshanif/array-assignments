let students = [{
        name: "ali",
        grades: [70, 80, 90]
    },
    {
        name: "ahmed",
        grades: [50, 30, 70]
    }, {
        name: "hamza",
        grades: [90, 80, 50]
    }];
function calculateAverageGrade(grade) {
    let total = 0;
    grade.map((e) => { total += e; });
    return total / grade.length;
}
//   let average = calculateAverageGrade(students[0].grades)
//   console.log(average);
students.forEach(obj => {
    console.log(`Average Grade for Student ${obj.name} is:-  ${calculateAverageGrade(obj.grades).toFixed(2)}`);
});
export {};
