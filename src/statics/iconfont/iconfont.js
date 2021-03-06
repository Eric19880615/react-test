import {createGlobalStyle} from 'styled-components';

export const GlobalIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1543147198215'); /* IE9*/
  src: url('./iconfont.eot?t=1543147198215#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAZEAAsAAAAACRgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8jUpDY21hcAAAAYAAAABqAAABstLuncxnbHlmAAAB7AAAAlYAAAK8UEfsjGhlYWQAAAREAAAALwAAADYTYKN5aGhlYQAABHQAAAAcAAAAJAfeA4ZobXR4AAAEkAAAAA4AAAAUFAAAAGxvY2EAAASgAAAADAAAAAwA8gHObWF4cAAABKwAAAAfAAAAIAEWAHRuYW1lAAAEzAAAAUUAAAJtPlT+fXBvc3QAAAYUAAAAMAAAAEE7UZmzeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeib8IZG7438AQw9zA0AAUZgTJAQDlMwxNeJztkTEOgDAIRR9tNaZx9wBdnZ29Qu/h5KGb3qLS4uAh/OQR+CEMAEyAV3YlgNwIXZe6MnxPHH7g1D6y4HBlK6kcNbcG3/qV6JxF3+psl8z8Wkc+3y706xmjToZejHIY/Ts1G8gDrp0YHwAAeJw1Uc9PE0EUfm9nZ6Zdyu5C261AqbRrtxTpjyxtF0wobcRoYvRiAopRExN/BI9ykktjE+UuZw4GjkJiwhGCEZNe4cTRRP8AE2OiSbv4FjSTvJnve99735sZUABOW4wWmJAGQJnCuI6yKhPVOnoVp3QGY1bCK2LAxJXuUrHMdtdarf0en++excY5pewtFVeaa7us0Wo1eG///vv2v73xPwGB32e2x2ZhEFIAWWpZxJwe+CbcmiejXpYwsYR1VA5GUqgevls/ZOxw/Va7zH6P976tbjK2ufoqiN3J5zMbR6p6tEGxOcP9P5e31O12e4exnXZ7G0Alv1N2wAAkGHAJSgBpO5eWNk5FmZOzhWS8NuWOol21hZ1xqpU5rNgZSebxmDXl1mZpiKc3/JNrT9B4PP+CC4XLZTwp119OY7pZ9JYfNq6UHo2Pjg1ny8fHDPw8zpmOHfU/8eTKl1KtnF/QIzezd3lyKJ50s3RnmgROv7OPTAEdBmimJtyGB/AMwMvknDms40W0hIHCk14049BANTdhxQQlM8QyojysVUroZCSKc+RSSYwQ/tNbsaCe3tDKFVnOSaQwmiZh2krERCfEpVJW43JRcu0tc8fuLcow70TdGNciXBvSOmpdaBx/CVEQpvRNHiH0w5g0C6bp0/EryfO8P6xOiFz/SJ+lsoHhYdqUgUr3g2GwOwZqugz1vdFEaCEU5WXl9dIYXqfmncHBoFk43OH+Vrif408yKAjhR9QzpOsFc8IgpFwl9URA5vl0REe0tCH6Eoz3XeglMYVoyPBfcgyMqgAAeJxjYGRgYADiZ0/ab8bz23xl4GZhAIEbCuv3Iej/DSwMzA1ALgcDE0gUAGMzC7UAeJxjYGRgYG7438AQw8IAAkCSkQEVsAIARwsCbnicY2FgYGBBwwABBAAVAAAAAAAAADgAcAC6AV54nGNgZGBgYGXIYGBnAAEmIOYCQgaG/2A+AwATmgGLAHicZY9NTsMwEIVf+gekEqqoYIfkBWIBKP0Rq25YVGr3XXTfpk6bKokjx63UA3AejsAJOALcgDvwSCebNpbH37x5Y08A3OAHHo7fLfeRPVwyO3INF7gXrlN/EG6QX4SbaONVuEX9TdjHM6bCbXRheYPXuGL2hHdhDx18CNdwjU/hOvUv4Qb5W7iJO/wKt9Dx6sI+5l5XuI1HL/bHVi+cXqnlQcWhySKTOb+CmV7vkoWt0uqca1vEJlODoF9JU51pW91T7NdD5yIVWZOqCas6SYzKrdnq0AUb5/JRrxeJHoQm5Vhj/rbGAo5xBYUlDowxQhhkiMro6DtVZvSvsUPCXntWPc3ndFsU1P9zhQEC9M9cU7qy0nk6T4E9XxtSdXQrbsuelDSRXs1JErJCXta2VELqATZlV44RelzRiT8oZ0j/AAlabsgAAAB4nGNgYoAALgbsgJWRiZGZkYWRlZGNgaW4IDOPrTg1sSg5g8kxkSkpk4EBAEhFBdY=') format('woff'),
    url('./iconfont.ttf?t=1543147198215') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1543147198215#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;