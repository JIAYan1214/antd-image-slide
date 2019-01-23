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
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548151173425&di=c10a3af9520255b16f1f488c01687826&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F01%2F42%2F30%2F22b1OOOPIC9f.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548151173237&di=09a7f4adb033a5ba56ab7b8bcec16636&imgtype=0&src=http%3A%2F%2Fpic19.nipic.com%2F20120316%2F5721017_092601675127_2.jpg',
        'https://3.swiper.com.cn/demo/img/largeNature3.jpg?1',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548151284909&di=cce6190fd279d5dbcd6761bc159b39ad&imgtype=0&src=http%3A%2F%2Fimg4q.duitang.com%2Fuploads%2Fitem%2F201303%2F15%2F20130315223944_EvRW3.thumb.700_0.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548151284907&di=71eed9b44c6daa9993ae35e08c2d5f2c&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F10%2F59%2F48%2F63b1OOOPIC4f.jpg',
        'https://3.swiper.com.cn/demo/img/largeNature3.jpg?2',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548151364786&di=fda1c37c728886e8c709dd180263907e&imgtype=0&src=http%3A%2F%2Fwww.pig66.com%2Fuploadfile%2F2017%2F1230%2F20171230032029905.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548151364783&di=4635b743e1a26ebc4091319189e4c6ed&imgtype=0&src=http%3A%2F%2Fwww.ld12.com%2Fupimg358%2Fallimg%2Fc150925%2F14431F3Y0460-1Y3M.png',
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

![截图](https://raw.githubusercontent.com/zeyuang/antd-image-slide/master/readme.img/readme.gif)
