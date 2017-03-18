// var students = [
//      {first_name:  'Michael', last_name : 'Jordan'},
//      {first_name : 'John', last_name : 'Rosales'},
//      {first_name : 'Mark', last_name : 'Guillen'},
//      {first_name : 'KB', last_name : 'Tonel'}
// ]
//
// for(var idx = 0; idx < students.length; idx++){
//     console.log(students[idx].first_name + ' ' + students[idx].last_name);
// }

var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

 console.log('Students');
 for(var idx = 0; idx < users.Students.length; idx++){
     console.log(idx+1 + ' - ' + users.Students[idx].first_name + ' ' + users.Students[idx].last_name + ' ' + (users.Students[idx].first_name.length + users.Students[idx].last_name.length));
 }
 console.log('Instructors');
 for(var idx = 0; idx < users.Instructors.length; idx++){
     console.log(idx+1 + ' - ' + users.Instructors[idx].first_name + ' ' + users.Instructors[idx].last_name + ' ' + (users.Instructors[idx].first_name.length + users.Instructors[idx].last_name.length));
 }
