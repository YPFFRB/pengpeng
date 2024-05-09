let count=1
function main()
{
      let count=2
      function bar()
      {
         let count=3
         function foo()
         {
            let count =4
            console.log()
         } 
         foo()
      }
       bar()
}