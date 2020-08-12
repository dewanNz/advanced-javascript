const student = [
    {id:110, name:'ashik' },
    {id:12, name:'sarwar'},
    {id:13, name:'kalam'},
    {id:17, name:'sadi'},
    {id:20, name:'robin'}
]

const names = student.map(s => s.name);
// console.log(names);
const ids = student.map(s => s.id);

// const bigger = student.filter(s => s.id<17 );
const bigger = student.find(s => s.id<17 );
console.log(bigger);