$(() => {
  const $form = $("#contactForm");

  function submitForm(event) {
    event.preventDefault();
    const $email = $(".email").val();
    const $message = $(".message").val();
    $(".filler").replaceWith(
      '<div class="alert alert-success alert-dismissible" role="alert">A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.<button type="button" class="btn-close" data-bs-dismiss="" aria-label="Close"></button></div>'
    );
  }
  $form.on("submit", submitForm);

  function replaceFiller() {
    const $filler = $('<div class="filler">');
    $(".alert").replaceWith($filler);
  }
  $(".wrapper").on("click", ".btn-close", replaceFiller);
});
