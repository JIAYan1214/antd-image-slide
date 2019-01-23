import React, { Component } from 'react';
import './App.css';
import {Button} from 'antd'
import 'antd/dist/antd.css'
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

export default App;
