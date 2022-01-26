$(() => {
  const $form = $("#contactForm");

  function submitForm(event) {
    event.preventDefault();
    const $name = $(".name").val();
    $(".filler").replaceWith(
      `<div class="alert alert-success alert-dismissible text-center" role="alert"><i class="bi bi-check-circle-fill"></i> Message successfully sent, ${$name}! <button type="button" class="btn-close" data-bs-dismiss="" aria-label="Close"></button></div>`
    );
    $(".name").val("");
    $(".message").val("");
  }
  $form.on("submit", submitForm);

  function replaceFiller() {
    const $filler = $('<div class="filler">');
    $(".alert").replaceWith($filler);
  }
  $(".wrapper").on("click", ".btn-close", replaceFiller);
});
