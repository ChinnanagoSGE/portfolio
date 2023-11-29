if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  document.addEventListener("DOMContentLoaded", function() {
  //準備
  let cursorR = 4;  //カーソルの半径
  const cursor = document.getElementById('mouse-stalker');
  
  //上記のdivタグをマウスに追従させる処理
  document.addEventListener('mousemove', function (e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });
  
  //aタグとbuttonタグにclass付与
  const linkElem = document.querySelectorAll('a,button');
  for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener('mouseover', function (e) {
          cursor.classList.add('hover');
      });
      linkElem[i].addEventListener('mouseout', function (e) {
          cursor.classList.remove('hover');      
      });
  }
  });
}