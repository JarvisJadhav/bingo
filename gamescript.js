var myArray = [];
var clicked = [];
let count = 0;
var p = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25];
let buttonValue = 0;
var bi = document.getElementById('print');
var rbt = document.getElementById('resetbt');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
    function generateRandomNumbers() {
        const buttonElements = document.querySelectorAll('table#numberTable button');
        const usedNumbers = new Set();

        buttonElements.forEach(button => {
            let randomNumber;
            do {
                randomNumber = Math.floor(Math.random() * 25) + 1;
            } while (usedNumbers.has(randomNumber));

            usedNumbers.add(randomNumber);
            button.textContent = randomNumber;
            myArray.push(randomNumber);
        });
    }

    async function changeColor(button) {
        if (button.style.backgroundColor !== '#B0BEC5' && count<5) {
            buttonValue = button.textContent;
            clicked.push(buttonValue);
            checkwinner();
            button.style.backgroundColor = '#B0BEC5';
            /*if(count==5){
                document.getElementById('print').textContent ="count 5 Bingo";
            }*/
         }
    }

    function checkwinner(){
        for (var i=0; i<myArray.length; i++) {
            for(var j=0; j<clicked.length; j++){
                if(myArray[i]==clicked[j]){
                    myArray[i]="*"; // * == 'clicked'
                    p[i]='*';// * == 'clicked'
                }
            }
        }
        if(p[0 ]=='*' && p[1 ]=='*' && p[2 ]=='*' && p[3 ]=='*' && p[4 ]=='*'){ count++; }
        if(p[5 ]=='*' && p[6 ]=='*' && p[7 ]=='*' && p[8 ]=='*' && p[9 ]=='*'){ count++; }
        if(p[10]=='*' && p[11]=='*' && p[12]=='*' && p[13]=='*' && p[14]=='*'){ count++; }
        if(p[15]=='*' && p[16]=='*' && p[17]=='*' && p[18]=='*' && p[19]=='*'){ count++; }
        if(p[20]=='*' && p[21]=='*' && p[22]=='*' && p[23]=='*' && p[24]=='*'){ count++; }

        if(p[0]=='*' && p[5]=='*' && p[10]=='*' && p[15]=='*' && p[20]=='*'){ count++; }
        if(p[1]=='*' && p[6]=='*' && p[11]=='*' && p[16]=='*' && p[21]=='*'){ count++; }
        if(p[2]=='*' && p[7]=='*' && p[12]=='*' && p[17]=='*' && p[22]=='*'){ count++; }
        if(p[3]=='*' && p[8]=='*' && p[13]=='*' && p[18]=='*' && p[23]=='*'){ count++; }
        if(p[4]=='*' && p[9]=='*' && p[14]=='*' && p[19]=='*' && p[24]=='*'){ count++; }

        if(p[0]=='*' && p[6]=='*' && p[12]=='*' && p[18]=='*' && p[24]=='*'){ count++; }
        if(p[4]=='*' && p[8]=='*' && p[12]=='*' && p[16]=='*' && p[20]=='*'){ count++; }

        if(count==1){ bi.innerText = "count 1"}
        if(count==2){ bi.innerText = "count 2"}
        if(count==3){ bi.innerText = "count 3"}
        if(count==4){ bi.innerText = "count 4"}

        if(count < 5){ count=0; }
        if(count > 4){
            document.getElementById('print').textContent ="count 5 Bingo";
        }
    }

    var bt = document.getElementsByClassName('b');
    document.getElementById('c1').addEventListener('click', function () {
        for (var i = 0; i < bt.length; i++) {
            bt[i].style.color = 'cyan';
            bt[i].style.boxShadow = 'inset 0px 0px 2px cyan';
        } themeColor('cyan');
    });
    
    document.getElementById('c2').addEventListener('click', function () {
        for (var i = 0; i < bt.length; i++) {
            bt[i].style.color = 'red';
            bt[i].style.boxShadow = 'inset 0px 0px 2px red';
        } themeColor('red');
    });
    
    document.getElementById('c3').addEventListener('click', function () {
        for (var i = 0; i < bt.length; i++) {
            bt[i].style.color = '#9900ff';
            bt[i].style.boxShadow = 'inset 0px 0px 2px #9900ff';
        } themeColor('#9900ff');
    });
    
    document.getElementById('c4').addEventListener('click', function () {
        for (var i = 0; i < bt.length; i++) {
            bt[i].style.color = '#33FF99';
            bt[i].style.boxShadow = 'inset 0px 0px 2px #33FF99';
        } themeColor('#33FF99');
    });
    
    document.getElementById('c5').addEventListener('click', function () {
        for (var i = 0; i < bt.length; i++) {
            bt[i].style.color = '#607D8B';
            bt[i].style.boxShadow = 'inset 0px 0px 2px #607D8B';
        } themeColor('#607D8B');
    });
    function themeColor(color) {
        bi.style.color = color;
        rbt.style.backgroundColor = color;
    }
    function reset() {
        myArray = [];
        clicked = [];
        count = 0;
        p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        buttonValue = 0;
    
        const buttonElements = document.querySelectorAll('table#numberTable button');
        buttonElements.forEach(button => {
            button.style.backgroundColor = '';
            button.textContent = '';
        });
        bi.style.scale = '1';
        bi.textContent = 'created by Jarvis';
    
        generateRandomNumbers();
    }    
    
	const b = document.querySelectorAll('button');
	b.forEach(btn => {
		btn.addEventListener('click',function(e){
			let x = e.clientX - e.target.offsetLeft;
			let y = e.clientY - e.target.offsetTop;
			let r = document.createElement('span');
			r.style.left = x+'px';
			r.style.top = y+'px';
			this.appendChild(r);

			setTimeout(()=> {
				r.remove();
			},1500);
		});
	});

generateRandomNumbers();

