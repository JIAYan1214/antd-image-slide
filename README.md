# antd-image-slide
>基于 antd-modal+swiper4 的弹层图片轮播组件

- *由于旋转功能修改了 swiper4 源码，采用cdn方式引入swiper:*
```
<link rel="stylesheet" href="http://public.fuyoukache.com/web/swiper.4.3.3.css" />
<script src="http://public.fuyoukache.com/web/swiper-4.4.6.rotate.min.js"></script>
```
### webpack配置
`externals: {'Swiper':'Swiper'}`

### 安装包
`yarn add antd-image-slide`

### 示例
```
import ImgSlide from 'antd-image-slide'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgSlideVisible:false
        }
    }
  render() {
    const imgList = [
        'http://pic2.ooopic.com/01/42/30/22b1OOOPIC9f.jpg',
        'http://pic19.nipic.com/20120316/5721017_092601675127_2.jpg',
        'https://3.swiper.com.cn/demo/img/largeNature3.jpg?1',
        'https://img4q.duitang.com/uploads/item/201303/15/20130315223944_EvRW3.thumb.700_0.jpeg',
        'http://pic2.ooopic.com/10/59/48/63b1OOOPIC4f.jpg',
        'https://3.swiper.com.cn/demo/img/largeNature3.jpg?2',
        'http://www.pig66.com/uploadfile/2017/1230/20171230032029905.png',
        'http://www.ld12.com/upimg358/allimg/c150925/14431F3Y0460-1Y3M.png',
        'https://3.swiper.com.cn/demo/img/largeNature3.jpg'
    ]
    return (
      <div className="App">
        {this.state.imgSlideVisible?
            <ImgSlide visible={this.state.imgSlideVisible}
                      showIndex={4}
                      imgList={imgList}
                      onHide={()=>{
                          this.setState({imgSlideVisible:false})
                      }}/>
            :null
        }
        <Button onClick={()=>{ this.setState({imgSlideVisible:true})} } >查看图片</Button>
      </div>
    );
  }
}
```
### 演示
[antd-image-slide.ih5lab.com](http://antd-image-slide.ih5lab.com/)
![截图](https://raw.githubusercontent.com/zeyuang/antd-image-slide/master/readme.img/readme.gif)
