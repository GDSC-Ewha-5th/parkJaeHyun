function openModal() {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");
  var image = document.getElementById("image");

  modal.style.display = "block";
  modalImage.src = image.src;


  // 스크롤을 막기 위한 추가
  document.body.style.overflow = "hidden";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}