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
  //these are the learners
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
  
//   //Step 1 - I am checking to see if the assignments actually belong to the Introduction to JavaScript class
//   function getLearnerData(course, ag, submissions) {
//     //Step 1 - Check if the AssignmentGroup ID matches the course_id. We can do this by using an Error 
//     //Resource: 308H.2 - Erros Section
// try { 
//     if (AssignmentGroup.course_id !== CourseInfo.id){
//     throw `Error, the id's don't match!`
// } else {
//     // console.log(`The id's match!`)
// }
// }catch (error){
//     // console.log(error)
// }
//   }


//   //Step 2 - Filter Out Assignments that aren't due yet because we don't want to include it in the results or the average.
// //So I'll do this by using the old data and doing a loop that will filter through by using .filter() and add it to a new string and then return result.
// let todaysDate = "2025-03-06"
// //here I am going to manually declare todaysDate so I can can compare it to assignment due dates.
// //I used today's date because as long as its anything at or after 11/15/3156 it will work so I used todays date.

// let dueAssignments = []
// //I'm creating this empty array because this is where I want to store the correct due dates after filtering out the 3156-11-15 date and I'll filter out by using a for loop.


// for (let i = 0; i < AssignmentGroup.assignments.length; i++){
//     //here I created a for loop to run through my if staments. It will run through 3 times which will be an index of 2.

//     let assignment = AssignmentGroup.assignments[i]
//     //I want to declare a new variable that will only be valid to this scope, but I want to create it so I can grab a hold of each assignment. [i] is what will allow me to do that while running through the for loop.
//     //Each assignment including the assignment with the past due date will be stored into assignment and thats okay because we wan't to run everything through our if else statement.


//     //here I am creating an if else statement to run through all assignments and the assignments that are not less than or equal to todaysDate will not be pushed through to due assignments
//     if (assignment.due_at <= todaysDate){
//         //here I am pushing all assignments to my new empty array "dueAssignments" that were stored in my declared varaible "assignment" that is <= todays date
//         dueAssignments.push(assignment)
//     }
// }

// // console.log(dueAssignments)


// //Step 3 - here we are going to store the learners data in an empty object.
// //this is where all the learner data will be stored and organized as it is being processed
// let learnerData = {}


// //Step 4 - Iterate through each learners submission to find the assignment that was submitted. Then check if that assignment is valid (not yet due) so we don't include it in the results or the average. I'm grabbing these so I can calculate the learners scores.
// for (let i = 0; i < LearnerSubmissions.length; i++) {
    
//     //here is where we are going to grab each submission from LearnerSubmissions and run it through the loop
//     //I''m grabbing this so we can extract data from it
//     let submission = LearnerSubmissions[i]

//     //here is where we are going to grab each learner's ID
//     //Error: At first I tried LearnerSubmissions.learner_id, but I found out it doesn't work because LEarnerSubmissions is an array, and to make this work we need a single object like submissions from the parameter above or LearnerSubmissions[i], I think... we'll see.
//     //I'm grabbing this so we can group scores correctly for each learner
//     let learnerId = LearnerSubmissions[i].learner_id

//     //last here is where are grabbing each assignment ID
//     //I'm grabbing this data so we can find the matching assignment
//     let assignmentId = LearnerSubmissions[i].assignment_id

//     // console.log(submission)
//     //Step 4 - here we are going to look through (aka loop through) dueAssignments to find the assignment that matches our assignmentID that we created in Step 4.
//     //this will allow us to sort through the student work and figure out who submitted what.
//     //this data is the learners submitted assignments that we are sorting through.


//     //Step 5 - Here is where I put together a loop to find the matching assignments by looping through each dueAssignment and making it equal to assignmentId.
//     //I am setting let matchedAssignment to null instead of an {} because it doesn't have a value yet. 
//     //I am searching for a value so I'm using null. I use {} only if I need an empty object with properties.
//     //null in this case is the absence of an object because at this point we haven't found a matching assignment. So null just says we haven't found anything yet.
//     //So for now it is a placeholder until we find matching assignment inside the loop
//     //this creates a way for us to check if we found a match and we check this at step 6
//     //if matchedAssignment is still null after the loop then that tells us that there was no match
//     let matchedAssignment = null 

//     //here we are looping through the dueAssignments list
//     for (let z = 0; z < dueAssignments.length; z++) {

//         //if the dueAssignments match the submissions assignmentId, if they match make them equal to matchedAssignments and store them in matchedAssignments. It will take the place of null.
//         //If the assignmentId of the current due assignments matches the assignment Id from the submission, store the assignment.
//         if (dueAssignments[z].id === assignmentId) {
//             //if dueAssignment matches assignmentId then store the assignment in matchedAssignment.
//             matchedAssignment = dueAssignments[z] //here is where we store the matching assignment
//             //break once we found a matching assignment
//             break

//         }
//     }
//         //step 6 - if no matching assignment was found then we will skip this submission.
//         if (!matchedAssignment || matchedAssignment.points_possible === undefined){
//             continue; //we're going to skip the submission if the assignment doesn't match and move to the next submission
//         }
//          // console.log(matchedAssignment)

    

//         //Step 7 - here we get the learners scores and store them in finalScore
//         let finalScore = submission.submission.score

//         if(!submission.submission || submission.submission.score === undefined){
//             continue;
//         }

//         //Step 9 - here we are checking to see if the submission is late
//         if (submission.submission.submitted_at > matchedAssignment.due_at){

//             //here is where we will apply a 10% penalty if the submission was late
//             finalScore = finalScore - (matchedAssignment.points_possible * 0.1)
//         }

//         //I found out the reason my code wasn't running
//         //I never initialized learnerData before I assigned it a property
//         //learnerData stores all the learners information
//         //learnerId access the learner data by using learnerId
//         if(!learnerData[learnerId]){
//         learnerData[learnerId] = {id: learnerId, totalScore: 0, maxPoints: 0}
//         }

//         //here i am taking the calculations I got from finalScore and dividing it by matchedAssignment.scored_points to get the learnerData
//         learnerData[learnerId][assignmentId] = finalScore / matchedAssignment.points_possible
       
//         console.log(learnerData)
       
    
//     //Step 10 - now that we have a final score and the percentage we can update the learners total score and max points 
//         learnerData[learnerId].totalScore = learnerData[learnerId].totalScore + finalScore
//         learnerData[learnerId].maxPoints = learnerData[learnerId].maxPoints + matchedAssignment.points_possible






// //I added this { infornt of const result
//   {  const result = [
//       {
//         id: 125,
//         avg: 0.985, // (47 + 150) / (50 + 150)
//         1: 0.94, // 47 / 50
//         2: 1.0 // 150 / 150
//       },
//       {
//         id: 132,
//         avg: 0.82, // (39 + 125) / (50 + 150)
//         1: 0.78, // 39 / 50
//         2: 0.833 // late: (140 - 15) / 150
//       }
//     ];
  
//     return result;
//   }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result);
  

  //Step 1 - I want to see my information and how it is looking in the console.log first so I kow what I am working with
//   console.log("Course Information:", CourseInfo);
//   console.log("Assignment Group:", AssignmentGroup);
//   console.log("Learner Submissions", LearnerSubmissions);

// const str = ["Hello World", "bye bye birdy"];

// for (const i in str) {
//     console.log(str[i]);
// }


//CODE WOULDN'T RUN AND ALL MY COMMENTS WERE MAKING IT HARD TO SEE MY CODE SO I REWROTE MY CODE SO I COULD SEE IT CLEARLY AND FIND THE ERROR




function getLearnerData(course, ag, submissions) {
    //check if the ag course ID matches the given course ID
    try { 
        if (ag.course_id !== course.id) {
            throw `Error, the id's don't match!`;
        }
    } catch (error) {
        console.log(error);
    }

    let todaysDate = "2025-03-06";
    let dueAssignments = []; //empty array to store assignments

    //change AssignmentGroup to ag parameter in getLearnerData
    //find due assignment in the ag group 
    for (let i = 0; i < ag.assignments.length; i++) {
        let assignment = ag.assignments[i];
        if (assignment.due_at <= todaysDate) {
            dueAssignments.push(assignment);
        }
    }

    let learnerData = {};

    //process each submission by iterating through each submission in the submissions list
    for (let i = 0; i < submissions.length; i++) {
        let submission = LearnerSubmissions[i];
        let learnerId = LearnerSubmissions[i].learner_id;
        let assignmentId = LearnerSubmissions[i].assignment_id;


        let matchedAssignment = null;
        //looping through to find matching assignments based off the assignment Id
        for (let z = 0; z < dueAssignments.length; z++) {
            if (dueAssignments[z].id === assignmentId) {
                matchedAssignment = dueAssignments[z]; //assigning the found assignment
                break; //stop once match is found
            }
        }

        //W3School Parameter Defaults(https://www.w3schools.com/js/js_best_practices.asp)
        //if no "matched assignment" OR it doesn't have "defined points_possible" then (continue) go to next submission
        if (!matchedAssignment || matchedAssignment.points_possible === undefined) {
            continue;
        }

        //if "submission" is missing OR does not have "defined score" then (continue) go to next submission
        if (!submission.submission || submission.submission.score === undefined) {
            continue;
        }

        let finalScore = submission.submission.score;

        //if "submission was submitted late" 
        if (submission.submission.submitted_at > matchedAssignment.due_at) {
            finalScore = finalScore - (matchedAssignment.points_possible * 0.1); //apply a 10% penalty on points_possible
        }

        //if learner is not already in learnerData then initialize the object
        if (!learnerData[learnerId]) {
            learnerData[learnerId] = { id: learnerId, totalScore: 0, maxPoints: 0 };
        }


        learnerData[learnerId][assignmentId] = finalScore / matchedAssignment.points_possible; //storing learners score
        learnerData[learnerId].totalScore = learnerData[learnerId].totalScore + finalScore; // updating their total score
        learnerData[learnerId].maxPoints = learnerData[learnerId].maxPoints + matchedAssignment.points_possible; //update the maxpoints
    }

    let results = [];

    //loop through each learners data in learnerData
    for (let learnerId in learnerData) {
        let learner = learnerData[learnerId];

        learner.avg = learner.totalScore / learner.maxPoints; //calculating avg score
        

        //deleting a property source(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
        //we don't need these in result
        delete learner.totalScore;
        delete learner.maxPoints;

        results.push(learner);
    }

    return results;
}

try {
    let output = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

    if(!output){
        throw new Error('no output')
    }
    console.log(output);
    
} catch (error) {
    console.log("There's an error. Something went wrong:", error);
}

//Sources: 
//MDN - Control Flow and Error Handling(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling), 
//Initialize Variables when you declare them(https://www.w3schools.com/js/js_best_practices.asp)
//W3School-Break and Continue(https://www.w3schools.com/js/js_break.asp), 
//Loops and Iteration(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
//If, Else, and Else If(https://www.w3schools.com/js/js_if_else.asp)
//For In Loop(https://www.w3schools.com/js/js_loop_forin.asp) 
//JavaScript.info, 
//lecture notes, 
//JavaScript ARRAYS of OBJECTS are easy!(https://www.youtube.com/watch?v=w9078dAjcrY), 
//JavaScript Array Mastery: Tips, Tricks & Best Practices(https://www.youtube.com/watch?v=cDCzz8vJf3Y)
//Session 2 — Data science workflows in JavaScript(https://www.youtube.com/watch?v=myU1ZSjpRN0)

