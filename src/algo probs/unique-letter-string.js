const findUniqueLetters = str =>{
  const st = new Set()
  for(let i =0; i<str.length ; i++){
    st.add(str[i])
  }
  return Array.from(st).sort()
}


console.log(findUniqueLetters('geekforgeeks'));