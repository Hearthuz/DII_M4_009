var student = {};
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

var secondStudent = {};
secondStudent.name = 'คุณป้า'
secondStudent.username = 'babab@b.com'
secondStudent.gender = 'หญิง'

var students = [student, secondStudent,
    {
        name: 'สมรักษ์',
        username: 'm@n.com',
        gender: 'ชาย'
    }
]

function addStudentToTable(index,student){
    const tableBody = document.getElementById('tableBody')
    let row = document.createElement('tr')
    let cell = document.createElement('th')
    cell.setAttribute('scope','row')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.username
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.gender
    row.appendChild(cell)
    tableBody.appendChild(row)
}
function addStudentList(studentlist){
    let counter = 1
    for(student of studentlist){
        addStudentToTable(counter++ ,student)
    }
}

function onLoad(){
    fetch('assets/students.json').then(data => {
        students = data.json()
    })
    console.log(students)
}
window.addEventListener('load', function(){
    addStudentList(students)
})
// function addRow(container, key, value){
//     let row = document.createElement('div')
//     row.classList.add('row')
//     let columnName = document.createElement('div')
//     columnName.classList.add('col-1')
//     columnName.classList.add('offset-1')
//     columnName.innerHTML = key
//     let columnValue =document.createElement('div')
//     columnValue.classList.add('col')
//     columnValue.innerHTML = value
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     container.appendChild(row)
// }
// function addStudentData(student){
//     const output = document.getElementById('output')
//     addRow(output,'ชื่อ',student.name)
//     addRow(output,'รหัส',student.username)
//     addRow(output,'เพศ',student.gender)
// }
// window.addEventListener('load',function(){
//     addStudentData(student)
//     addStudentData(student2)
// })
