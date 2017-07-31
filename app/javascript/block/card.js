var $cardColors = document.querySelectorAll('.card-colors');

for (var i = 0; i < $cardColors.length; i++) {
  $cardColors[i].addEventListener('click', function()
  {
      var $card = this.parentNode.parentNode.parentNode;

      console.log($card.dataset.color);
      $card.dataset.color = this.dataset.color;
  });
}
