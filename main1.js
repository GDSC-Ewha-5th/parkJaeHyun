window.onload=()=>{
  document.querySelector('.dropbtn_click').onclick = ()=>{
    dropdown();
  }
  document.getElementsByClassName('date').onclick = ()=>{
    showMenu(value);
  };
  dropdown = () => {
    var v = document.querySelector('.dropdown-content');
    var dropbtn = document.querySelector('.dropbtn')
    v.classList.toggle('show');
    dropbtn.style.borderColor = 'rgb(94, 94, 94)';
  }

  showMenu=(value)=>{
    var dropbtn_icon = document.querySelector('.dropbtn_icon');
    var dropbtn_content = document.querySelector('.dropbtn_content');
    var dropbtn_click = document.querySelector('.dropbtn_click');
    var dropbtn = document.querySelector('.dropbtn');

    dropbtn_icon.innerText = '';
    dropbtn_content.innerText = value;
    dropbtn_content.classList.contains('clicked');
   
    dropbtn.style.borderColor = '#3992a8';
   
}
window.onclick= (e)=>{
  if(!e.target.matches('.dropbtn_click')){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    
    var dropbtn_icon = document.querySelector('.dropbtn_icon');
    var dropbtn_content = document.querySelector('.dropbtn_content');
    var dropbtn_click = document.querySelector('.dropbtn_click');
    var dropbtn = document.querySelector('.dropbtn');
   

    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }



}
}

const dateElements = document.querySelectorAll('.dropdown_click .date');

function select(liEl) {
  dateElements.forEach((el) => el.classList.remove('click'));
  liEl.classList.add('click');
}

dateElements.forEach((dateElement) => {
  dateElement.addEventListener('click', (e) => {
    select(e.target);
  });
});
