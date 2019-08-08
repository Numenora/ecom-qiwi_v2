import $ from "jquery";

$(document).ready(function () {
    const links = $("a.side-bar__link");

    links.on("click", function (e) {
      $(".js-menu").removeClass("side-bar__nav_active");
      let anchor = $(this);
      const $el = $(e.target);
      $("html, body").stop().animate({
          scrollTop: $(anchor.attr("href")).offset().top
      }, 777);
      e.preventDefault();
      links.removeClass("side-bar__link_active");
      $el.addClass("side-bar__link_active");
      return false;
  });

    $(".blue-link").on("click", (e) => {
        e.preventDefault();
        const $el = $(e.target);
        $el.siblings(".card__text").css("height", "auto");
        $el.hide();
    });

    $(".js-menu-toggle").on("click", () => {
        $(".js-menu").toggleClass("side-bar__nav_active");
    });


    let lastId,
        topMenu = $(".js-menu-items"),
        topMenuHeight = topMenu.outerHeight() + 15,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });


      //   menuItems.click(function (e) {
      //     var href = $(this).attr("href"),
      //         offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      //     $("html, body").stop().animate({
      //         scrollTop: offsetTop
      //     }, 300);
      //     e.preventDefault();
      // });

    $(window).scroll(function () {
        let fromTop = $(this).scrollTop() + topMenuHeight;

        let cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length - 1];
        let id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems.removeClass("side-bar__link_active");
            menuItems.filter("[href='#" + id + "']").addClass("side-bar__link_active");
        }
    });


});
