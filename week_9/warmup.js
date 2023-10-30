const studentScores = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 68 },
    { name: 'David', score: 55 },
    { name: 'Eve', score: 78 }
  ]
  const getPassingNames = (student) => {
    return student.filter(name => student.score > 10)
  }
  const passingNames = getPassingNames(studentScores)
  console.log(passingNames)
   