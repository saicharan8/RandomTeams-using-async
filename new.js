let fs=require('fs');
let prompt=require('prompt');
let shuffle = require('shuffle-array');
let range=require('range');
let array=require('node-array');
let readline = require('readline');
let readFile=require('read-file');

prompt.start();
//var path="C:\Users\ashis\Desktop\json\a.json";
fs.readFile('a.json','utf8',function(err,ar){
if(err) throw err;


var f=JSON.parse(ar);
var rl = readline.createInterface(process.stdin,process.stdout);
rl.question('enter size of team ', (n) => {
    console.log(`the size  of each team: ${n}`);
  var math=require('math');
var ar=[];
 for(var i=0;i<14;i++)
{
ar[i]=i;
}
console.log(ar);
shuffle(ar);
console.log(ar);
if(ar.length%n!=0){
   var x = ar.length%n;
   console.log(x);
   var y = math.floor(ar.length/n);
    console.log(y);
}
var s=[];
var j=0;
var m=0;
var last=[];
for(i=0;i<y-1;i++){
  for(k=0;k<y;k++)
  {
   s[j]=ar[j] ;
   j=j+1;
  } 
  }
  var l=j;
  if(i==y-1)
  {
    for(l=j;l<n*y+x;l++)
    {
      last[m]=ar[l];
      m=m+1;
    }
    console.log(last);
  }
console.log(s);


var w= fs.createWriteStream("out.txt");
j=0;
for(i=0;i<y;i++){
  w.write('team\n');
  for(k=0;k<y-1;k++)
  {
    w.write('team\n');
   w.write(JSON.stringify(f[s[j]]));
   j=j+1;
  } 
}
  
  if(i==y)
  {
    for(l=j;l<n*y+x;l++)
    {
       w.write('team\n');
   w.write(JSON.stringify(f[s[i]]));
   i+1;
   j=j+1;
    
    }
  
  }

});
});
