var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){
    var num_salaries = 0;
    var currentSal = 0;
    var dataLength = exercise.salaries.length;
    for (var i = 0; i < dataLength; i++) {
        currentSal = Number(exercise.salaries[i][18]);
            if (currentSal > exercise.salary) {
                num_salaries += 1;}
            }
     console.log("Hello");       
    return num_salaries;
        }
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------



// filter function
exercise.largerSalary = function largerSalary(item){
    if (item > exercise.salary)
    {
        return true;
    }
    else
    {
        return false;
    }
}
    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------
