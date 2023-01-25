

module.exports = function check(str, bracketsConfig) {
    const pairs = {};
    const opens = []
    let stuck = [];
    
    for (let i=0; i< bracketsConfig.length; i++){
    pairs[bracketsConfig[i][1]] = bracketsConfig[i][0];
    opens.push(bracketsConfig[i][0])
    }
     
    
    for(let j=0; j < str.length; j++){
        if(!stuck.length){
         if(opens.includes(str[j])){
            stuck.push(str[j])
         } else return false
        } else 
        if(pairs[str[j]] === stuck[stuck.length-1]){
            stuck.pop()
        } else
        if(opens.includes(str[j])){
            stuck.push(str[j])
        } else return false
      }
     
      return stuck.length===0
    }
