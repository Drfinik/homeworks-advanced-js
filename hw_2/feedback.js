const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        {
          id: "1",
          text: "Отличный телефон! Батарея держится долго.",
        },
        {
          id: "2",
          text: "Камера супер, фото выглядят просто потрясающе.",
        },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
        {
          id: "3",
          text: "Интересный дизайн, но дорогой.",
        },
      ],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [
        {
          id: "4",
          text: "Люблю играть на PS5, графика на высоте.",
        },
      ],
    },
  ];

  function addReview(product, reviewText) {
    if (reviewText.length < 50 || reviewText.length > 500) {
      throw new Error("Отзыв должен быть от 50 до 500 символов.");
    }

    const newReview = {
      id: Date.now().toString(),
      text: reviewText,
    };

    // Находим продукт в массиве данных
    const productIndex = initialData.findIndex(item => item.product === product);
    if (productIndex !== -1) {
      initialData[productIndex].reviews.push(newReview);
      renderReviews(productIndex);
    } else {
      console.error("Продукт не найден");
    }
  }

  function renderReviews(productIndex) {
    const product = initialData[productIndex];
    const reviewsContainer = document.getElementById(`reviews-${productIndex}`);
    reviewsContainer.innerHTML = ""; // Очищаем контейнер отзывов

    product.reviews.forEach(review => {
      const reviewElement = document.createElement("div");
      reviewElement.classList.add("review");
      reviewElement.textContent = review.text;
      reviewsContainer.appendChild(reviewElement);
    });
  }

  function handleReviewSubmit(productIndex) {
    const reviewText = document.getElementById(`review-text-${productIndex}`).value;
    try {
      addReview(initialData[productIndex].product, reviewText);
      document.getElementById(`review-text-${productIndex}`).value = ""; // Очищаем поле ввода
    } catch (error) {
      const errorElement = document.createElement("div");
      errorElement.classList.add("error");
      errorElement.textContent = error.message;
      document.getElementById(`reviews-${productIndex}`).appendChild(errorElement);
    }
  }

  // Рендеринг начальных данных при загрузке страницы
  initialData.forEach((product, index) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <h2>${product.product}</h2>
      <div id="reviews-${index}" class="reviews"></div>
      <div class="add-review">
        <textarea id="review-text-${index}" placeholder="Введите ваш отзыв..."></textarea>
        <button onclick="handleReviewSubmit(${index})">Добавить отзыв</button>
      </div>
    `;
    document.body.appendChild(productElement);
    renderReviews(index);
  });