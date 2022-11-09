$(document).ready(function () {
  counter1();
  counter2();
  counter3();
  counter4();

  AOS.init({
    delay: 500,
    duration: 400,
    easing: "ease",
    once: true,
  });

  $("#down_btn").click(function () {
    try {
      $("html,body").animate(
        {
          scrollTop: $("#product_lists").offset().top - 50,
        },
        1000
      );
    } catch (err) {
      allert(err);
    }
  });
  $("#btn_book").click(function () {
    try {
      $("html,body").animate(
        {
          scrollTop: $("#work").offset().top - 50,
        },
        1000
      );
    } catch (err) {
      allert(err);
    }
  });
  $("#talk_btn").click(function () {
    try {
      $("html,body").animate(
        {
          scrollTop: $("#info").offset().top - 50,
        },
        1000
      );
    } catch (err) {
      allert(err);
    }
  });
  $("#about_link").click(function () {
    try {
      $("html,body").animate(
        {
          scrollTop: $("#needs").offset().top - 50,
        },
        1000
      );
    } catch (err) {
      allert(err);
    }
  });
  $("#prod_one").click(function () {
    try {
      $("html,body").animate(
        {
          scrollTop: $("#products").offset().top - 50,
        },
        1000
      );
    } catch (err) {
      allert(err);
    }
  });
  $("#prod_two").click(function () {
    try {
      $("html,body").animate(
        {
          scrollTop: $("#products").offset().top - 50,
        },
        1000
      );
    } catch (err) {
      allert(err);
    }
  });
  $("#prod_three").click(function () {
    try {
      $("html,body").animate(
        {
          scrollTop: $("#products").offset().top - 50,
        },
        1000
      );
    } catch (err) {
      allert(err);
    }
  });

  $("#contact_link").click(function () {
    try {
      $("html,body").animate(
        {
          scrollTop: $("#info").offset().top - 50,
        },
        1000
      );
    } catch (err) {
      allert(err);
    }
  });

  function counter1() {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 2000,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const el = document.querySelector("#counter");
    IO.observe(el);
  }
  function counter2() {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 2000,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const el = document.querySelector("#counter2");
    IO.observe(el);
  }
  function counter3() {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 2000,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const el = document.querySelector("#counter3");
    IO.observe(el);
  }
  function counter4() {
    const counterUp = window.counterUp.default;

    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 2000,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const el = document.querySelector("#counter4");
    IO.observe(el);
  }
});
