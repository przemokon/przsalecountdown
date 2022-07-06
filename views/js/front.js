/**
 * 2007-2022 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 *  @author    PrestaShop SA <contact@prestashop.com>
 *  @copyright 2007-2022 PrestaShop SA
 *  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 *  International Registered Trademark & Property of PrestaShop SA
 *
 * Don't forget to prefix your containers with your own identifier
 * to avoid any conflicts with others containers.
 */

var saleCountdown = {
  selector: "saleCountdown",
  promoEndDate: "",

  getTimeRemaining() {
    var total = Date.parse(this.promoEndDate) - Date.parse(new Date());
    var seconds = Math.floor((total / 1000) % 60);
    var minutes = Math.floor((total / 1000 / 60) % 60);
    var hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds,
    };
  },

  init() {
    this.getPromoEndDate();
    
    var clock = $("#" + this.selector);
    var days = $(clock).find(".js-days");
    var hours = $(clock).find(".js-hours");
    var minutes = $(clock).find(".js-minutes");
    var seconds = $(clock).find(".js-seconds");
    var _that = this;

    function updateClock() {
        var t = _that.getTimeRemaining();
        if (t.total <= 0) {
            $(clock).empty().append('<div class="countdown-clock-face">Końcowe odliczanie!</div>');
            clearInterval(timeinterval);
        }
        $(days).html(t.days);
        $(hours).html(("0" + t.hours).slice(-2));
        $(minutes).html(("0" + t.minutes).slice(-2));
        $(seconds).html(("0" + t.seconds).slice(-2));
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  },

  getPromoEndDate() {
    this.promoEndDate = new Date(
      Date.parse(
        $("#" + this.selector)
            .data("promo-end")
            .replace(/-/g, "/")
      )
    );
  },
};

if ($('#' + saleCountdown.selector).length) {
  saleCountdown.init();
}
