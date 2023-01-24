module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig) {
    const pairs = {};
    const opens = []
    let stuck = [];
    
    for (let i=0; i< bracketsConfig.length; i++){
    pairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
    opens.push(bracketsConfig[i][0])
    }
    
    for(let j=0; j<str.length; j++){
        if(opens.includes(str[j])){
            stuck.push(str[j])
        }  else {
            if(stuck.length===0) return false
        }
    
        let currentSign = stuck[stuck.length -1]
     if(pairs[str[j]]===currentSign){
        stuck.pop()
     }
    }
    console.log(stuck);
    return stuck.length === 0
      }
}
