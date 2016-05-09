# NavigationVC
封装了RN自己的Navigator，能够在Component设置对应NavigationBar的部分内容

# 使用方法
```
//Main.js
<NavigationVC component={yourComponentName}/>

//yourComponentName.js
constructor(props) {
          super(props);
          this.props.route.title = 'Title';
          this.props.route.rightButton = {title: 'refresh',
                                          clicked: this._refresh(),};
      }
```
