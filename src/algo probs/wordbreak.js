/**
 * Given a string A and a dictionary of words B, determine if A can be segmented into a space-separated sequence of one or more dictionary words.

Input Format:

The first argument is a string, A.
The second argument is an array of strings, B.
Output Format:

Return 0 / 1 ( 0 for false, 1 for true ) for this problem.
Constraints:

1 <= len(A) <= 6500
1 <= len(B) <= 10000
1 <= len(B[i]) <= 20
Examples:

Input 1:
    A = "myinterviewtrainer",
    B = ["trainer", "my", "interview"]

Output 1:
    1

Explanation 1:
    Return 1 ( corresponding to true ) because "myinterviewtrainer" can be segmented as "my interview trainer".
    
Input 2:
    A = "a"
    B = ["aaa"]

Output 2:
    0

Explanation 2:
    Return 0 ( corresponding to false ) because "a" cannot be segmented as "aaa".
 */
/**
 * 
 * @param {string} A this is a string
 * @param {array} B this is dictionary
 */

function wordBreak (A, B){
  const words = B.length;
  let list = A;
  let result = 0;
  for (let i=0; i<words;i++){
      //iterate over dictionary and exit on either all cases ends or found all words.
      if(list.indexOf(B[i]) !== -1){
          // then word exist take it out.
          list = list.split(B[i]).join('')
          if(list.length === 0){
              return 1;
          }
      }
  }
  return result
}
function wordBreakRec (A, B){
    const words = B.length;
    let list = A
    let result = 0;
    for (let i=0; i<words;i++){
        //iterate over dictionary and exit on either all cases ends or found all words.
        if(list.indexOf(B[i]) !== -1){
            // then word exist take it out.
            // console.log(B[i])
            // console.log(list.substring(0,list.indexOf(B[i])-1))
            list = [list.substring(0,list.indexOf(B[i])),list.substring(list.indexOf(B[i])+B[i].length)].join('')
            // console.log(list)
            if(list.length === 0){
                return 1;
            }
        }
    }
    return result
  }

let A = "myinterviewtrainer"
let B = [ "interview", "my", "trainer" ]

console.log(wordBreakRec(A,B))

// This fails for 
A = "aaaabaaaaababaababbaabababaabbaababaaaabababbbaaabbaabbaaaaaababbaabbaabaabbbbbbbbabbbaabbbbabbbaababababbaabaabaabbbbbaaabaabbbbbbbbbaaabaaabbaababaabbbbaabaaabaabbabbbbbbabababababbaabbabbbbbbbbbabaababbaaabbbbaabaaaabbaabaaaabaaaabababbbbbbababbaabaaababbaaabbbbaababaaabababbbbbbaababbaaabaababbbbbbaaabbababaabaabbbabaaaaabbabbbbbbbaaaaabbaaaabbbbbbbaaabbabbaaaaabbbbbabababbabbbbbbaabababbaaababbbaababbaaaabbbabbbbaabaabbaaaabbabbbbbbaaaaababbbbbaaabababbabbabbabbbbabababaaaaaabbbbaababaababababbbbabbbbabbaabbbaaaabbbbabaabbaabaaaaaaabaabbabbabbaaabaabbabababababaabaaababaabaabbbabaababaabbaaabbbaaabaabaababbaababaabbabbabbbaaaaababbbaaabbaaaabaaabaabbabaaabbbbbaaaaabaaabbbabbbabbabbababbbbbababaabbbabbaabbaaabaaaaabbbbabbaaabaabbaababbbababbaabbbbbababbabaaaabbaabbbbbbbaabaabbbbbbabaabaababbbbbababaaabaaababbabbbbbbabbbbabbbbbbbbbabaabbaabbbbbbbaabaaaaaabaaaaaabbabbbbbbbbbabbabbabbababbbaabbaabbabbbbaaaaaaabaaaaabbabbbbabbbaaabbaabaababbbbaabbababaaaaabbaabaaabbbabbbaaaba"
B = [ "babbaaabbb", "bbaaabb", "aaabbabba", "aabaabbba", "abb", "bbbabaab", "aabbb", "abaa", "aab", "babababbbb", "abaaabba", "aabbabaaa", "aabababba", "bbbabbbbb", "bbbabaabba", "ba", "ba", "bb", "a", "bba", "ababbbab", "a", "bbaa", "abaabbb", "bbbbbaaba", "bbabbb", "ab", "bbbbb", "abbaba", "baabba", "bab", "aabaabb", "aaba", "babaab", "bbbbbabbbb", "abaaabbaa", "babaaba", "aaabbb", "aabaabaaab", "bbaab", "bbaaaabab", "bababbb", "babaaaab" ]

console.log(wordBreakRec(A,B))
