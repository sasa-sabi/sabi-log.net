function toggleContent(contentId) {
  var content = document.getElementById(contentId);
  content.classList.toggle("codeButton_hide")
  content.classList.toggle("code_open");
}

function all_content_open() {
  var content = document.querySelectorAll(".code_content");
  var button = document.getElementById("code_button");
  var all_button=document.querySelectorAll(".code_all_button")

  content.forEach(function (element) {
    if (button.classList.contains("codeButton_hide")) {
      element.classList.remove("codeButton_hide");
      element.classList.remove("code_open");
      element.classList.add("codeButton_hide");
    }
    else {
      element.classList.remove("codeButton_hide");
      element.classList.remove("code_open");
      element.classList.add("code_open");
    }
  });
  button.classList.toggle("codeButton_hide");
  all_button.forEach(function (element) {
    element.classList.toggle("on");
    if (element.classList.contains("on")) {
      element.textContent = "コードの非表示";
    } else {
      element.textContent = "コードの表示";
    }
  });
}