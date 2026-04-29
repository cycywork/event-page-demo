//
//
//Go to Top
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//
//






(function ($, viewport) {

  viewport.breakpoints = {
      'xs': $('<div class="d-xs-block d-sm-none d-md-none d-lg-none d-xl-none"></div>'),
      'sm': $('<div class="d-none d-sm-block d-md-none d-lg-none d-xl-none"></div>'),
      'md': $('<div class="d-none d-md-block d-sm-none d-lg-none d-xl-none"></div>'),
      'lg': $('<div class="d-none d-lg-block d-sm-none d-md-none d-xl-none"></div>'),
      'xl': $('<div class="d-none d-xl-block d-sm-none d-md-none d-lg-none"></div>')
  };

  $(document).ready(function () {

      void 0;

      $(window).resize(viewport.changed(function () {
          void 0;
      }));
  });
})(jQuery, ResponsiveBootstrapToolkit);

$(function () {

  var swiper1 = new Swiper('.promo-slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
      autoplay: {
          delay: 6000,
          disableOnInteraction: true
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      }
  });

  var swiper2 = new Swiper('[data-full-slider]', {
      slidesPerView: 6,
      spaceBetween: 40,
      loop: false,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
      centeredSlides: false,
      centerInsufficientSlides: true,
      roundLengths: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },
      breakpoints: {
          1440: {
              slidesPerView: 6,
              spaceBetween: 15
          },
          1280: {
              slidesPerView: 6,
              spaceBetween: 20
          },
          1024: {
              slidesPerView: 8,
              spaceBetween: 15
          },
          768: {
              centeredSlides: false,
              slidesPerView: 4.2,
              spaceBetween: 18
          },
          576: {
              centeredSlides: false,
              slidesPerView: 2.2,
              spaceBetween: 18
          }
      }
  });

  var swiper3 = new Swiper('[data-inner-slider]', {
      slidesPerView: 5,
      spaceBetween: 40,
      roundLengths: true,
      centerInsufficientSlides: true,
      loop: false,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },
      breakpoints: {
          1280: {
              slidesPerView: 4.5,
              spaceBetween: 40,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 40,
              allowSwipeToNext: false
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 18
          },
          576: {
              centeredSlides: false,
              slidesPerView: 2.5,
              spaceBetween: 18
          }
      }
  });

  var swiper4 = new Swiper('.booksetSlide', {
      slidesPerView: 6,
      spaceBetween: 40,
      roundLengths: true,
      loop: false,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },
      breakpoints: {
          1280: {
              slidesPerView: 4,
              spaceBetween: 40,
          },
          1024: {
              slidesPerView: 5,
              spaceBetween: 40,
              allowSwipeToNext: false
          },
          768: {
              slidesPerView: 4.1,
              spaceBetween: 18
          },
          576: {
              centeredSlides: false,
              slidesPerView: 2.1,
              spaceBetween: 18
          }
      }
  });

  var swiper5 = new Swiper('.bookset_inner_slider', {
      slidesPerView: 4,
      spaceBetween: 40,
      roundLengths: true,
      loop: false,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },
      breakpoints: {
          1280: {
              centeredSlides: false,
              slidesPerView: 4,
              spaceBetween: 40
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 40,
              allowSwipeToNext: false
          },
          768: {
              slidesPerView: 4.2,
              spaceBetween: 18
          },
          576: {
              centeredSlides: false,
              slidesPerView: 2.2,
              spaceBetween: 18
          }
      }
  });

  var swiper6 = new Swiper('.swiper_bn1', {
      spaceBetween: 30,
      roundLengths: true,
      loop: true,
      pagination: {
          el: '.swiper-pagination1',
          clickable: true
      }
  });
  var swiper7 = new Swiper('.swiper_bn2', {
      spaceBetween: 30,
      roundLengths: true,
      loop: true,
      pagination: {
          el: '.swiper-pagination2',
          clickable: true
      }
  });

  var swiper8 = new Swiper('.swiper_bn3', {
      spaceBetween: 30,
      roundLengths: true,
      loop: true,
      pagination: {
          el: '.swiper-pagination3',
          clickable: true
      }
  });

  var swiper9 = new Swiper('.swiper_mb', {
      spaceBetween: 30,
      roundLengths: true,
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
      }
  });

  var swiper10 = new Swiper('[data-banner-slider]', {
      slidesPerView: 3,
      spaceBetween: 80,
      roundLengths: true,
      loop: false,
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },
      breakpoints: {
          1280: {
              slidesPerView: 3,
              spaceBetween: 80
          },
          1024: {
              slidesPerView: 2,
              spaceBetween: 50
          },
          576: {
              slidesPerView: 1,
              spaceBetween: 50
          }
      }
  });

  window.currScrollWidth = 0;
  window.recalcTextWidth = function () {
      var _this = this;
      var _actIdx = 0;
      var _totalTagWidth = 0;
      void 0;
      for (var idx in _this.slides) {
          if (_typeof(_this.slides[idx]) == 'object') {
              var _s = $(_this.slides[idx]);

              var _s_reg = /([\w\s]){1}/g;
              var _s_match = _this.slides[idx].innerText.match(_s_reg);
              var _s_length = _this.slides[idx].innerText.length;

              if (Array.isArray(_s_match)) {
                  if (_s_match.length - _s_length == 0) {
                      _s_length = Math.round(_s_length / 2);
                  } else {
                      _s_length = _s_length - Math.ceil(_s_match.length / 2);
                  }
              }

              _s.addClass('t' + _s_length);
              if (_this.slides[idx].className.indexOf('activeNav') != -1) {
                  _actIdx = idx;
                  _this.wrapperEl.style.transform = 'translate3d(' + _this.slides[idx].offsetLeft * -1 + 'px,0,0)';
                  void 0;
              }
              _totalTagWidth += _s.width();
          }
      }
      if (_this.size >= 1024 && _totalTagWidth < 1024) {
          _this.allowTouchMove = true;
      } else {
          _this.allowTouchMove = true;
      }
      _this.update();

  };

  var mySwiper = new Swiper('.menuBar', {
      slidesPerView: 12,
      spaceBetween: 10,
      roundLengths: true,
      nested: false,
      onlyExternal: false,
      slidesOffsetBefore: '0',
      allowTouchMove: true,
      breakpoints: {
          1280: {
              centeredSlides: false,
              slidesPerView: 'auto',
              spaceBetween: 40
          },
          1024: {
              slidesPerView: 'auto',
              spaceBetween: 40
          },
          768: {
              slidesPerView: 'auto',
              spaceBetween: 18
          },
          576: {
              slidesPerView: 'auto',
              spaceBetween: 5,
              freeMode: true,
              freeModeMomentumBounce: false
          }
      },
      on: {
          resize: window.recalcTextWidth,
          init: window.recalcTextWidth
      }
  });

  var mySwiper2 = new Swiper('.tag_menuBar', {
      slidesPerView: 12,
      spaceBetween: 5,
      roundLengths: true,
      nested: false,
      onlyExternal: false,
      slidesOffsetBefore: '0',
      allowTouchMove: true,
      breakpoints: {
          1280: {
              centeredSlides: false,
              slidesPerView: 'auto',
              spaceBetween: 5
          },
          1024: {
              slidesPerView: 'auto',
              spaceBetween: 5
          },
          768: {
              slidesPerView: 'auto',
              spaceBetween: 5
          },
          576: {
              slidesPerView: 'auto',
              spaceBetween: 5,
              freeMode: true,
              freeModeMomentumBounce: false
          }
      },
      on: {
          resize: window.recalcTextWidth,
          init: window.recalcTextWidth,
          click: function click(e) {
              var _this = $(e.originalTarget);
              var _swiper = _this.parents('.tag_menuBar');
              if (!_this.hasClass('activedSlide')) {
                  _swiper.find('.activedSlide').removeClass('activedSlide');
                  _this.addClass('activedSlide');
              }
          }
      }
  });

  var swiper11 = new Swiper('[data-mybook-case]', {
      slidesPerView: 6,
      spaceBetween: 40,
      roundLengths: true,
      allowTouchMove: false,
      loop: false,
      breakpoints: {
          1280: {
              centeredSlides: false,
              slidesPerView: 6,
              spaceBetween: 40
          },
          1024: {
              slidesPerView: 5,
              spaceBetween: 40
          },
          768: {
              slidesPerView: 4.1,
              spaceBetween: 18
          },
          576: {
              centeredSlides: false,
              slidesPerView: 2.1,
              spaceBetween: 30,
              allowTouchMove: true
          }
      }
  });

  $('.favorite').click(function () {
      $(this).toggleClass("beating");
  });

  $(function () {
      $('[data-toggle="tooltip"]').tooltip();
  });

  $('.coverBox').chameleon("colorize", {
      "canvas_side": 30,
      "rules": {
          "container": function container($elem, color, color_index, img_colors, is_decolorize) {

              if (is_decolorize) {} else {
                  var rgb = img_colors[0].rgb + "";
                  rgb = rgb.replace("rgb", "").replace("(", "").replace(")", "");
                  var arr = rgb.split(',');
                  var r = parseInt(arr[0].trim());
                  var g = parseInt(arr[1].trim());
                  var b = parseInt(arr[2].trim());

                  if (r >= 245 && g >= 245 && b >= 245) {
                      $elem.css({
                          'background-color': img_colors[1].rgb
                      });
                      $elem.attr("c", img_colors[1].rgb);
                  } else {
                      $elem.css({
                          'background-color': img_colors[0].rgb
                      });
                      $elem.attr("c", img_colors[0].rgb);
                  }
              }
          }
      }
  });

  var $bookLinkGradientColor = {};
  $('.book-complex-cover').chameleon("colorize", {
      "canvas_side": 30,
      "rules": {
          ".book-link": function bookLink($elem, color, color_index, img_colors, is_decolorize) {
              if (is_decolorize) {} else {
                  var rgb = img_colors[0].rgb + "";
                  rgb = rgb.replace("rgb", "").replace("(", "").replace(")", "");
                  var arr = rgb.split(',');
                  var r = parseInt(arr[0].trim());
                  var g = parseInt(arr[1].trim());
                  var b = parseInt(arr[2].trim());

                  if (r >= 245 && g >= 245 && b >= 245) {
                      $elem.css({
                          'background-color': img_colors[1].rgb
                      });
                      $elem.attr("c", img_colors[1].rgb);
                  } else {
                      $elem.css({
                          'background-color': img_colors[0].rgb
                      });
                      $elem.attr("c", img_colors[0].rgb);
                  }
              }

              $bookLinkGradientColor = jQuery.fn.chameleon("wrapColor", [img_colors[2].rgba, img_colors[1].rgba, img_colors[0].rgba]);
          },
          ".book-link-backlight": function bookLinkBacklight($elem, color, color_index, img_colors, is_decolorize) {
              var _color = $bookLinkGradientColor;
              $elem.css({ 'background-image': 'linear-gradient(' + _color[0].textContent + ', ' + _color[1].textContent + ', ' + _color[2].textContent + ')' });
          }
      }
  });

  if ($('.js-auto-show-bottom-bar').length) {
      $(window).scroll(function (event) {
          var st = $(this).scrollTop();
          if (st < 50) {
              $(".js-auto-show-bottom-bar").removeClass('back-to-top-is-visible');
          } else {
              if (st > lastScrollTop) {
                  $(".js-auto-show-bottom-bar").removeClass('back-to-top-is-visible');
              } else {
                  $(".js-auto-show-bottom-bar").addClass('back-to-top-is-visible');
              }
          }
          lastScrollTop = st;
      });
  }

  $(".pagination").rPage();

  $('.btn_mobile_search_menu').on('click', function () {
      $('html').scrollTop(0);
      $('.page.wrap').css({ 'transform': "translate3d(-100%,0,0)", 'overflowX': 'inherit' });
  });
  $('.btn_mobile_search_menu_close').on('click', function () {
      $('.page.wrap').css({ 'transform': "", 'overflowX': 'hidden' });
  });

  $.fn.datepicker.dates['zh-TW'] = {
      days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
      daysShort: ["日", "一", "二", "三", "四", "五", "六"],
      daysMin: ["日", "一", "二", "三", "四", "五", "六"],
      months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一", "十二"],
      today: "今日",
      clear: "清除",
      format: "yyyy/mm/dd",
      titleFormat: "yyyy MM", 
      weekStart: 0
  };
  $('.input-daterange.pc-box').datepicker({
      defaultViewDate: { year: '2018', month: '11', day: '1' },
      language: 'zh-TW',
      format: "yyyy/mm/dd",
      autoclose: true,
      templates: {
          leftArrow: '<i class="fa fa-long-arrow-left ft-deepseablue"></i>',
          rightArrow: '<i class="fa fa-long-arrow-right ft-deepseablue"></i>'
      },
      container: ".bookcase_search_pc_box"
  });
  $('.input-daterange.mobile-box').datepicker({
      defaultViewDate: { year: '2018', month: '11', day: '1' },
      language: 'zh-TW',
      format: "yyyy/mm/dd",
      autoclose: true,
      templates: {
          leftArrow: '<i class="fa fa-long-arrow-left ft-deepseablue"></i>',
          rightArrow: '<i class="fa fa-long-arrow-right ft-deepseablue"></i>'
      },
      container: ".bookcase_search_mobile_box"
  }).on('show', function (e) {
      void 0;
      if ($(window).width() <= 320 && $(e.target).hasClass('start_date_input')) {
          $('.datepicker-dropdown.dropdown-menu').addClass('w320');
      } else {
          $('.datepicker-dropdown.dropdown-menu').removeClass('w320');
      }
  });

  $('.bootcase_custom_tags [class*=tag]').on('click', function () {
      $(this).toggleClass('active');
  });

  $('.bookcase_search_pc_box').on("click.bs.dropdown", function (e) {
      e.stopPropagation();
  });
  $('.btn_close_bookcase_search_pc_box').on("click", function (e) {
      $('.bookcase_search_pc_box').dropdown('dispose');
  });
});


$(function () {
  var shrinkHeader = 0;
  $(window).scroll(function () {
      var scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
          $('.header').addClass('shrink');
      } else {
          $('.header').removeClass('shrink');
      }
  });

  function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
  }
});


$(function () {
  var shrinkHeaderOrigin = 35;

  $('[data-header-display-switch]').each(function (idx) {
      var _ori_pos = $(this).data('headerDisplaySwitchOrigin') || shrinkHeaderOrigin;
  });

  $(window).scroll(function () {

      $('.dropdown').each(function (idx) {
          if ($(this).find('.dropdown-menu').is(":visible")) {
              $('.dropdown-toggle', $(this)).dropdown('toggle');
          }
      });

      $('[data-header-display-switch]').each(function (idx) {
          var _offset = $(this).data('headerDisplaySwitchOffset') || 0;
          var _ori_pos = $(this).data('headerDisplaySwitchOrigin') || 0;
          var _curr_pos = _ori_pos + _offset;
          var scroll = getCurrentScroll();

          void 0;
          void 0;
          if (scroll > _curr_pos + 80) {
              if (!$(this).hasClass('shrinkHeader')) {
                  $(this).addClass('shrinkHeader');

                  $(this).one('bsTransitionEnd', function (e) {
                      if ($(e.currentTarget).data('transitionendClass') !== undefined) {
                          void 0;
                      } else {
                          void 0;
                      }

                      $(e.currentTarget).addClass('afterTransitionEnd');
                  }).emulateTransitionEnd(400);
              }
          }
          else if (scroll <= _curr_pos + 90) {
                  if ($(this).hasClass('shrinkHeader')) {
                      $(this).removeClass('shrinkHeader');

                      $(this).one('bsTransitionEnd', function (e) {
                          if ($(e.currentTarget).data('transitionendClass') !== undefined) {
                              void 0;
                          } else {
                              void 0;
                          }

                          $(e.currentTarget).removeClass('afterTransitionEnd');
                      }).emulateTransitionEnd(0);
                  }
              }
      });
  });

  function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
  }
});


function scrollTo() {

  var trigger = $('.js-scroll-to');

  $(trigger).on('click', function () {

      var back = 70; 
      var slug = $(this).attr('data-js-scroll-to');
      var target = $('*[data-js-scroll-to-target="' + slug + '"]');
      var offest = $(target).offset().top - back;
      var speed = 600; 

      $('html, body').animate({
          scrollTop: offest
      }, speed);
  });
}


function scrollToByClick(targetSlug) {

  var back = 70; 
  var offest = $(targetSlug).offset().top - back;
  var speed = 600; 

  $('html, body').animate({
      scrollTop: offest
  }, speed);
}





$(function () {

  scrollTo();










  $('#demo').on('shown.bs.collapse', function (e) {
      $('a[data-target="#demo"]').html('收合');
      scrollToByClick('#demo');
  });
  $('#demo').on('hidden.bs.collapse', function (e) {
      $('a[data-target="#demo"]').html('展開');
      scrollToByClick('#section1');
  });

  $('#morecont').on('shown.bs.collapse', function (e) {
      scrollToByClick('#morecont');
  });

  if ($('#MobileSiteMap').length) {
      $('#mobileFooterSitemap').on('show.bs.collapse', function () {
          $('.footer_sitemap_open').hide();
          $('.footer_sitemap_close').show();
      });
      $('#mobileFooterSitemap').on('hide.bs.collapse', function () {
          $('.footer_sitemap_close').hide();
          $('.footer_sitemap_open').show();
      });
  }
});















$(function () {

  $('.nav-collapse').on('show.bs.collapse', function () {
      $('div[class="overlayMask mainmenu"]').addClass('open');
  });

  $('.nav-collapse .nav-item').on('click', function () {
      $("div[class='overlayMask mainmenu open']").removeClass('open');
      $('.nav-collapse').collapse('hide');
  });
});

$(function () {
  $('.shopping_invoice_select').on('change', function (e) {
      var _target = $(this).val();
      void 0;
      $(_target).collapse('show');
  });
});

$(function () {


































});

$(function () {




































});

$(function () {

  $(document).bind('hyread.bookcase.checkedItemV2', function (e, targetItem, allItem) {

      var _activeObj = function _activeObj(obj) {
          var _this = $(obj);

          if (!_this.hasClass('active')) {
              _this.find('.book_action .add_to_cart').addClass('disabled');
              _this.find('.add_to_wishlist ,.remove_from_list').addClass('disabled');

              _this.addClass('active');
          }
      };

      if (targetItem.length == 1) {
          var _this = $(targetItem);
          _activeObj(_this);
      } else if (targetItem.length > 1) {
          $(targetItem).each(function (idx) {
              _activeObj($(this));
          });
      }

      if (allItem.filter('.active').length == 0) {
          $(document).trigger('hyread.bookcase.disableGrpBtn');
      } else {
          $(document).trigger('hyread.bookcase.enableGrpBtn');
      }

      if (allItem.filter('.active').length != allItem.length && allItem.length != 0) {
          $(document).trigger('hyread.bookcase.enSelectAllBtn');
      } else {
          $(document).trigger('hyread.bookcase.unSelectAllBtn');
      }

      e.stopPropagation();
  });

  $(document).bind('hyread.bookcase.uncheckedItemV2', function (e, targetItem, allItem) {

      var _activeObj = function _activeObj(obj) {
          var _this = $(obj);

          if (_this.hasClass('active')) {
              _this.find('.book_action .add_to_cart').removeClass('disabled');
              _this.find('.add_to_wishlist ,.remove_from_list').removeClass('disabled');

              _this.removeClass('active');
          }

      };

      if (targetItem.length == 1) {
          var _this = $(targetItem);
          _activeObj(_this);
      } else if (targetItem.length > 1) {
          $(targetItem).each(function (idx) {
              _activeObj($(this));
          });
      }

      if (allItem.filter('.active').length == 0) {
          $(document).trigger('hyread.bookcase.disableGrpBtn');
      } else {
          $(document).trigger('hyread.bookcase.enableGrpBtn');
      }

      if (allItem.filter('.active').length == 0 && allItem.length != 0) {
          $(document).trigger('hyread.bookcase.enSelectAllBtn');
      } else {
          $(document).trigger('hyread.bookcase.unSelectAllBtn');
      }

      e.stopPropagation();
  });

  $(document).bind('hyread.bookcase.disableGrpBtn', function (e) {
      var targetItem = '[data-btn-add-to-shoppingcart], '; 
      targetItem += '[data-store-all-items], '; 
      targetItem += '[data-delete-all-items], '; 
      targetItem += '[data-btn-add-to-bookshelf], '; 
      targetItem += '[data-btn-archieve-selected-items]'; 

      $(targetItem).addClass('disabled');

      e.stopPropagation();
  });

  $(document).bind('hyread.bookcase.enableGrpBtn', function (e) {
      var targetItem = '[data-btn-add-to-shoppingcart], '; 
      targetItem += '[data-store-all-items], '; 
      targetItem += '[data-delete-all-items], '; 
      targetItem += '[data-btn-add-to-bookshelf], '; 
      targetItem += '[data-btn-archieve-selected-items]'; 

      $(targetItem).removeClass('disabled');

      e.stopPropagation();
  });

  $(document).bind('hyread.bookcase.unSelectAllBtn', function (e, noChgTxt) {
      var targetItem = '';
      targetItem += '[data-btn-select-all]';

      $(targetItem).addClass('active');

      if (noChgTxt == undefined) {
          $(targetItem).html('取消');
      }

      e.stopPropagation();
  });

  $(document).bind('hyread.bookcase.enSelectAllBtn', function (e, noChgTxt) {
      var targetItem = '';
      targetItem += '[data-btn-select-all]';

      $(targetItem).removeClass('active');

      if (noChgTxt == undefined) {
          $(targetItem).html('全選');
      }

      e.stopPropagation();
  });

  $(document).bind('hyread.bookcase.unSelectActiveBtn', function (e, noChgTxt) {
      var targetItem = '';
      targetItem += '[data-btn-select-active]';

      $(targetItem).addClass('active');
      if (noChgTxt == null) {
          $(targetItem).html('取消');
      }

      e.stopPropagation();
  });

  $(document).bind('hyread.bookcase.enSelectActiveBtn', function (e, noChgTxt) {
      var targetItem = '';
      targetItem += '[data-btn-select-active]';

      $(targetItem).removeClass('active');
      if (noChgTxt == null) {
          $(targetItem).html('選取');
      }

      e.stopPropagation();
  });

  $(document).on('click', '[data-list-items] .marker, [data-list-items] .checkMark', function (e) {
      var _this = $(e.currentTarget);
      var _list_item_name = $('[data-list-items]');
      var _active_btn = $('[data-btn-select-active]');

      if (!_this.parents('[data-list-items]').hasClass('active')) {
          $(document).trigger('hyread.bookcase.checkedItemV2', [_this.parents('[data-list-items]'), _list_item_name]);
      } else {
          $(document).trigger('hyread.bookcase.uncheckedItemV2', [_this.parents('[data-list-items]'), _list_item_name]);
      }




  });

  $('[data-btn-select-all]').on('click', function (e) {
      var _this = $(this);
      var _list_item = $('.bookcase_list_item, [data-list-items]');

      if (_list_item.length == 0) return;

      var _buy_next_time_btn = $('[data-store-this-item]');

      if (!_this.hasClass('active')) {
          $(document).trigger('hyread.bookcase.checkedItemV2', [_list_item, _list_item]);

          $(document).trigger('hyread.bookcase.unSelectAllBtn');

          $(document).trigger('hyread.bookcase.enableGrpBtn');

          _buy_next_time_btn.addClass('disabled');
      } else {
          $(document).trigger('hyread.bookcase.uncheckedItemV2', [_list_item, _list_item]);

          $(document).trigger('hyread.bookcase.enSelectAllBtn');

          $(document).trigger('hyread.bookcase.disableGrpBtn');

          _buy_next_time_btn.removeClass('disabled');
      }
  });

  $('[data-btn-select-active]').on('click', function (e) {
      var _this = $(this);
      var _list_item = $('.label-overlay, .bookcase_list_item, .shopping_cart_list_item, [data-list-items]');
      void 0;
      if (_list_item.length == 0) return;

      if (!_this.hasClass('active')) {
          $(document).trigger('hyread.bookcase.unSelectActiveBtn');
          _list_item.addClass('choose');
      } else {
          $(document).trigger('hyread.bookcase.enSelectActiveBtn');
          _list_item.removeClass('choose').removeClass('active');

          $(document).trigger('hyread.bookcase.disableGrpBtn');
      }
  });

  $(document).on('click', '[data-btn-archieve-selected-items], [data-btn-add-to-bookshelf], [data-btn-add-to-shoppingcart], [data-store-all-items], [data-delete-all-items]', function (e) {
      var _list_item = $('.label-overlay.choose, .bookcase_list_item, [data-list-items]');
      var _target = '.label-overlay.choose.active, .bookcase_list_item.choose.active, .bookcase_list_item.active, [data-list-items].active';

      $(_target).fadeOut(400, function (e) {
          $(this).parents('[data-items-root]').remove();

          $(this).next('[data-list-items-saletag]').remove();

          $(_target).remove(); 
          _list_item.removeClass('choose');

          $(document).trigger('hyread.bookcase.disableGrpBtn');

          if ($(_target).length == 0) {
              $(document).trigger('hyread.bookcase.enSelectActiveBtn');
              $(document).trigger('hyread.bookcase.enSelectAllBtn');
          }
      });
  });

  $(document).on('click', '[data-addcart-this-item]', function (e) {
      var _this = $(e.currentTarget);
      var _target = _this.data('addcartThisItem');
      var _add_cart_btn = $('[data-btn-add-to-shoppingcart]');

      $('#' + _target).fadeOut(400, function (e) {
          $(this).remove();
          $(this).removeClass('active');
          $(this).removeClass('choose');

          if ($('[data-list-items]').filter('.active').length == 0) {
              $(document).trigger('hyread.bookcase.disableGrpBtn');

              $(document).trigger('hyread.bookcase.enSelectAllBtn');

              $(document).trigger('hyread.bookcase.enSelectActiveBtn');

              _add_cart_btn.addClass('disabled');
          }
      });
  });

  $(document).on('click', '[data-addshelf-this-item]', function (e) {
      var _this = $(e.currentTarget);
      var _target = _this.data('addshelfThisItem');
      var _add_shelf_btn = $('[data-btn-add-to-bookshelf]');

      $('#' + _target).fadeOut(400, function (e) {
          $(this).remove();

          if ($('[data-list-items]').filter('.active').length == 0) {
              $(document).trigger('hyread.bookcase.disableGrpBtn');

              $(document).trigger('hyread.bookcase.enSelectAllBtn');

              $(document).trigger('hyread.bookcase.enSelectActiveBtn');

              _add_shelf_btn.addClass('disabled');
          }
      });
  });

  $(document).on('click', '[data-delete-this-item]', function (e) {
      var _this = $(e.currentTarget);
      var _target = _this.data('deleteThisItem');

      $('#' + _target).fadeOut(400, function (e) {
          $(this).next('[data-list-items-saletag]').remove();
          $(this).remove();

          if ($('[data-list-items]').filter('.active').length == 0) {
              $(document).trigger('hyread.bookcase.disableGrpBtn');

              $(document).trigger('hyread.bookcase.enSelectAllBtn');

              $(document).trigger('hyread.bookcase.enSelectActiveBtn');
          }
      });
  });

  $(document).on('click', '[data-store-this-item]', function (e) {
      var _this = $(e.currentTarget);
      var _target = _this.data('storeThisItem');
      var _list_item = $('.label-overlay.choose, .bookcase_list_item, [data-list-items]');

      $('#' + _target).fadeOut(400, function (e) {
          $(this).next('[data-list-items-saletag]').remove();
          $(this).remove();
          _list_item.removeClass('choose');

          if ($('[data-list-items]').filter('.active').length == 0) {
              $(document).trigger('hyread.bookcase.disableGrpBtn');

              $(document).trigger('hyread.bookcase.enSelectAllBtn');

              $(document).trigger('hyread.bookcase.enSelectActiveBtn');
          }
      });
  });













});

$(function () {

  if ($('#mobileSideMenu').length) {
      var jmmenu = $("#mobileSideMenu");
      jmmenu.mmenu({
          wrappers: ["bootstrap4"],
          navbar: {
              add: false
          },
          slidingSubmenus: false,
          hooks: {
              "open:before": function openBefore() {
                  $('.m_sidemenu_open').hide();
                  $('.m_sidemenu_close').show();
                  void 0;
              },
              "close:before": function closeBefore() {
                  $('.m_sidemenu_close').hide();
                  $('.m_sidemenu_open').show();
                  void 0;
              }
          }
      }, {
          offCanvas: {
              pageSelector: '.page.wrap'
          }
      });

      try {

          $(document).on('click', '.mm-btn_next', function (e) {
              var _this = $(e.currentTarget);

              $('.mm-listview > .mm-listitem').removeClass('mm-listitem_active');

              _this.parent().addClass('mm-listitem_active');

              $('~ .mm-panel', _this).hide().slideDown(250);

              $('.mm-listview > .mm-listitem.mm-listitem_opened').not('.mm-listitem_active').children('.mm-panel').slideUp(250, function (e) {
                  $(this).removeAttr('style').addClass('mm-hidden');
                  $(this).parent().removeClass('mm-listitem_opened');
              });
          });

          jmmenu.swipe({
              swipeLeft: function swipeLeft(event, direction, distance, duration, fingerCount, fingerData) {
                  jmmenu.removeClass('mm-menu_opened');
              }
          });
      } catch (e) {
          void 0;
      }
  }
});

$(document).ready(function () {
  $("#btn").click(function () {
      $("#btn").toggleClass("custom_blue_outline_style-add");
      $("#icon").toggleClass("icon-check2");
  });
});

function shoppingnote(x) {
  x.classList.toggle("icon-chevron-thin-up");
}
