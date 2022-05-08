function myArray(){

    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    });

    this.length=arguments.length;
  
    for(let i=0;i<this.length;i++){
        this[i]=arguments[i]
    }


}

let a2=new myArray("m","n","o","p","q");



myArray.prototype.पुश=function(value){
    let index= this.length;
    this[index]=value;
    this.length++;
}

myArray.prototype.हटाओ=function(){

let index=this.length-1;

delete this[index];

this.length--;
}

myArray.prototype. वरचा=function()
{
   let index=this.length-1;
   return a2[index]
}

myArray.prototype.सगळा=function()
{
   var arr=[];
   let index=this.length-1;
   for(var i=0;i<this.length;i++)
   {
       arr.push(this[i])
   }
   return arr
}


myArray.prototype.उलटा=function()
{
   var arr=[];
   let index=this.length-1

   for(var i=this.length-1;i>=0;i--)
   {
       arr.push(this[i])
   }
   return arr
}
myArray.prototype.साइज=function()
{
   var arr=[]
   let index=this.length-1;
   return index
}




a2.पुश('a')
console.log('a2:',a2)

console.log("पुश",Object.values(a2));



a2.हटाओ()

console.log("हटाओ",Object.values(a2));

var x=a2.वरचा()
console.log("वरचा",x)

var z=a2.सगळा()
console.log("सगळा",z)

var w=a2.उलटा()
console.log("उलटा",w)

var k=a2.साइज()
console.log("साइज",k);

