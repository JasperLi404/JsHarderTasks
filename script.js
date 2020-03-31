let arg = prompt('write an argument');
const getArg = () => {
    if (typeof(arg) == 'string' ){
        // console.log('it is string');
        
        arg = arg.split(' ');
        arg = arg.join('');
        
        if (arg.length > 30){
            arg = arg.split('');
            arg = arg.join('');

            // console.log(arg);
           
            arg=arg.slice(0,30);   
        }
        arg+='...';
        console.log(arg);
    }
    else{
        console.log("it is not string. Reload page and write string");
        
    }
    // console.log(arg);
    

}
getArg();