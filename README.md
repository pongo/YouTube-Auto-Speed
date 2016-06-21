# YouTube Auto Speed

Юзерскрипт и букмарклеты для автоматического изменения скорости ютуба.

## Bookmarklets

Перетаскиваете ссылки на панель задач, кликаете по ним — скорость воспроизведения меняется. Значение скорости в `Настройки видео (шестеренка) → Скорость` при этом **не меняется**.

<table>
<tr>
<td><a href='javascript:(function(){document.getElementsByClassName("video-stream%20html5-main-video")[0].playbackRate=0.5})();'>0.5</a></td>
<td><a href='javascript:(function(){document.getElementsByClassName("video-stream%20html5-main-video")[0].playbackRate=1.0})();'>1.0</a></td>
<td><a href='javascript:(function(){document.getElementsByClassName("video-stream%20html5-main-video")[0].playbackRate=1.5})();'>1.5</a></td>
<td><a href='javascript:(function(){document.getElementsByClassName("video-stream%20html5-main-video")[0].playbackRate=2.0})();'>2.0</a></td>
<td><a href='javascript:(function(){document.getElementsByClassName("video-stream%20html5-main-video")[0].playbackRate=2.5})();'>2.5</a></td>
<td><a href='javascript:(function(){document.getElementsByClassName("video-stream%20html5-main-video")[0].playbackRate=3.0})();'>3.0</a></td>
</tr>
</table>

## Userscript

Скорость по-умолчанию: `2.0`. Работает только на самом сайте ютуба. Значение скорости в `Настройки видео (шестеренка) → Скорость` при этом **не меняется**.

[youtube-auto-speed.user.js](youtube-auto-speed.user.js)