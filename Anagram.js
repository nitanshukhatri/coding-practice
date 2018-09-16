//An anagram of a string is another string that contains same characters,
// only the order of characters can be different. For example, “act” and “tac” are anagram of each other.

let str1 = 'geeksforgeeks';
let str2 = 'forgeeksgeeks';

const words = ['map', 'art', 'how', 'rat', 'tar', 'who', 'pam', 'shoop'];

function alphabetize(word) {
    if (!word) {
        return;
    }
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}
function anagramGrouper(words){
    const anagrams = {};
    words.forEach((word)=>{
        const sortedWord = alphabetize(word);
        
        if (anagrams[sortedWord]) {
        
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    });
    return anagrams;
}

const groupedAnagrams = anagramGrouper(words);

for(const sortedWord in groupedAnagrams){
    console.log(groupedAnagrams[sortedWord].toString());
}
