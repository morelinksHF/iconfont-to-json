# iconfont-to-json
为react-native项目的react-native-vector-icons转换iconfont字体图标10进制json文件
支持iconfont与codesign字体图标

# Install

```
npm i https://github.com/morelinksHF/iconfont-to-json.git -g
```

# Use

```
iconfonttojson [input iconfont.css path] [output file name]

```

# Example

```
iconfonttojson ./iconfont.css
```
或者配置脚本

1、在package.json文件中添加以下代码
"scripts": {
    "build:iconfont": "iconfonttojson src/iconfont/iconfont.css"
},

2、根据配置iconfont.css地址，生成iconfont.json文件
npm run build:iconfont


```css
@font-face {
  font-family: "iconfont";
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bqxin:before {
  content: "\e68b";
}

.icon-sousuo-copy:before {
  content: "\e62b";
}

.icon-pinglun:before {
  content: "\e63a";
}

.icon-jia:before {
  content: "\e632";
}

.icon-camera_icon:before {
  content: "\e657";
}

.icon-tiaoguofenxiang:before {
  content: "\e77c";
}


```
return
```js
export default {
  "icon-bqxin": 59019,
  "icon-sousuo-copy": 58923,
  "icon-pinglun": 58938,
  "icon-jia": 58930,
  "icon-camera_icon": 58967,
  "icon-tiaoguofenxiang": 59260
}
```
