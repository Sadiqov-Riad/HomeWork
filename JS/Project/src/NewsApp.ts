import { NewsArticle, NewsResponse, Category } from './types.js';

export class NewsApp {
  private apiKey = 'API_KEY_HERE';
  private currentCategory = 'general';
  private currentPage = 1;
  private pageSize = 12;
  private totalResults = 0;
  private isLoading = false;

  private categories: Category[] = [
    { id: 'general', name: 'Общие' },
    { id: 'business', name: 'Бизнес' },
    { id: 'technology', name: 'Технологии' },
    { id: 'sports', name: 'Спорт' },
    { id: 'health', name: 'Здоровье' },
    { id: 'entertainment', name: 'Развлечения' },
    { id: 'science', name: 'Наука' },
  ];

  private newsContent!: HTMLElement;
  private categorySelector!: HTMLElement;
  private pagination!: HTMLElement;
  private prevBtn!: HTMLButtonElement;
  private nextBtn!: HTMLButtonElement;
  private pageInfo!: HTMLElement;

  constructor() {
    this.initializeElements();
    this.setupEventListeners();
    this.renderCategories();
    this.loadNews();
  }

  private initializeElements(): void {
    const getElem = (id: string): HTMLElement => {
      const elem = document.getElementById(id);
      if (!elem) throw new Error(`Element with id ${id} not found`);
      return elem;
    };

    this.newsContent = getElem('newsContent');
    this.categorySelector = getElem('categorySelector');
    this.pagination = getElem('pagination');
    this.prevBtn = getElem('prevBtn') as HTMLButtonElement;
    this.nextBtn = getElem('nextBtn') as HTMLButtonElement;
    this.pageInfo = getElem('pageInfo');
  }

  private setupEventListeners(): void {
    this.prevBtn.addEventListener('click', () => this.changePage(-1));
    this.nextBtn.addEventListener('click', () => this.changePage(1));
  }

  private renderCategories(): void {
    this.categorySelector.innerHTML = '';
    this.categories.forEach(category => {
      const button = document.createElement('button');
      button.className = `category-btn ${category.id === this.currentCategory ? 'active' : ''}`;
      button.textContent = category.name;
      button.addEventListener('click', () => this.selectCategory(category.id));
      this.categorySelector.appendChild(button);
    });
  }

  private selectCategory(categoryId: string): void {
    this.currentCategory = categoryId;
    this.currentPage = 1;
    this.renderCategories();
    this.loadNews();
  }

  private async loadNews(): Promise<void> {
    if (!this.apiKey) {
      this.showError('Необходимо ввести API ключ');
      return;
    }

    if (this.isLoading) return;

    this.isLoading = true;
    this.showLoader();

    try {
      const url = `https://newsapi.org/v2/top-headlines?` +
                  `country=us&` +
                  `category=${this.currentCategory}&` +
                  `page=${this.currentPage}&` +
                  `pageSize=${this.pageSize}&` +
                  `apiKey=${this.apiKey}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: NewsResponse = await response.json();

      if (data.status === 'error') {
        throw new Error('Ошибка API');
      }

      this.totalResults = data.totalResults;
      this.renderNews(data.articles);
      this.updatePagination();

    } catch (error: any) {
      console.error('Ошибка загрузки новостей:', error);
      this.showError(`Ошибка загрузки новостей: ${error.message}`);
    } finally {
      this.isLoading = false;
    }
  }

  private showLoader(): void {
    this.newsContent.innerHTML = `
      <div class="loader">
        <div class="spinner"></div>
        <p>Загрузка новостей...</p>
      </div>
    `;
  }

  private showError(message: string): void {
    this.newsContent.innerHTML = `
      <div class="error-message">
        ${message}
      </div>
    `;
    this.pagination.style.display = 'none';
  }

  private renderNews(articles: NewsArticle[]): void {
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

  private createNewsCard(article: NewsArticle): HTMLElement {
    const card = document.createElement('div');
    card.className = 'news-card';

    const imageUrl = article.urlToImage ?? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjhGOUZBIi8+CjxwYXRoIGQ9Ik0xNzUgNzVIMjI1VjEyNUgxNzVWNzVaIiBmaWxsPSIjREREREREIi8+Cjwvc3ZnPgo=';

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

  private updatePagination(): void {
    const totalPages = Math.ceil(this.totalResults / this.pageSize);

    this.prevBtn.disabled = this.currentPage <= 1;
    this.nextBtn.disabled = this.currentPage >= totalPages;

    this.pageInfo.textContent = `Страница ${this.currentPage} из ${totalPages}`;
  }

  private changePage(direction: number): void {
    const totalPages = Math.ceil(this.totalResults / this.pageSize);
    const newPage = this.currentPage + direction;

    if (newPage >= 1 && newPage <= totalPages) {
      this.currentPage = newPage;
      this.loadNews();
    }
  }
}
