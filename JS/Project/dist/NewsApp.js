var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class NewsApp {
    constructor() {
        this.apiKey = '47357696740545ec972621d08d67e799';
        this.currentCategory = 'general';
        this.currentPage = 1;
        this.pageSize = 12;
        this.totalResults = 0;
        this.isLoading = false;
        this.categories = [
            { id: 'general', name: 'Общие' },
            { id: 'business', name: 'Бизнес' },
            { id: 'technology', name: 'Технологии' },
            { id: 'sports', name: 'Спорт' },
            { id: 'health', name: 'Здоровье' },
            { id: 'entertainment', name: 'Развлечения' },
            { id: 'science', name: 'Наука' },
        ];
        this.initializeElements();
        this.setupEventListeners();
        this.renderCategories();
        this.loadNews();
    }
    initializeElements() {
        const getElem = (id) => {
            const elem = document.getElementById(id);
            if (!elem)
                throw new Error(`Element with id ${id} not found`);
            return elem;
        };
        this.newsContent = getElem('newsContent');
        this.categorySelector = getElem('categorySelector');
        this.pagination = getElem('pagination');
        this.prevBtn = getElem('prevBtn');
        this.nextBtn = getElem('nextBtn');
        this.pageInfo = getElem('pageInfo');
    }
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.changePage(-1));
        this.nextBtn.addEventListener('click', () => this.changePage(1));
    }
    renderCategories() {
        this.categorySelector.innerHTML = '';
        this.categories.forEach(category => {
            const button = document.createElement('button');
            button.className = `category-btn ${category.id === this.currentCategory ? 'active' : ''}`;
            button.textContent = category.name;
            button.addEventListener('click', () => this.selectCategory(category.id));
            this.categorySelector.appendChild(button);
        });
    }
    selectCategory(categoryId) {
        this.currentCategory = categoryId;
        this.currentPage = 1;
        this.renderCategories();
        this.loadNews();
    }
    loadNews() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.apiKey) {
                this.showError('Необходимо ввести API ключ');
                return;
            }
            if (this.isLoading)
                return;
            this.isLoading = true;
            this.showLoader();
            try {
                const url = `https://newsapi.org/v2/top-headlines?` +
                    `country=us&` +
                    `category=${this.currentCategory}&` +
                    `page=${this.currentPage}&` +
                    `pageSize=${this.pageSize}&` +
                    `apiKey=${this.apiKey}`;
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = yield response.json();
                if (data.status === 'error') {
                    throw new Error('Ошибка API');
                }
                this.totalResults = data.totalResults;
                this.renderNews(data.articles);
                this.updatePagination();
            }
            catch (error) {
                console.error('Ошибка загрузки новостей:', error);
                this.showError(`Ошибка загрузки новостей: ${error.message}`);
            }
            finally {
                this.isLoading = false;
            }
        });
    }
    showLoader() {
        this.newsContent.innerHTML = `
      <div class="loader">
        <div class="spinner"></div>
        <p>Загрузка новостей...</p>
      </div>
    `;
    }
    showError(message) {
        this.newsContent.innerHTML = `
      <div class="error-message">
        ${message}
      </div>
    `;
        this.pagination.style.display = 'none';
    }
    renderNews(articles) {
        if (!articles || articles.length === 0) {
            this.newsContent.innerHTML = `
        <div class="no-results">
          Новости не найдены
        </div>
      `;
            this.pagination.style.display = 'none';
            return;
        }
        const newsGrid = document.createElement('div');
        newsGrid.className = 'news-grid';
        articles.forEach(article => {
            const newsCard = this.createNewsCard(article);
            newsGrid.appendChild(newsCard);
        });
        this.newsContent.innerHTML = '';
        this.newsContent.appendChild(newsGrid);
        this.pagination.style.display = 'flex';
    }
    createNewsCard(article) {
        var _a;
        const card = document.createElement('div');
        card.className = 'news-card';
        const imageUrl = (_a = article.urlToImage) !== null && _a !== void 0 ? _a : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik0xNzUgNzVIMjI1VjEyNUgxNzVWNzVaIiBmaWxsPSIjREREREREIi8+Cjwvc3ZnPgo=';
        const publishedDate = new Date(article.publishedAt).toLocaleDateString('ru-RU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
        card.innerHTML = `
      <img src="${imageUrl}" alt="News Image" class="news-image"
           onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik0xNzUgNzVIMjI1VjEyNUgxNzVWNzVaIiBmaWxsPSIjREREREREIi8+Cjwvc3ZnPgo='">
      <div class="news-content">
        <h3 class="news-title">${article.title || 'Без заголовка'}</h3>
        <p class="news-description">${article.description || 'Описание недоступно'}</p>
        <div class="news-meta">
          <span class="news-source">${article.source.name || 'Неизвестный источник'}</span>
          <span class="news-date">${publishedDate}</span>
        </div>
        <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="news-link">
          Читать полностью
        </a>
      </div>
    `;
        return card;
    }
    updatePagination() {
        const totalPages = Math.ceil(this.totalResults / this.pageSize);
        this.prevBtn.disabled = this.currentPage <= 1;
        this.nextBtn.disabled = this.currentPage >= totalPages;
        this.pageInfo.textContent = `Страница ${this.currentPage} из ${totalPages}`;
    }
    changePage(direction) {
        const totalPages = Math.ceil(this.totalResults / this.pageSize);
        const newPage = this.currentPage + direction;
        if (newPage >= 1 && newPage <= totalPages) {
            this.currentPage = newPage;
            this.loadNews();
        }
    }
}
