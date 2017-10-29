// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (name) {return name.toLowerCase() === string.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (name) {return string.includes(name[0])});
}

function matchName(drivers, string) {
  return drivers.filter(function (obj) {return obj.name === string});
}
