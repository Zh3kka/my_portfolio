"use client";

import { useEffect } from "react";

export default function FaviconGenerator() {
  useEffect(() => {
    // Эта функция генерирует различные размеры фавиконов и добавляет соответствующие мета-теги
    const generateFavicons = () => {
      const faviconSizes = [16, 32, 48, 96, 144, 192];
      const head = document.head;

      // Удаляем существующие фавиконы
      const existingLinks = document.querySelectorAll(
        'link[rel="icon"], link[rel="apple-touch-icon"]'
      );
      existingLinks.forEach((link) => link.remove());

      // Добавляем базовый фавикон
      const faviconLink = document.createElement("link");
      faviconLink.rel = "icon";
      faviconLink.href = "/favicon.png";
      faviconLink.type = "image/svg+xml";
      head.appendChild(faviconLink);

      // Добавляем фавикон для устаревших браузеров
      const icoLink = document.createElement("link");
      icoLink.rel = "shortcut icon";
      icoLink.href = "/favicon.ico";
      head.appendChild(icoLink);

      // Добавляем мета-тег для темы на мобильных устройствах
      const themeColorMeta = document.createElement("meta");
      themeColorMeta.name = "theme-color";
      themeColorMeta.content = "#9333EA";
      head.appendChild(themeColorMeta);

      // Добавляем мета-тег для Apple устройств
      const appleMeta = document.createElement("meta");
      appleMeta.name = "apple-mobile-web-app-capable";
      appleMeta.content = "yes";
      head.appendChild(appleMeta);

      // Добавляем мета-тег для статус-бара на Apple устройствах
      const appleStatusBarMeta = document.createElement("meta");
      appleStatusBarMeta.name = "apple-mobile-web-app-status-bar-style";
      appleStatusBarMeta.content = "black-translucent";
      head.appendChild(appleStatusBarMeta);
    };

    generateFavicons();
  }, []);

  return null;
}
