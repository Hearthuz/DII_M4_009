var student = {};
student.name = 'คุณลุงยุทธ'
student.username = 'a@b.com'
student.gender = 'ชาย'
console.log(student.name)

function addStudentData(student){
    const output = document.getElementById('output')
    let row = document.createElement('div')
    row.classList.add('row')
    let columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML = 'ชื่อ'
    let columnValue =document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = student.name;
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)
    let row2 = document.createElement('div')
    row2.classList.add('row')
    columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML = 'รหัส'
    columnValue =document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = student.username;
    row2.appendChild(columnName)
    row2.appendChild(columnValue)
    output.appendChild(row2)
    let row3 = document.createElement('div')
    row3.classList.add('row')
    columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML = 'เพศ'
    columnValue =document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = student.gender;
    row3.appendChild(columnName)
    row3.appendChild(columnValue)
    output.appendChild(row3)
}

window.addEventListener('load',function(){
    addStudentData(student)
})
