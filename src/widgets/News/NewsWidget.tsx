import styles from './NewsWidget.module.scss'
import { FC } from 'react'
import imageFavorite from '../../assets/icons/news-favorite.svg'
import imageFavoriteSelected from '../../assets/icons/news-favorite-selected.svg'
import imageFavoriteSelectedDark from '../../assets/icons/news-favorite-selected-dark.svg'
import widgetNewsPlaceholder from '../../assets/images/widgetNewsPlaceholder.png'
import { NewsWidgetType } from './NewsWidgetType'
import { useState } from 'react'
import { useTheme } from '../../app/providers/ThemeProvide'
import { setStyle } from '../../utils/utils'

const NewsWidget: FC<NewsWidgetType> = (props: NewsWidgetType) => {
  const { id, title, content, published, image } = props
  const { theme } = useTheme()

  const [isSelected, setSelected] = useState<boolean>(
    Boolean(localStorage.getItem(`${id}-favorite-news`))
  )

  return (
    <>
      {published ? (
        <div
          className={setStyle(
            theme,
            styles.news_widget,
            `${styles.news_widget} ${styles['inverse-background']}`
          )}
        >
          <img
            data-testid={'image'}
            className={styles.news_widget__img}
            src={image ? image : widgetNewsPlaceholder}
          ></img>
          <div className={styles.container_content}>
            <h2 data-testid="title" className={styles.news_widget__title}>
              {title}
            </h2>
            <span data-testid="content" className={styles.news_widget__text}>
              {content}
            </span>
          </div>
          <div className={styles.news_favorite}>
            <button
              data-testid="favorite-news"
              onClick={() => {
                if (isSelected) {
                  localStorage.removeItem(`${id}-favorite-news`)
                  setSelected(false)
                } else {
                  localStorage.setItem(`${id}-favorite-news`, 'selected')
                  setSelected(true)
                }
              }}
            >
              <img
                src={
                  isSelected && theme === 'dark'
                    ? imageFavoriteSelectedDark
                    : isSelected && theme === 'light'
                    ? imageFavoriteSelected
                    : imageFavorite
                }
              ></img>
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default NewsWidget
