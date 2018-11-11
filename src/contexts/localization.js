import { createContext } from 'react'

export const dictionary = {
  ru: {
    main_menu: 'Главное Меню',
    username: 'Имя пользователя',
    error: 'Ошибка',
    error_page: 'Страница ошибки',
    not_found_page: 'Такой страницы не существует',
    please_select_an_article: 'Пожалуйста выберите статью',
    new_article_page: 'Создание новой статьи',
    increment: 'добавить',
    select_placeholder: ' Выберите статьи...',
    loading: 'Загрузка...',
    by: 'от',
    delete_me: 'удали меня',
    hide_comments: 'скрыть комментарии',
    show_comments: 'показать комментарии',
    no_comments_yet: 'Пока нет комментариев',
    user: 'пользователь',
    comment: 'комментарий',
    publish: 'опубликовать'
  },
  en: {
    main_menu: 'Main Menu',
    username: 'Username',
    error: 'Error',
    error_page: 'Error Page',
    not_found_page: 'Not Found Page',
    please_select_an_article: 'Please Select An Article',
    new_article_page: 'New Article Page',
    increment: 'increment',
    select_placeholder: 'Select articles...',
    loading: 'Loading...',
    by: 'by',
    delete_me: 'delete me',
    hide_comments: 'hide comments',
    show_comments: 'show comments',
    no_comments_yet: 'No comments yet',
    user: 'user',
    comment: 'comment',
    publish: 'publish'
  }
}

export const { Provider, Consumer } = createContext(dictionary.ru)
