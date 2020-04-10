let num = [],
    sum= [],
    color,
    h1 = document.createElement('h1');
for(let i = 0 ; i < 6 ; i++ ){
    sum[i] = 0;
    num[i] = Math.round( Math.random() * 10000);
    // console.log(num[i]);
    
    for(let j = 0; j < 4 ; j++){
        let n = num[i] % 10,
        st = +j;
        // console.log(n);

        num[i]= Math.floor(num[i] / 10);
        // console.log(num[i]);

        sum[i] += Math.pow(2,st) * n;
        // console.log('sum = ', sum[i]);
    }
        if (sum[i] >= 10){
            while(sum[i] > 15){
                sum[i]-=10;
            }
            switch(sum[i]){
                case 10: sum[i] = 'a';break; 
                case 11: sum[i] = 'b';break; 
                case 12: sum[i] = 'c';break; 
                case 13: sum[i] = 'd';break; 
                case 14: sum[i] = 'e';break; 
                case 15: sum[i] = 'f';break; 
            }
        }
        else{
            sum[i] = toString(sum[i]);
        }
        console.log(sum[i]);

    
};
color = sum.join('');
console.log(color);
document.body.style.backgroundColor = color;
h1.textContent= color;
document.body.prepend(h1);

