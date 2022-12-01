<div id="saleCountdown" class="mb-2" data-promo-end="{$product.specific_prices.to}">
  <p class="h4 font-weight-light mb-2">{l s='Sale ends in' mod='przsalecountdown'}:</p>

  <div class="countdown d-flex justify-content-around px-3 px-sm-5">
    <div class="countdown__days text-center">
      <div class="display-2 bg-dark rounded-lg text-light p-2 js-days">0</div>
      <span>{l s='days' mod='przsalecountdown'}</span>
    </div>
    <div class="countdown__separator">
      <div class="display-2 p-2">:</div>
    </div>
    <div class="countdown__hours text-center">
      <div class="display-2 bg-dark rounded-lg text-light p-2 js-hours">0</div>
      <span>{l s='hours' mod='przsalecountdown'}</span>
    </div>
    <div class="countdown__separator">
      <div class="display-2 p-2">:</div>
    </div>
    <div class="countdown__minutes text-center">
      <div class="display-2 bg-dark rounded-lg text-light p-2 js-minutes">0</div>
      <span>{l s='minutes' mod='przsalecountdown'}</span>
    </div>
    <div class="countdown__separator">
      <div class="display-2 p-2">:</div>
    </div>
    <div class="countdown__seconds text-center">
      <div class="display-2 bg-dark rounded-lg text-light p-2 js-seconds">0</div>
      <span>{l s='seconds' mod='przsalecountdown'}</span>
    </div>
  </div>
</div>
