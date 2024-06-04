class Library {
    #books;
  
    constructor(initialBooks) {
      if (new Set(initialBooks).size !== initialBooks.length) {
        throw new Error('В начальном списке книг есть дубликаты.');
      }
      this.#books = initialBooks;
    }
  
    get allBooks() {
      return this.#books;
    }
  
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`Книга с названием "${title}" уже существует в библиотеке.`);
      }
      this.#books.push(title);
    }
  
    removeBook(title) {
      const bookIndex = this.#books.indexOf(title);
      if (bookIndex === -1) {
        throw new Error(`Книги с названием "${title}" нет в библиотеке.`);
      }
      this.#books.splice(bookIndex, 1);
    }
  
    hasBook(title) {
      return this.#books.includes(title);
    }
  }
  
  
  try {
    const myLibrary = new Library(['Война и мир', 'Преступление и наказание']);
    console.log(myLibrary.allBooks); // Выведет текущий список книг
    myLibrary.addBook('Мастер и Маргарита'); // Добавит новую книгу
    console.log(myLibrary.hasBook('Мастер и Маргарита')); // Вернет true
    myLibrary.removeBook('Война и мир'); // Удалит книгу
  } catch (error) {
    console.error(error);
  }