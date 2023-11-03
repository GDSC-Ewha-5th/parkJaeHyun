document.addEventListener("DOMContentLoaded", function () {
  const tagInput = document.getElementById("tagInput");
  const tagList = document.getElementById("tagList");

  tagInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
          const tagValue = tagInput.value.trim();

          if (tagValue === "") {
              return;
          }

          const tag = document.createElement("div");
          tag.classList.add("tag");
          tag.textContent = tagValue;
          tagList.appendChild(tag);

          tagInput.value = "";

          tag.addEventListener("click", function () {
              tagList.removeChild(tag);
          });
      }
  });
});