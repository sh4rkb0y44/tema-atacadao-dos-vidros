document.addEventListener('DOMContentLoaded', function() {
  var addToCartBtns = document.querySelectorAll('.add-cart-btn');

  addToCartBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      var productId = this.dataset.productId;
      var variantId = this.dataset.variantId || productId;

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: variantId, quantity: 1 })
      })
      .then(function(response) { return response.json(); })
      .then(function(data) {
        updateCartCount();
        showNotification('Produto adicionado ao carrinho!');
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
    });
  });

  function updateCartCount() {
    fetch('/cart.js')
      .then(function(response) { return response.json(); })
      .then(function(cart) {
        var countEl = document.querySelector('.cart-count');
        if (countEl) {
          countEl.textContent = cart.item_count;
          if (cart.item_count > 0) {
            countEl.style.display = 'flex';
          }
        }
      });
  }

  function showNotification(message) {
    var notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--brand-dark);color:white;padding:16px 24px;border-radius:10px;font-size:14px;font-weight:600;z-index:9999;animation:slideUp 0.3s ease;';
    document.body.appendChild(notification);
    setTimeout(function() {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.3s';
      setTimeout(function() { notification.remove(); }, 300);
    }, 2500);
  }

  var style = document.createElement('style');
  style.textContent = '@keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }';
  document.head.appendChild(style);
});
