document.addEventListener('DOMContentLoaded', () => {
    if (performance.navigation.type == 1) {
      if(checkCookie('reversed')){
        if(window.confirm(`Some Cookies have been created on this page: \n${document.cookie} \n Do you want to save them?`)) 
        alert('Cookies were saved, now the page will be refreshed.');
        else{
            setCookie('reversed', '');
        } 
      }
    }
    setCookie('session', parseInt(getCookie('session')) + 1, 1);
    if(checkCookie('reversed')) document.getElementById("input1").remove();
    if(checkCookie('reversed')) document.getElementById("button1").remove();


    makeEditableBlock('section-2');
    makeEditableBlock('section-5');
    makeEditableBlock('section-6');
    initEditableBlocks();
    })
    
    const setCookie = (name, data, expDays) => {
     const d = new Date();
     d.setDate(d.getDate() + expDays);
     document.cookie = `${name}=${data};expires=${d.toUTCString()};path=/`;
    }
    
    const checkCookie = (name) => {
     return (document.cookie.includes(name) && !document.cookie.includes(`${name}=;`));
    }
    
    const getCookie = (name) => {
      return checkCookie(name) ? document.cookie.split(';').find((c) => c.includes(name)).split('=')[1] : 0;
    }


// 1
let tmp = document.querySelector('#x').innerHTML;
document.querySelector('#x').innerHTML = document.querySelector('#y').innerHTML;
document.querySelector('#y').innerHTML = tmp;
//2
function ctg(x) { return 1 / Math.tan(x); }
let thirdSect = document.querySelector('#block-4');
let n = 3, a = 2;

let square = n / 4 * a*a * ctg(Math.PI/n)
thirdSect.append(' Square - ' + square + ' sm^2');

//4

if(window.localStorage)
{
    if(localStorage.getItem('check') != null) {changeColor(localStorage.getItem('check')); }
    console.log(localStorage.getItem('check'));
}   
else alert(" localStorage cant be used");
{
    function clickMecolor() {
        let first = document.querySelector('#input2').value;
        let rev = first.split("").join("");
        alert('Your new color is ' + rev);
        changeColor(rev);
        localStorage.setItem('check', rev);
    }
}

//3

function clickMe() {
    let first = document.querySelector('#input1').value;
    let rev = first.split("").reverse().join("");
    alert('Your reversed number is ' + rev);
    setCookie('reversed', rev, 2)
}
// 5
window.addEventListener('click', function() {
    document.querySelector('#block-1').innerHTML  += 'Okey';
    if ( pageYOffset > 250){
        document.querySelector('#block-1').innerHTML  = "";
    }
  });

  const initEditableBlocks = () => {
    Array.from(document.getElementsByClassName('editArea')).map((area) => {
      area.addEventListener('change', (event) => {
        const newContent = event.target.value;
        localStorage.setItem(`${event.target.parentNode.id}Content`, newContent);
        event.target.parentNode.children[0].innerHTML = newContent;
       })
    })
    Array.from(document.getElementsByClassName('editBtn')).map((btn) => {
      btn.addEventListener('click', (event) => {
        localStorage.removeItem(`${event.target.parentNode.id}Content`);
        document.location.reload();
      })
    })
  }
  const makeEditableBlock = (blockId) => {
    const content = localStorage.getItem(`${blockId}Content`) ? 
    localStorage.getItem(`${blockId}Content`) : 
    document.getElementById(blockId).innerHTML;
    document.getElementById(blockId).innerHTML = content;
    document.getElementById(blockId).insertAdjacentHTML('beforeend', 
    `<textarea class="editArea">${content}</textarea>
    <button type="submit" class="editBtn">Return default</button>`)
  }
  function changeColor(color)  {
      document.getElementById("head").style.background = color;
      document.getElementById("top").style.background = color;
      document.getElementById("bot").style.background = color;
      document.getElementById("section-2").style.background = color;
      document.getElementById("section-3").style.background = color;
      document.getElementById("section-4").style.background = color;
      document.getElementById("section-5").style.background = color;
      document.getElementById("section-6").style.background = color;
      document.body.style.background = color;

  }
  