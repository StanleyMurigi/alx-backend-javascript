export default function createIteratorObject(report) {
  const employeesArray = Object.values(report.allEmployees).flat();
  return employeesArray[Symbol.iterator]();
}

