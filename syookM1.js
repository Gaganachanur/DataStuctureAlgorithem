// 2) HIde that PIN!

function syookM1(pin)
{
    let i=0;
    let g=0;
    let database=[];    //global variables
    let encryptedText = [];

    while (pin != 0 )             // converting pin into binary digits
    {
      database[i++]=  pin%2
        pin=Math.floor(pin/2)
    }

    console.log(database)

    for(let i=0;i<database.length;i++)
    {
        if(1 === database[i])
        {
            encrypt(i)
        }
    }
   function encrypt(key)            // matching the key and passing the element into Array
   {

       if(key == 0)
       {
           encryptedText[g++] ="pop";
       }else if(key == 1)
       {
           encryptedText[g++] ="double rip"
       }else if(key == 2)
       {
           encryptedText[g++] = "hide your mints"
       }else if(key ==3)
       {
           encryptedText[g++] = "fall"
       }else{
           encryptedText[g++] = "reverse the order of the output"
       }
   }
   return encryptedText;
}

console.log(syookM1(3));
console.log(syookM1(19));
console.log(syookM1(0));