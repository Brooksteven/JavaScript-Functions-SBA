//This assignment was done with starter code given by my instructor through CodeSandbox.
//In this assignment I will be Gathering Data, Processing the Data, and Outputing the Data

//This is the data I need to take in and will be working with
// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  //this data is what I can use to calculate scores, apply penalties, and organize results
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07", //this is the only assignment that is late
        score: 140
      }
    }
  ];
  
  //Step 1 - I am checking to see if the assignments actually belong to the Introduction to JavaScript class
  function getLearnerData(course, ag, submissions) {
    //Step 1 - Check if the AssignmentGroup ID matches the course_id. We can do this by using an Error 
    //Resource: 308H.2 - Erros Section
try { 
    if (AssignmentGroup.course_id !== CourseInfo.id){
    throw `Error, the id's don't match!`
} else {
    // console.log(`The id's match!`)
}
}catch (error){
    // console.log(error)
}
  }


  //Step 2 - Filter Out Assignments that aren't due yet because we don't want to include it in the results or the average.
//So I'll do this by using the old data and doing a loop that will filter through by using .filter() and add it to a new string and then return result.
let todaysDate = "2025-03-06"
//here I am going to manually declare todaysDate so I can can compare it to assignment due dates.
//I used today's date because as long as its anything at or after 11/15/3156 it will work so I used todays date.

let dueAssignments = []
//I'm creating this empty array because this is where I want to store the correct due dates after filtering out the 3156-11-15 date and I'll filter out by using a for loop.

for (let i = 0; i < AssignmentGroup.assignments.length; i++){
    //here I created a for loop to run through my if staments. It will run through 3 times which will be an index of 2.

    let assignment = AssignmentGroup.assignments[i]
    //I want to declare a new variable that will only be valid to this scope, but I want to create it so I can grab a hold of each assignment. [i] is what will allow me to do that while running through the for loop.
    //Each assignment including the assignment with the past due date will be stored into assignment and thats okay because we wan't to run everything through our if else statement.


    //here I am creating an if else statement to run through all assignments and the assignments that are not less than or equal to todaysDate will not be pushed through to due assignments
    if (assignment.due_at <= todaysDate){
        //here I am pushing all assignments to my new empty array "dueAssignments" that were stored in my declared varaible "assignment" that is <= todays date
        dueAssignments.push(assignment)
    }
}

// console.log(dueAssignments)


//Step 3 - here we are going to store the learners data in an empty object.
//this is where all the learner data will be stored and organized as it is being processed
let learnerData = {}


//Step 4 - Iterate through each learners submission to find the assignment that was submitted. Then check if that assignment is valid (not yet due) so we don't include it in the results or the average. I'm grabbing these so I can calculate the learners scores.
for (let i = 0; i < LearnerSubmissions.length; i++) {
    
    //here is where we are going to grab each submission from LearnerSubmissions and run it through the loop
    //I''m grabbing this so we can extract data from it
    let submission = LearnerSubmissions[i]

    //here is where we are going to grab each learner's ID
    //Error: At first I tried LearnerSubmissions.learner_id, but I found out it doesn't work because LEarnerSubmissions is an array, and to make this work we need a single object like submissions from the parameter above or LearnerSubmissions[i], I think... we'll see.
    //I'm grabbing this so we can group scores correctly for each learner
    let learnerId = LearnerSubmissions[i].learner_id

    //last here is where are grabbing each assignment ID
    //I'm grabbing this data so we can find the matching assignment
    let assignmentID = LearnerSubmissions[i].assignment_id

    console.log(submission)
    //Step 4 - here we are going to look through (aka loop through) dueAssignments to find the assignment that matches our assignmentID that we created in Step 4.
    //this will allow us to sort through the student work and figure out who submitted what.
    //this data is the learners submitted assignments that we are sorting through.

    


}




//I added this { infornt of const result
  {  const result = [
      {
        id: 125,
        avg: 0.985, // (47 + 150) / (50 + 150)
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      },
      {
        id: 132,
        avg: 0.82, // (39 + 125) / (50 + 150)
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    ];
  
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  

  //Step 1 - I want to see my information and how it is looking in the console.log first so I kow what I am working with
//   console.log("Course Information:", CourseInfo);
//   console.log("Assignment Group:", AssignmentGroup);
//   console.log("Learner Submissions", LearnerSubmissions);

const str = ["Hello World", "bye bye birdy"];

for (const i in str) {
    console.log(str[i]);
}