### 学习github/git的学习目标

 - 知道 git 是 **版本控制** 工具
 - 要有一个github仓库
 - 已经添加ssh key 互信，也就是可以从本地仓库推送内容（git push）到 github仓库
 - 可以在本地仓库任意添加，删除，修改文件，并做成版本

 这样github/git的初级使用就有能力完成了。但是作为成熟开发者github上面会发 push request ，本地git会开启新分支，都是必备知识。暂时我们先不涉及。


 ### 承前启后

 课程进行道现在，程序员三大基本工具，我们就介绍完毕。

 - 编辑器 atom
 - 命令行 Linux
 - 版本控制 Git/Github

 其实呢，这三个工具的学习都不能一蹴而就，逗是在实际写代码过程中逐步完善，但是这里peter老师有三门课程可以推荐：

 - [atom 爱上 js](http://haoqicat.com/atom-love-js)
 - [驾驭命令行怪兽](http://haoqicat.com/ride-cli-monster)
 - [git 北京](http://haoqicat.com/gitbeijing)

 以上三门课程，大家可以根据自己所处的阶段，有选择的学习里面的部分章节。

 学习上面三大工具的目的，就是为了高效的 **写代码** 。


 ### 进入 Nodejs的世界

 在[Nodejs 官网](https://nodejs.org/en/) 上可以看到。Nodejs 是  一个可以安装到本地机器上的Javascript运行环境

 其实传统上 Javascript 只能运行在浏览器里，也就是说 Javascript 唯一运行的环境就是浏览器。但是 Nodejs 出现以后，就可以在本地机器上执行 Javascript 了。 这个特点带来了 web开发的革命。

 来解释一下。比如 main.js文件，里面写一个

 ```
 console.log('hello world')

 ```

 那么在几年前，想要执行这个 main.js 唯一的方法就是把他放在浏览器里执行

 但是现在我们本地安装好 nodejs之后就可以在命令行这样来执行 main.js了：

 ```
 node main.js

 ```

 其实nodejs 就是一个剥了皮的 Chrome 浏览器。

 ### nodejs 诞生的巨大意义


 一个web项目 都有前台代码和后台代码组成，前台代码都是用 html+css+js来写的，但是传统意义上由于本地机器不能运行 js，所以后台代码是不能用js来写的，于是我们还要学习另外一种语言才你能写web程序，通常用来写Web后台程序的语言有：PHP，java，c#，Pyhon，Ruby，Go...

 所以 Nodejs 的意义就在于，现在开发者终于只用学一种语言就可以同时进行前台和后台的开发了。

 ### Linux 安装 nodejs

 具体步骤可以参考 [《node乐高》第二小节](http://haoqicat.com/nodejs-lego/1-2-nodejs-install)


 ### ES6介绍

 前面我们已经学了两周的js，底层的技术规范是 ES5 ，ES5语法的js 的特点就是 **可以直接在浏览器里执行** 。但是当前成熟的工程是师更多的师采用 **ES6规范的js**（简称为ES6）。

 ES6的特点简单来说：

 - 语法更完善，例如不推荐使用 var ，而是使用 let const 来声明变量
 - 功能更强大，引入了 class 关键字，从此 js 有了面向对象的特性
 - 语法更简单，这一点 从 class 与 prototype 的使用区别上可以看到

 所以，我们课程后续会采用 ES6 来写程序

 但是，ES6 目前的一个问题就是：很多 ES6 语法，浏览器还不支持。这个需要通过 **预处理** 来解决。所谓预处理就是把 ES6 编译成 ES5 。那么这个编译器就是 Babel 。


 ### Babel 简介

 Babel 的官网在：http://babeljs.io/。官网上对他的描述是：

  > 一个javascript 编译器(compiler)

  Babel 编译过程输入格式ES6，输出格式ES5(ES5就是浏览器可以直接支持的JS版本)。

  到Babel官网，点击try it out ，可以进入 Babel 的在线试用环境，左侧如果我们输入 ES6 语句，例如

  ```
  let i =1；

  ```

  那么右侧就会自动输出 ES5 语法的编译结果。

  ```
  var i =1；

  ```

  ### Webpack +babel 来编译 ES6

  使用 Babel 的在线编译环境， 实际项目中没有办法使用。因为比较麻烦。实际中，我们是使用命令行工具，来自动化的完成编辑工作的。具体涉及到工具就是Webpack 和 babel 。

  webpack是一个bundler（把多个js模块打包成一个文件），但是同时也是目前最常用的 **预处理** 工具，可以配合多种工具（或者理解成插件）来使用，而babel只是其中一种。

  当代职业开发者，手写的代码基本上都是浏览器不支持的，例如
  - SASS ---> css
  - HAML/JSX --->html
  - ES6 --->ES5

  但是只需要进行**预处理**（ES6编译ES5，进行JS代码的压缩，文件合并，Sass转css），就可以真正运行了。Webpack就是这样一个预处理工具。用不用预处理步骤是区分业余开发者和职业开发者的一个明显特征。

# 20161112下午

  webpack 模块打孔器
  ### process

### node项目

- 初始化node项目 `npm init`，生成 `package.json`
- 安装webpack，味儿啥是的是的是的是的二级      babel模块

  执行以下命令行安装webpack

```
npm install --save-dev||-D

```
注释：(--save-dev==-D)

  接下来再执行以下命令行

```
npm install --save-dev babel-loader babel-core

```

bebpack 使用时，要用它的配置文件，再配置文件里面，记录webpack各项配置，它的配置文件默认 `webpack.config.js`

新建一个`webpack.config.js` 文件 粘贴以下代码

```
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
};


```
上面的配置文件中，有三大要素需要知道，具体语法不用死记：
- 输入文件index.js，里面是我们手写的ES6代码
- 输出文件 bundle.js，里面的代码浏览器是可以原生支持的
- 指定的编译器beble，babel 使用方式是作为一个 webpack 的 loader

可参考[newming网站](http://newming.coding.me/myidoc/html/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/webpack%E5%9F%BA%E7%A1%80.html)

现在可以执行webpack了
```
./node_modules/.bin/webpack

```
如果上传到github 新建一个 `.gitignore` 文件，建立在与git文件同级
粘贴以下代码

```
node_modules

```
package.josn scripts 字段定义

```
./node_modules/.bin/webpack

```

命令行执行
```
npm run build

```
babel将es6编译成es5
将下列代码粘贴到`webpack.config.js`

```
module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}

```
执行安装babel官网首页的命令

```
npm install --save-dev babel-preset-latest

```

向刚刚添加的`.babelrc`里添加下列代码

```
{
  "presets": ["latest"]
}

```

这下就编译成功了

-w监听
