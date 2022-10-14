let challenge='30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log((challenge.slice(challenge.substring(0, 1))));
console.log('30 Days Of JavaScript'.slice(0,3));
console.log(challenge.includes('Script'));
console.log(challenge.split(' '));
//console.log('30 Days Of JavaScript'.split(','));
console.log('Facebook Google Microsoft Apple IBM Oracle Amazon'.split(' '));
console.log('30 Days Of JavaScript'.replace('JavaScript', 'python'));
console.log('30 Days Of JavaScript'.charAt(15));
console.log('30 Days Of JavaScript'.charCodeAt('J'));
console.log('30 Days Of JavaScript'.indexOf('a'));
console.log('30 Days Of JavaScript'.lastIndexOf('a')); 
console.log('You cannot end a setence with because because is a conjuction'.indexOf('because'));
console.log('You cannot end a setence with because because is a conjuction'.lastIndexOf('because'));
console.log('You cannot end a setence with because because is a conjuction'.search(/because/g));
console.log(' 30 Days Of JavaScript '.trim());
console.log('30 Days Of JavaScript'.startsWith('30'));
console.log('30 Days Of JavaScript'.endsWith('t'));
console.log('30 Days Of JavaScript'.match(/a/gi));
console.log('30 Days Of'.concat(' JavaScript'));
console.log('30 Days Of Javascript '.repeat(2));

//LEVEL 2
console.log("The quote There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to 'help' one another.");
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')
console.log(typeof(+'10'));
console.log(parseFloat(parseInt('9.8') +1))
console.log("'jagon' ,'python'".includes('on'))
console.log('I hope this course is not full of jargon.'.includes('jargon'));
console.log(Math.floor(Math.random() *100) +1)
//console.log(Math.floor(Math.random(50) *100) +1)
console.log(Math.floor(Math.random() *255) +1)
//console.log('JavaScript'.(Math.random()))
//
console.log('You cannot end a sentence with because because because is a conjunction'.substring(30,55))


//LEVEL 3
//console.log('Love is the best thing in this world. Some found thier love and some are still looking for thier love.'.search('love')) ;
//
//
//console.log("He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.")