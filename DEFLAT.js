acctData = [
  {
      "acctNum": "A1234",
      "user": "Alice",
      "openDate": "4/5/89"
  },
  {
      "acctNum": "A5231",
      "user": "Bob",
      "openDate": "4/5/11"
  },
  {
      "acctNum": "A9921",
      "user": "Alice",
      "openDate": "4/5/19"
  },
  {
      "acctNum": "A8191",
      "user": "Alice",
      "openDate": "4/5/19"
  }
];

balance = {
"A1234": 4593.22,
"A9921": 0,
"A5231": 232142.5,
"A8191": 4344
};

function filter(user, sortBy, sortDirection){
  const acctsCount = acctData.length
  let newData = [];
  if(sortBy && (sortBy !== 'acctNum' && sortBy!== 'balance')){
      return []
  }
  if(sortDirection && (sortDirection !=='asc' && sortDirection !== 'desc')){
      // then again invalid return
      return []
  }
  //Firstly concatenate the object
  for(let i=0; i< acctsCount ; i++){
    // get the acctNum
    let abc = Object.assign(acctData[i]);
    let field = acctData[i]['acctNum'];
    abc['balance'] = balance[field]
    newData.push(abc)
  }
  // now filter on based on this new data
  if(user && user.length){
      newData = newData.filter(data => user.includes(data.user))
  }
  // if(sortBy && sortBy === 'acctNum'){
      // the sort newData
      if(sortDirection === 'desc'){
      newData.sort(function(a,b){
        if(sortBy ==='balance'){
          return parseInt(b)-parseInt(a)
        }
          let a1 = a[sortBy].substring(1)
          let b1 = b[sortBy].substring(1)
          return parseInt(b1)-parseInt(a1)
      })
      }
      newData.sort(function(a,b){
        if(sortBy ==='balance'){
          return a[sortBy]-b[sortBy]
        }
          let a1 = a[sortBy].substring(1)
          let b1 = b[sortBy].substring(1)
          return parseInt(a1)-parseInt(b1)
      })
  // }
  return newData;
}
// console.log(filter(['Bob']))
// console.log(filter(['Charlie']))
// console.log(filter([],'acctNum'))
console.log(filter(['Alice'],'balance', 'asc'))